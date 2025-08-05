interface AlertPayload {
  severity: 'critical' | 'warning' | 'info';
  title: string;
  message: string;
  chainId: number;
  txHash: string;
  blockNumber: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

interface SlackWebhookPayload {
  text: string;
  attachments: Array<{
    color: string;
    title: string;
    text: string;
    fields: Array<{
      title: string;
      value: string;
      short: boolean;
    }>;
    ts: number;
  }>;
}

interface PagerDutyPayload {
  routing_key: string;
  event_action: 'trigger';
  payload: {
    summary: string;
    severity: 'critical' | 'warning' | 'info';
    source: string;
    custom_details: Record<string, any>;
  };
}

const getSeverityColor = (severity: AlertPayload['severity']): string => {
  switch (severity) {
    case 'critical':
      return '#FF0000';
    case 'warning':
      return '#FFA500';
    case 'info':
      return '#36A64F';
    default:
      return '#808080';
  }
};

export const sendSlackAlert = async (alert: AlertPayload): Promise<void> => {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
  
  if (!slackWebhookUrl) {
    console.warn('SLACK_WEBHOOK_URL not configured, skipping Slack alert');
    return;
  }

  const payload: SlackWebhookPayload = {
    text: `🚨 Security Alert: ${alert.title}`,
    attachments: [
      {
        color: getSeverityColor(alert.severity),
        title: alert.title,
        text: alert.message,
        fields: [
          {
            title: 'Severity',
            value: alert.severity.toUpperCase(),
            short: true,
          },
          {
            title: 'Chain ID',
            value: alert.chainId.toString(),
            short: true,
          },
          {
            title: 'Transaction',
            value: alert.txHash,
            short: false,
          },
          {
            title: 'Block Number',
            value: alert.blockNumber,
            short: true,
          },
          {
            title: 'Timestamp',
            value: new Date(parseInt(alert.timestamp) * 1000).toISOString(),
            short: true,
          },
        ],
        ts: parseInt(alert.timestamp),
      },
    ],
  };

  try {
    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Slack webhook failed: ${response.status} ${response.statusText}`);
    }

    console.log('Slack alert sent successfully');
  } catch (error) {
    console.error('Failed to send Slack alert:', error);
    throw error;
  }
};

export const sendPagerDutyAlert = async (alert: AlertPayload): Promise<void> => {
  const pagerDutyWebhookUrl = process.env.PAGERDUTY_WEBHOOK_URL;
  const pagerDutyRoutingKey = process.env.PAGERDUTY_ROUTING_KEY;
  
  if (!pagerDutyWebhookUrl || !pagerDutyRoutingKey) {
    console.warn('PagerDuty credentials not configured, skipping PagerDuty alert');
    return;
  }

  const payload: PagerDutyPayload = {
    routing_key: pagerDutyRoutingKey,
    event_action: 'trigger',
    payload: {
      summary: `${alert.title} - Chain ${alert.chainId}`,
      severity: alert.severity,
      source: 'ponder-indexer',
      custom_details: {
        chainId: alert.chainId,
        txHash: alert.txHash,
        blockNumber: alert.blockNumber,
        timestamp: alert.timestamp,
        message: alert.message,
        ...alert.metadata,
      },
    },
  };

  try {
    const response = await fetch(pagerDutyWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`PagerDuty webhook failed: ${response.status} ${response.statusText}`);
    }

    console.log('PagerDuty alert sent successfully');
  } catch (error) {
    console.error('Failed to send PagerDuty alert:', error);
    throw error;
  }
};

export const sendSecurityAlert = async (alert: AlertPayload): Promise<void> => {
  console.log(`Security Alert [${alert.severity.toUpperCase()}]: ${alert.title}`);
  
  const promises: Promise<void>[] = [];
  
  if (process.env.SLACK_WEBHOOK_URL) {
    promises.push(sendSlackAlert(alert));
  }
  if (process.env.PAGERDUTY_WEBHOOK_URL && process.env.PAGERDUTY_ROUTING_KEY) {
    promises.push(sendPagerDutyAlert(alert));
  }
  try {
    await Promise.allSettled(promises);
  } catch (error) {
    console.error('Failed to send security alerts:', error);
  }
};
