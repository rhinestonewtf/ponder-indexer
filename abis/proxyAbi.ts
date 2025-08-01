export const proxyAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "implementation", type: "address", indexed: true }],
    name: "Upgraded",
  },
] as const;
