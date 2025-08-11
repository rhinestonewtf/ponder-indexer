export const rsSpokePoolAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "nonce", type: "uint256", indexed: true }],
    name: "Filled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "implementation", type: "address", indexed: true }],
    name: "Upgraded",
  },
] as const;
