import { ponder } from "ponder:registry";
import { ORCHESTRATOR_DEV_URL, ORCHESTRATOR_URL } from "./utils/constants";
import { getIsDev, sendToOrchestrator } from "./utils/orchestrator";

ponder.on("rsSpokePool:Filled", async ({ event, context }) => {
  const data = {
    eventType: "Filled",
    chainId: context.network.chainId,
    blockNumber: event.block.number.toString(),
    blockTimestamp: event.block.timestamp.toString(),
    params: {
      txHash: event.transaction.hash,
      nonce: event.args.nonce.toString(),
    },
  };

  const isDev = getIsDev({ tx: event.transaction });

  if (isDev) {
    await sendToOrchestrator({
      data,
      orchestratorUrl: ORCHESTRATOR_DEV_URL,
      orchestratorApiKey: process.env.ORCHESTRATOR_DEV_API_KEY!,
    });
  } else {
    await sendToOrchestrator({
      data,
      orchestratorUrl: ORCHESTRATOR_URL,
      orchestratorApiKey: process.env.ORCHESTRATOR_API_KEY!,
    });
  }
});

ponder.on("originModule:Deposited", async ({ event, context }) => {
  const data = {
    eventType: "Deposited",
    chainId: context.network.chainId,
    blockNumber: event.block.number.toString(),
    blockTimestamp: event.block.timestamp.toString(),
    params: {
      txHash: event.transaction.hash,
      depositId: event.args.nonce.toString(),
    },
  };

  const isDev = getIsDev({ tx: event.transaction });

  if (isDev) {
    await sendToOrchestrator({
      data,
      orchestratorUrl: ORCHESTRATOR_DEV_URL,
      orchestratorApiKey: process.env.ORCHESTRATOR_DEV_API_KEY!,
    });
  } else {
    await sendToOrchestrator({
      data,
      orchestratorUrl: ORCHESTRATOR_URL,
      orchestratorApiKey: process.env.ORCHESTRATOR_API_KEY!,
    });
  }
});

ponder.on("sameChainModule:Deposited", async ({ event, context }) => {
  const data = {
    eventType: "Deposited",
    chainId: context.network.chainId,
    blockNumber: event.block.number.toString(),
    blockTimestamp: event.block.timestamp.toString(),
    params: {
      txHash: event.transaction.hash,
      depositId: event.args.nonce.toString(),
    },
  };

  const isDev = getIsDev({ tx: event.transaction });

  if (isDev) {
    await sendToOrchestrator({
      data,
      orchestratorUrl: ORCHESTRATOR_DEV_URL,
      orchestratorApiKey: process.env.ORCHESTRATOR_DEV_API_KEY!,
    });
  } else {
    await sendToOrchestrator({
      data,
      orchestratorUrl: ORCHESTRATOR_URL,
      orchestratorApiKey: process.env.ORCHESTRATOR_API_KEY!,
    });
  }
});
