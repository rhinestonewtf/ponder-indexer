import { sendSecurityAlert } from "./alerts";

interface SecurityEventContext {
  chainId: number;
  blockNumber: bigint;
  blockTimestamp: bigint;
  txHash: string;
  contractAddress: string;
}

export const createSecurityContext = (event: any, context: any, contractAddress: string): SecurityEventContext => ({
  chainId: context.network.chainId,
  blockNumber: event.block.number,
  blockTimestamp: event.block.timestamp,
  txHash: event.transaction.hash,
  contractAddress,
});

export const handleProxyUpgrade = async (
  context: SecurityEventContext,
  implementation: string
) => {
  console.log(`🔧 Proxy upgrade detected: ${context.contractAddress} -> ${implementation}`);

  await sendSecurityAlert({
    severity: 'warning',
    title: 'Proxy Implementation Upgraded',
    message: `Contract ${context.contractAddress} has been upgraded to implementation ${implementation}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      newImplementation: implementation,
    },
  });
};

export const handleRelayerSet = async (
  context: SecurityEventContext,
  relayer: string,
  isTrusted: boolean
) => {
  console.log(`🔄 Relayer configuration change: ${relayer} -> trusted: ${isTrusted}`);

  await sendSecurityAlert({
    severity: !isTrusted ? 'critical' : 'info',
    title: 'Relayer Configuration Changed',
    message: `Relayer ${relayer} has been ${isTrusted ? 'trusted' : 'untrusted'} on contract ${context.contractAddress}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      relayer,
      isTrusted,
    },
  });
};

export const handleRelayerWithdrawal = async (
  context: SecurityEventContext,
  token: string,
  amount: bigint
) => {
  const threshold = LARGE_TRANSFER_THRESHOLDS[context.chainId] || BigInt(10) * BigInt(10 ** 18);
  
  console.log(`💰 Relayer fund withdrawal: ${amount.toString()} of token ${token}`);
const isLargeAmount = amount >= threshold;
  
  await sendSecurityAlert({
    severity: isLargeAmount ? 'warning' : 'info',
    title: 'Funds Withdrawn from Relayer',
    message: `${amount.toString()} of token ${token} withdrawn from relayer contract ${context.contractAddress}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      token,
      amount: amount.toString(),
      isLargeAmount,
      thresholdUsed: threshold.toString(),
    },
  });
};

export const handleTokenApproval = async (
  context: SecurityEventContext,
  token: string,
  amount: bigint
) => {
  const highApprovalThreshold = BigInt(100) * BigInt(10 ** 18); // 100 tokens
  
  if (amount < highApprovalThreshold) {
    return; // Not a high approval amount
  }

  console.log(`ℹ️ High token approval: ${amount.toString()} for token ${token}`);

  await sendSecurityAlert({
    severity: 'info',
    title: 'High Token Approval Set',
    message: `High approval of ${amount.toString()} set for token ${token} on contract ${context.contractAddress}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      token,
      amount: amount.toString(),
      thresholdUsed: highApprovalThreshold.toString(),
    },
  });
};

export const handleFillRouteAdded = async (
  context: SecurityEventContext,
  selector: string,
  router: string
) => {
  console.log(`🛣️ Fill route added: selector ${selector} -> router ${router}`);

  await sendSecurityAlert({
    severity: 'info',
    title: 'Fill Route Added to Router',
    message: `New fill route added to router contract ${context.contractAddress}: selector ${selector} mapped to router ${router}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      selector,
      router,
      eventType: 'FillRouteAdded',
    },
  });
};

export const handleClaimRouteAdded = async (
  context: SecurityEventContext,
  selector: string,
  router: string
) => {
  console.log(`🛣️ Claim route added: selector ${selector} -> router ${router}`);

  await sendSecurityAlert({
    severity: 'info',
    title: 'Claim Route Added to Router',
    message: `New claim route added to router contract ${context.contractAddress}: selector ${selector} mapped to router ${router}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      selector,
      router,
      eventType: 'ClaimRouteAdded',
    },
  });
};