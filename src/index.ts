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
  try {
    await sendToOrchestrator({
      data,
      environment,
    });
  } catch (error) {
    console.log("rsSpokePool filled error: ", error);
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

  const environment = getEnvironment({
    nonce: event.args.nonce,
  });
  try {
    await sendToOrchestrator({
      data,
      environment,
    });
  } catch (error) {
    console.log("origin module deposit error: ", error);
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

  const environment = getEnvironment({
    nonce: event.args.nonce,
  });
  try {
    await sendToOrchestrator({
      data,
      environment,
    });
  } catch (error) {
    console.log("same chain module deposit error: ", error);
  }
});

ponder.on("router:Claimed", async ({ event, context }) => {
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

  let environment = getEnvironment({
    nonce: event.args.nonce,
  });
  try {
    await sendToOrchestrator({
      data,
      environment,
    });
  } catch (error) {
    console.log("router claimed error: ", error);
  }
});

ponder.on("router:Filled", async ({ event, context }) => {
  const data = {
    eventType: "Filled",
    chainId: context.network.chainId,
    blockNumber: event.block.number.toString(),
    blockTimestamp: event.block.timestamp.toString(),
    params: {
      txHash: event.transaction.hash,
      depositId: event.args.nonce.toString(),
    },
  };

  let environment = getEnvironment({
    nonce: event.args.nonce,
  });
  try {
    await sendToOrchestrator({
      data,
      environment,
    });
  } catch (error) {
    console.log("router claimed error: ", error);
  }
});
