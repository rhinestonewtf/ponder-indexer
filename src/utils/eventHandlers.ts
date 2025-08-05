import { getEnvironment, sendToOrchestrator } from "./orchestrator";
import {
  createSecurityContext,
  handleProxyUpgrade,
  handleOwnershipTransfer,
  handleLargeTransfer,
  handleWithdrawal,
  handleRelayerSet,
  handleRelayerWithdrawal,
  handleTokenApproval,
} from "./security";

/**
 * Generic handler for business events (Filled, Deposited, Claimed)
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
    case "OwnershipTransferred":
      await handleOwnershipTransfer(securityContext, event.args.previousOwner, event.args.newOwner);
      break;
    case "Transfer":
      await handleLargeTransfer(securityContext, event.args.from, event.args.to, event.args.value);
      break;
    case "Withdrawal":
      await handleWithdrawal(securityContext, event.args.user, event.args.amount);
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
    default:
      console.warn(`Unknown security event type: ${eventType}`);
  }
};

/**
 * Map of event types to their handler functions for type safety
 */
export const EVENT_HANDLERS = {
  business: {
    Filled: handleBusinessEvent,
    Deposited: handleBusinessEvent,
    Claimed: handleBusinessEvent,
  },
  security: {
    Upgraded: handleSecurityEvent,
    OwnershipTransferred: handleSecurityEvent,
    Transfer: handleSecurityEvent,
    Withdrawal: handleSecurityEvent,
    RelayerSet: handleSecurityEvent,
    Withdrawn: handleSecurityEvent,
    Approved: handleSecurityEvent,
  }
} as const;
