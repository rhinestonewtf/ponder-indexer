import { getEnvironment, sendToOrchestrator } from "./orchestrator";
import {
  createSecurityContext,
  handleProxyUpgrade,
  handleRelayerSet,
  handleRelayerWithdrawal,
  handleTokenApproval,
  handleFillRouteAdded,
  handleClaimRouteAdded,
} from "./security";

/**
 * Generic handler for business events
 */
export const handleBusinessEvent = async (
  eventType: string, 
  event: any, 
  context: any, 
  contractName: string
) => {
  const data = {
    eventType,
    chainId: context.network.chainId,
    blockNumber: event.block.number.toString(),
    blockTimestamp: event.block.timestamp.toString(),
    ...(eventType === "Filled" && contractName === "router" ? {
      from: event.transaction.from,
      txHash: event.transaction.hash,
      id: event.args.nonce.toString(),
    } : eventType === "Filled" ? {
      params: {
        txHash: event.transaction.hash,
        nonce: event.args.nonce.toString(),
      },
    } : eventType === "Claimed" ? {
      from: event.transaction.from,
      txHash: event.transaction.hash,
      id: event.args.nonce.toString(),
    } : {
      params: {
        txHash: event.transaction.hash,
        depositId: event.args.nonce.toString(),
      },
    }),
  };

  const environment = getEnvironment({
    nonce: event.args.nonce,
  });
  
  try {
    await sendToOrchestrator({ data, environment });
  } catch (error) {
    console.log(`${contractName} ${eventType.toLowerCase()} error: `, error);
  }
};

/**
 * Generic handler for security events
 */
export const handleSecurityEvent = async (
  eventType: string, 
  event: any, 
  context: any, 
  contractAddress: string
) => {
  const securityContext = createSecurityContext(event, context, contractAddress);
  
  switch (eventType) {
    case "Upgraded":
      await handleProxyUpgrade(securityContext, event.args.implementation);
      break;
    case "RelayerSet":
      await handleRelayerSet(securityContext, event.args.relayer, event.args.isTrusted);
      break;
    case "Withdrawn":
      await handleRelayerWithdrawal(securityContext, event.args.token, event.args.amount);
      break;
    case "Approved":
      await handleTokenApproval(securityContext, event.args.token, event.args.amount);
      break;
    case "FillRouteAdded":
      await handleFillRouteAdded(securityContext, event.args.selector);
      break;
    case "ClaimRouteAdded":
      await handleClaimRouteAdded(securityContext, event.args.selector);
      break;
    default:
      console.warn(`Unknown security event type: ${eventType}`);
  }
};
