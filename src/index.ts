import { ponder } from "ponder:registry";
import { ORCHESTRATOR_URL } from "./utils/constants";

ponder.on("rsSpokePool:Filled", async ({ event, context }) => {
  await fetch(`${ORCHESTRATOR_URL}/chain-events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ORCHESTRATOR_API_KEY!,
    },
    body: JSON.stringify({
      eventType: "Filled",
      chainId: context.network.chainId,
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      params: {
        txHash: event.transaction.hash,
        nonce: event.args.nonce.toString(),
      },
    }),
  });
});

ponder.on("originModule:Deposited", async ({ event, context }) => {
  await fetch(`${ORCHESTRATOR_URL}/chain-events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ORCHESTRATOR_API_KEY!,
    },
    body: JSON.stringify({
      eventType: "Deposited",
      chainId: context.network.chainId,
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      params: {
        txHash: event.transaction.hash,
        depositId: event.args.nonce.toString(),
      },
    }),
  });
});

ponder.on("sameChainModule:Deposited", async ({ event, context }) => {
  await fetch(`${ORCHESTRATOR_URL}/chain-events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ORCHESTRATOR_API_KEY!,
    },
    body: JSON.stringify({
      eventType: "Deposited",
      chainId: context.network.chainId,
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      params: {
        txHash: event.transaction.hash,
        depositId: event.args.nonce.toString(),
      },
    }),
  });
});
