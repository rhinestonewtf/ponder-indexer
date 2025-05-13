import { ponder } from "ponder:registry";
import { ORCHESTRATOR_DEV_URL, ORCHESTRATOR_URL } from "./utils/constants";
import { sendToOrchestrator } from "./utils/orchestrator";

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

  await sendToOrchestrator({ data, orchestratorUrl: ORCHESTRATOR_URL });
  await sendToOrchestrator({ data, orchestratorUrl: ORCHESTRATOR_DEV_URL });
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

  await sendToOrchestrator({ data, orchestratorUrl: ORCHESTRATOR_URL });
  await sendToOrchestrator({ data, orchestratorUrl: ORCHESTRATOR_DEV_URL });
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

  await sendToOrchestrator({ data, orchestratorUrl: ORCHESTRATOR_URL });
  await sendToOrchestrator({ data, orchestratorUrl: ORCHESTRATOR_DEV_URL });
});
