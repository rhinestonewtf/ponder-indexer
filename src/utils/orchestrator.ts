export const sendToOrchestrator = async ({
  data,
  orchestratorUrl,
}: {
  data: any;
  orchestratorUrl: string;
}) => {
  await fetch(`${orchestratorUrl}/chain-events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ORCHESTRATOR_API_KEY!,
    },
    body: JSON.stringify(data),
  });
};
