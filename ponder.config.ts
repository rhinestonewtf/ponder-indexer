import { createConfig } from "ponder";

import { rsSpokePoolAbi } from "./abis/rsSpokePoolAbi";

import {
  RS_SPOKE_POOL_ADDRESS,
  ROUTER_ADDRESS,
  EMISSARY_ADDRESS,
  INTENT_EXECUTOR_ADDRESS,
  SAMECHAIN_ARBITER_ADDRESS,
  ACROSS_MULTICALL_ARBITER_ADDRESS,
  ACROSS_7579_ARBITER_ADDRESS,
  ECO_ARBITER_ADDRESS,
} from "./src/utils/constants";

import { relayerAbi } from "./abis/relayerAbi";

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
        mainnet: { address: RS_SPOKE_POOL_ADDRESS },
        base: { address: RS_SPOKE_POOL_ADDRESS },
        optimism: { address: RS_SPOKE_POOL_ADDRESS },
        arbitrum: { address: RS_SPOKE_POOL_ADDRESS },
        polygon: { address: RS_SPOKE_POOL_ADDRESS },
        zksync: { address: RS_SPOKE_POOL_ADDRESS },
        sepolia: { address: RS_SPOKE_POOL_ADDRESS },
        baseSepolia: { address: RS_SPOKE_POOL_ADDRESS },
        optimismSepolia: {
          address: RS_SPOKE_POOL_ADDRESS,
        },
        arbitrumSepolia: {
          address: RS_SPOKE_POOL_ADDRESS,
        },
      },
    },
    proxies: {
      abi: relayerAbi,
      startBlock: "latest",
      network: {
        mainnet: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        base: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        optimism: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        arbitrum: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        polygon: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        zksync: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        soneium: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        sepolia: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        baseSepolia: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        optimismSepolia: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
        arbitrumSepolia: {
          address: [
            ROUTER_ADDRESS,
            EMISSARY_ADDRESS,
            INTENT_EXECUTOR_ADDRESS,
            SAMECHAIN_ARBITER_ADDRESS,
            ACROSS_MULTICALL_ARBITER_ADDRESS,
            ACROSS_7579_ARBITER_ADDRESS,
            ECO_ARBITER_ADDRESS,
          ],
        },
      },
    },
  },
});
