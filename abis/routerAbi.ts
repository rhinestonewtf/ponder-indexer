export const routerAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "nonce", type: "uint256", indexed: true }],
    name: "Claimed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "nonce", type: "uint256", indexed: true }],
    name: "Filled",
  },
] as const;
