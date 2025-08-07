import { createConfig } from "ponder";
import { http } from "viem";

import { rsSpokePoolAbi } from "./abis/rsSpokePoolAbi";
import { originAbi } from "./abis/originAbi";
import { routerAbi } from "./abis/routerAbi";

const ROUTER_ADDRESS = "0x000000000004598D17aaD017bF0734a364c5588b";

export default createConfig({
  ordering: "multichain",
  chains: {
    // Mainnets
    mainnet: {
      id: 1,
      rpc: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    base: {
      id: 8453,
      rpc: `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    optimism: {
      id: 10,
      rpc: `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    arbitrum: {
      id: 42161,
      rpc: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    polygon: {
      id: 137,
      rpc: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    zksync: {
      id: 324,
      rpc: `https://zksync-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://zksync-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    soneium: {
      id: 1868,
      rpc: `https://soneium-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://soneium-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    // Testnets
    sepolia: {
      id: 11155111,
      rpc: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    baseSepolia: {
      id: 84532,
      rpc: `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    optimismSepolia: {
      id: 11155420,
      rpc: `https://opt-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://opt-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    arbitrumSepolia: {
      id: 421614,
      rpc: `https://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      ws: `wss://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
  },
  contracts: {
    rsSpokePool: {
      abi: rsSpokePoolAbi,
      startBlock: "latest",
      chain: {
        mainnet: { address: "0x000000000060f6e853447881951574CDd0663530" },
        base: { address: "0x000000000060f6e853447881951574CDd0663530" },
        optimism: { address: "0x000000000060f6e853447881951574CDd0663530" },
        arbitrum: { address: "0x000000000060f6e853447881951574CDd0663530" },
        polygon: { address: "0x000000000060f6e853447881951574CDd0663530" },
        zksync: { address: "0x000000000060f6e853447881951574CDd0663530" },
        sepolia: { address: "0x000000000060f6e853447881951574CDd0663530" },
        baseSepolia: { address: "0x000000000060f6e853447881951574CDd0663530" },
        optimismSepolia: {
          address: "0x000000000060f6e853447881951574CDd0663530",
        },
        arbitrumSepolia: {
          address: "0x000000000060f6e853447881951574CDd0663530",
        },
      },
    },
    originModule: {
      abi: originAbi,
      startBlock: "latest",
      chain: {
        mainnet: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        base: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        optimism: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        arbitrum: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        polygon: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        zksync: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        sepolia: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        baseSepolia: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        optimismSepolia: {
          address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8",
        },
        arbitrumSepolia: {
          address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8",
        },
      },
    },
    sameChainModule: {
      abi: originAbi,
      startBlock: "latest",
      chain: {
        mainnet: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        base: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        optimism: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        arbitrum: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        polygon: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        zksync: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        sepolia: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        baseSepolia: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        optimismSepolia: {
          address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04",
        },
        arbitrumSepolia: {
          address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04",
        },
      },
    },
    router: {
      abi: routerAbi,
      startBlock: "latest",
      chain: {
        mainnet: { address: ROUTER_ADDRESS },
        base: { address: ROUTER_ADDRESS },
        optimism: { address: ROUTER_ADDRESS },
        arbitrum: { address: ROUTER_ADDRESS },
        polygon: { address: ROUTER_ADDRESS },
        zksync: { address: ROUTER_ADDRESS },
        sepolia: { address: ROUTER_ADDRESS },
        baseSepolia: { address: ROUTER_ADDRESS },
        optimismSepolia: {
          address: ROUTER_ADDRESS,
        },
        arbitrumSepolia: {
          address: ROUTER_ADDRESS,
        },
      },
    },
  },
});
