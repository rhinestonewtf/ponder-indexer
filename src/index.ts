import { ponder } from "ponder:registry";
import { getEnvironment, sendToOrchestrator } from "./utils/orchestrator";
import { notify } from "./utils/notifier";

ponder.on("rsSpokePool:Filled", async ({ event, context }) => {
  const data = {
    eventType: "Filled",
    chainId: context.chain.id,
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
    chainId: context.chain.id,
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
    chainId: context.chain.id,
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
    eventType: "Claimed",
    chainId: context.chain.id,
    blockNumber: event.block.number.toString(),
    blockTimestamp: event.block.timestamp.toString(),
    from: event.transaction.from,
    txHash: event.transaction.hash,
    id: event.args.nonce.toString(),
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
    chainId: context.chain.id,
    blockNumber: event.block.number.toString(),
    blockTimestamp: event.block.timestamp.toString(),
    from: event.transaction.from,
    txHash: event.transaction.hash,
    id: event.args.nonce.toString(),
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

ponder.on("router:FillRouteAdded", async ({ event, context }) => {
  await notify({
    message: `FillRouteAdded: ${event.args.selector} on chain ${context.chain.id} with route ${event.args.router}`,
  });
});

ponder.on("router:ClaimRouteAdded", async ({ event, context }) => {
  await notify({
    message: `ClaimRouteAdded: ${event.args.selector} on chain ${context.chain.id} with route ${event.args.router}`,
  });
});

ponder.on("proxies:Upgraded", async ({ event, context }) => {
  await notify({
    message: `Proxy ${event.log.address} upgraded on chain ${context.chain.id} to ${event.args.implementation}`,
  });
});
