import { ponder } from "ponder:registry";
import { getEnvironment, sendToOrchestrator } from "./utils/orchestrator";

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

  const environment = getEnvironment({
    nonce: event.args.nonce,
  });
  await sendToOrchestrator({
    data,
    environment,
  });
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

  const environment = getEnvironment({
    nonce: event.args.nonce,
  });
  await sendToOrchestrator({
    data,
    environment,
  });
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

  const environment = getEnvironment({
    nonce: event.args.nonce,
  });
  await sendToOrchestrator({
    data,
    environment,
  });
});
