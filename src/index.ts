import { ponder } from "ponder:registry";
import {
  createSecurityContext,
  handleFillRouteAdded,
  handleClaimRouteAdded,
} from "./utils/security";
import { 
  handleBusinessEvent,
  handleSecurityEvent
} from "./utils/eventHandlers";
import { 
  ROUTER_ADDRESS
} from "./utils/constants";

// Business Events
ponder.on("rsSpokePool:Filled", async ({ event, context }) => {
  await handleBusinessEvent("Filled", event, context, "rsSpokePool");
});

ponder.on("originModule:Deposited", async ({ event, context }) => {
  await handleBusinessEvent("Deposited", event, context, "originModule");
});

ponder.on("sameChainModule:Deposited", async ({ event, context }) => {
  await handleBusinessEvent("Deposited", event, context, "sameChainModule");
});

ponder.on("router:Claimed", async ({ event, context }) => {
  await handleBusinessEvent("Claimed", event, context, "router");
});

ponder.on("router:Filled", async ({ event, context }) => {
  await handleBusinessEvent("Filled", event, context, "router");
});

ponder.on("router:FillRouteAdded", async ({ event, context }) => {
  const securityContext = createSecurityContext(event, context, ROUTER_ADDRESS);
  await handleFillRouteAdded(securityContext, event.args.selector, event.args.router);
});

ponder.on("router:ClaimRouteAdded", async ({ event, context }) => {
  const securityContext = createSecurityContext(event, context, ROUTER_ADDRESS);
  await handleClaimRouteAdded(securityContext, event.args.selector, event.args.router);
});

// Security Events - Using constants for addresses
ponder.on("proxies:Upgraded", async ({ event, context }) => {
  // Determine which contract this is based on the event address
  const contractAddress = event.log.address.toLowerCase();
  await handleSecurityEvent("Upgraded", event, context, contractAddress);
});

ponder.on("proxies:OwnershipTransferred", async ({ event, context }) => {
  const contractAddress = event.log.address.toLowerCase();
  await handleSecurityEvent("OwnershipTransferred", event, context, contractAddress);
});

ponder.on("proxies:Transfer", async ({ event, context }) => {
  const contractAddress = event.log.address.toLowerCase();
  await handleSecurityEvent("Transfer", event, context, contractAddress);
});

ponder.on("proxies:Withdrawal", async ({ event, context }) => {
  const contractAddress = event.log.address.toLowerCase();
  await handleSecurityEvent("Withdrawal", event, context, contractAddress);
});

ponder.on("proxies:RelayerSet", async ({ event, context }) => {
  const contractAddress = event.log.address.toLowerCase();
  await handleSecurityEvent("RelayerSet", event, context, contractAddress);
});

ponder.on("proxies:Withdrawn", async ({ event, context }) => {
  const contractAddress = event.log.address.toLowerCase();
  await handleSecurityEvent("Withdrawn", event, context, contractAddress);
});

ponder.on("proxies:Approved", async ({ event, context }) => {
  const contractAddress = event.log.address.toLowerCase();
  await handleSecurityEvent("Approved", event, context, contractAddress);
});
