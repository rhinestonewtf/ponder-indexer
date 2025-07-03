export const routerAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "nonce", type: "uint256", indexed: false }],
    name: "Claimed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "nonce", type: "uint256", indexed: false }],
    name: "Filled",
  },
] as const;
