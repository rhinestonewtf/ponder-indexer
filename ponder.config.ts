import { createConfig } from "ponder";
import { http } from "viem";

import { rsSpokePoolAbi } from "./abis/rsSpokePoolAbi";
import { originAbi } from "./abis/originAbi";

export default createConfig({
  ordering: "multichain",
  networks: {
    // Mainnets
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
    },
    optimism: {
      chainId: 10,
      transport: http(process.env.PONDER_RPC_URL_10),
    },
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_42161),
    },
    polygon: {
      chainId: 137,
      transport: http(process.env.PONDER_RPC_URL_137),
    },
    // Testnets
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.PONDER_RPC_URL_11155111),
    },
    baseSepolia: {
      chainId: 84532,
      transport: http(process.env.PONDER_RPC_URL_84532),
    },
    optimismSepolia: {
      chainId: 11155420,
      transport: http(process.env.PONDER_RPC_URL_11155420),
    },
    arbitrumSepolia: {
      chainId: 421614,
      transport: http(process.env.PONDER_RPC_URL_421614),
    },
  },
  contracts: {
    rsSpokePool: {
      abi: rsSpokePoolAbi,
      startBlock: "latest",
      network: {
        mainnet: { address: "0x000000000060f6e853447881951574CDd0663530" },
        base: { address: "0x000000000060f6e853447881951574CDd0663530" },
        optimism: { address: "0x000000000060f6e853447881951574CDd0663530" },
        arbitrum: { address: "0x000000000060f6e853447881951574CDd0663530" },
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
      network: {
        mainnet: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        base: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        optimism: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
        arbitrum: { address: "0x0000000000AFc904aE9860D9c4B96D7c529c58b8" },
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
      network: {
        mainnet: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        base: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        optimism: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
        arbitrum: { address: "0x000000000043ff16d5776c7F0f65Ec485C17Ca04" },
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
  },
});
