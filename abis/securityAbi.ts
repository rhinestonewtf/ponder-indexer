// Common proxy and security-related events
export const securityAbi = [
  // EIP-1967 Proxy Upgrade events
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "implementation", type: "address", indexed: true }
    ],
    name: "Upgraded",
  },
  {
    type: "event", 
    anonymous: false,
    inputs: [
      { name: "beacon", type: "address", indexed: true }
    ],
    name: "BeaconUpgraded",
  },
  // OpenZeppelin Ownable events
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "previousOwner", type: "address", indexed: true },
      { name: "newOwner", type: "address", indexed: true }
    ],
    name: "OwnershipTransferred",
  },
  // Common admin change events
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "previousAdmin", type: "address", indexed: false },
      { name: "newAdmin", type: "address", indexed: false }
    ],
    name: "AdminChanged",
  },
  // ERC20 Transfer events for monitoring fund movements
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false }
    ],
    name: "Transfer",
  },
  // ETH withdrawal/deposit events (common pattern)
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "user", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false }
    ],
    name: "Withdrawal",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "user", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false }
    ],
    name: "Deposit",
  },
  // Relayer-specific events (from Rhinestone Relayer contract)
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "relayer", type: "address", indexed: true },
      { name: "isTrusted", type: "bool", indexed: false }
    ],
    name: "RelayerSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "token", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false }
    ],
    name: "Withdrawn",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "token", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false }
    ],
    name: "Approved",
  },
] as const;
