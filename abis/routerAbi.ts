export const routerAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "implementation", type: "address", indexed: true }],
    name: "Upgraded",
  },
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
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "selector",
        type: "bytes4",
        indexed: false,
      },
      {
        name: "router",
        type: "address",
        indexed: false,
      },
    ],
    name: "FillRouteAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "selector",
        type: "bytes4",
        indexed: false,
      },
      {
        name: "router",
        type: "address",
        indexed: false,
      },
    ],
    name: "ClaimRouteAdded",
  },
] as const;
