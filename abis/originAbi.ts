export const originAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "account", type: "address", indexed: true },
      { name: "nonce", type: "uint256", indexed: true },
    ],
    name: "Deposited",
  },
] as const;
