export const relayerAbi = [
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