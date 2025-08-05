import { sendSecurityAlert } from "./alerts";
import { RELAYER_ADDRESSES, LARGE_TRANSFER_THRESHOLDS } from "./constants";

interface SecurityEventContext {
  chainId: number;
  blockNumber: bigint;
  blockTimestamp: bigint;
  txHash: string;
  contractAddress: string;
}

// Convert Ponder context to our security context
export const createSecurityContext = (event: any, context: any, contractAddress: string): SecurityEventContext => ({
  chainId: context.network.chainId,
  blockNumber: event.block.number,
  blockTimestamp: event.block.timestamp,
  txHash: event.transaction.hash,
  contractAddress,
});

export const handleProxyUpgrade = async (
  context: SecurityEventContext,
  implementation: string
) => {
  console.log(`🔧 Proxy upgrade detected: ${context.contractAddress} -> ${implementation}`);

  await sendSecurityAlert({
    severity: 'warning',
    title: 'Proxy Implementation Upgraded',
    message: `Contract ${context.contractAddress} has been upgraded to implementation ${implementation}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      newImplementation: implementation,
    },
  });
};

export const handleBeaconUpgrade = async (
  context: SecurityEventContext,
  beacon: string
) => {
  console.log(`🔧 Beacon upgrade detected: ${context.contractAddress} -> ${beacon}`);
  
  await sendSecurityAlert({
    severity: 'warning',
    title: 'Beacon Upgraded',
    message: `Contract ${context.contractAddress} beacon has been upgraded to ${beacon}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      newBeacon: beacon,
    },
  });
};

export const handleOwnershipTransfer = async (
  context: SecurityEventContext,
  previousOwner: string,
  newOwner: string
) => {
  console.log(`👑 Ownership transfer detected: ${previousOwner} -> ${newOwner}`);

  await sendSecurityAlert({
    severity: 'warning',
    title: 'Contract Ownership Transferred',
    message: `Contract ${context.contractAddress} ownership transferred from ${previousOwner} to ${newOwner}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      previousOwner,
      newOwner,
    },
  });
};

export const handleAdminChange = async (
  context: SecurityEventContext,
  previousAdmin: string,
  newAdmin: string
) => {
  console.log(`🔑 Admin change detected: ${previousAdmin} -> ${newAdmin}`);

  await sendSecurityAlert({
    severity: 'warning',
    title: 'Contract Admin Changed',
    message: `Contract ${context.contractAddress} admin changed from ${previousAdmin} to ${newAdmin}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      previousAdmin,
      newAdmin,
    },
  });
};

export const handleLargeTransfer = async (
  context: SecurityEventContext,
  from: string,
  to: string,
  value: bigint,
  tokenAddress?: string
) => {
  const threshold = LARGE_TRANSFER_THRESHOLDS[context.chainId] || BigInt(10) * BigInt(10 ** 18);
  
  if (value < threshold) {
    return; // Not a large transfer
  }

  const isRelayerInvolved = RELAYER_ADDRESSES.includes(from.toLowerCase()) || RELAYER_ADDRESSES.includes(to.toLowerCase());

  if (!isRelayerInvolved) {
    return; // Not involving monitored addresses
  }

  console.log(`💰 Large transfer detected: ${value.toString()} from ${from} to ${to}`);

  const severity = 'critical';
  const tokenInfo = tokenAddress ? ` (Token: ${tokenAddress})` : ' (ETH/Native)';
  
  await sendSecurityAlert({
    severity,
    title: 'Large Fund Movement Detected',
    message: `Large transfer of ${value.toString()} detected from ${from} to ${to}${tokenInfo}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      from,
      to,
      value: value.toString(),
      tokenAddress,
      isRelayerInvolved,
      thresholdUsed: threshold.toString(),
    },
  });
};

export const handleWithdrawal = async (
  context: SecurityEventContext,
  user: string,
  amount: bigint
) => {
  const threshold = LARGE_TRANSFER_THRESHOLDS[context.chainId] || BigInt(10) * BigInt(10 ** 18);
  
  if (amount < threshold) {
    return; // Not a large withdrawal
  }

  const isRelayerWithdrawal = RELAYER_ADDRESSES.includes(user.toLowerCase());

  if (!isRelayerWithdrawal) {
    return; // Not from monitored sources
  }

  console.log(`💸 Large withdrawal detected: ${amount.toString()} by ${user}`);

  await sendSecurityAlert({
    severity: 'critical',
    title: 'Large Withdrawal Detected',
    message: `Large withdrawal of ${amount.toString()} detected by ${user} from ${context.contractAddress}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      user,
      amount: amount.toString(),
      contractAddress: context.contractAddress,
      isRelayerWithdrawal,
      thresholdUsed: threshold.toString(),
    },
  });
};

// Relayer-specific event handlers (based on Rhinestone Relayer contract)
export const handleRelayerSet = async (
  context: SecurityEventContext,
  relayer: string,
  isTrusted: boolean
) => {
  console.log(`🔄 Relayer configuration change: ${relayer} -> trusted: ${isTrusted}`);

  await sendSecurityAlert({
    severity: !isTrusted ? 'critical' : 'info',
    title: 'Relayer Configuration Changed',
    message: `Relayer ${relayer} has been ${isTrusted ? 'trusted' : 'untrusted'} on contract ${context.contractAddress}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      relayer,
      isTrusted,
    },
  });
};

export const handleRelayerWithdrawal = async (
  context: SecurityEventContext,
  token: string,
  amount: bigint
) => {
  const threshold = LARGE_TRANSFER_THRESHOLDS[context.chainId] || BigInt(10) * BigInt(10 ** 18);
  
  console.log(`💰 Relayer fund withdrawal: ${amount.toString()} of token ${token}`);
const isLargeAmount = amount >= threshold;
  
  await sendSecurityAlert({
    severity: isLargeAmount ? 'warning' : 'info',
    title: 'Funds Withdrawn from Relayer',
    message: `${amount.toString()} of token ${token} withdrawn from relayer contract ${context.contractAddress}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      token,
      amount: amount.toString(),
      isLargeAmount,
      thresholdUsed: threshold.toString(),
    },
  });
};

export const handleTokenApproval = async (
  context: SecurityEventContext,
  token: string,
  amount: bigint
) => {
  const highApprovalThreshold = BigInt(100) * BigInt(10 ** 18); // 100 tokens
  
  if (amount < highApprovalThreshold) {
    return; // Not a high approval amount
  }

  console.log(`ℹ️ High token approval: ${amount.toString()} for token ${token}`);

  await sendSecurityAlert({
    severity: 'info',
    title: 'High Token Approval Set',
    message: `High approval of ${amount.toString()} set for token ${token} on contract ${context.contractAddress}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      token,
      amount: amount.toString(),
      thresholdUsed: highApprovalThreshold.toString(),
    },
  });
};

// Router-specific event handlers
export const handleFillRouteAdded = async (
  context: SecurityEventContext,
  selector: string,
  router: string
) => {
  console.log(`🛣️ Fill route added: selector ${selector} -> router ${router}`);

  await sendSecurityAlert({
    severity: 'info',
    title: 'Fill Route Added to Router',
    message: `New fill route added to router contract ${context.contractAddress}: selector ${selector} mapped to router ${router}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      selector,
      router,
      eventType: 'FillRouteAdded',
    },
  });
};

export const handleClaimRouteAdded = async (
  context: SecurityEventContext,
  selector: string,
  router: string
) => {
  console.log(`🛣️ Claim route added: selector ${selector} -> router ${router}`);

  await sendSecurityAlert({
    severity: 'info',
    title: 'Claim Route Added to Router',
    message: `New claim route added to router contract ${context.contractAddress}: selector ${selector} mapped to router ${router}`,
    chainId: context.chainId,
    txHash: context.txHash,
    blockNumber: context.blockNumber.toString(),
    timestamp: context.blockTimestamp.toString(),
    metadata: {
      contractAddress: context.contractAddress,
      selector,
      router,
      eventType: 'ClaimRouteAdded',
    },
  });
};
