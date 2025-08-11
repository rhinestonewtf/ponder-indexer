import { createConfig } from "ponder";

import { rsSpokePoolAbi } from "./abis/rsSpokePoolAbi";
import { originAbi } from "./abis/originAbi";
import { proxyAbi } from "./abis/proxyAbi"; 
import { relayerAbi } from "./abis/relayerAbi";
import { routerAbi } from "./abis/routerAbi";

import {
  ORIGIN_MODULE_ADDRESS,
  SAME_CHAIN_MODULE_ADDRESS,
  RS_SPOKE_POOL_ADDRESS,
  ROUTER_ADDRESS,
  EMISSARY_ADDRESS,
  INTENT_EXECUTOR_ADDRESS,
  SAMECHAIN_ARBITER_ADDRESS,
  ACROSS_MULTICALL_ARBITER_ADDRESS,
  ACROSS_7579_ARBITER_ADDRESS,
  ECO_ARBITER_ADDRESS,
  RELAYER_ADDRESS,
} from "./src/utils/constants";

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
    originModule: {
      abi: originAbi,
      startBlock: "latest",
      chain: {
        mainnet: { address: ORIGIN_MODULE_ADDRESS },
        base: { address: ORIGIN_MODULE_ADDRESS },
        optimism: { address: ORIGIN_MODULE_ADDRESS },
        arbitrum: { address: ORIGIN_MODULE_ADDRESS },
        polygon: { address: ORIGIN_MODULE_ADDRESS },
        zksync: { address: ORIGIN_MODULE_ADDRESS },
        sepolia: { address: ORIGIN_MODULE_ADDRESS },
        baseSepolia: { address: ORIGIN_MODULE_ADDRESS },
        optimismSepolia: {
          address: ORIGIN_MODULE_ADDRESS,
        },
        arbitrumSepolia: {
          address: ORIGIN_MODULE_ADDRESS,
        },
      },
    },
    sameChainModule: {
      abi: originAbi,
      startBlock: "latest",
      chain: {
        mainnet: { address: SAME_CHAIN_MODULE_ADDRESS },
        base: { address: SAME_CHAIN_MODULE_ADDRESS },
        optimism: { address: SAME_CHAIN_MODULE_ADDRESS },
        arbitrum: { address: SAME_CHAIN_MODULE_ADDRESS },
        polygon: { address: SAME_CHAIN_MODULE_ADDRESS },
        zksync: { address: SAME_CHAIN_MODULE_ADDRESS },
        sepolia: { address: SAME_CHAIN_MODULE_ADDRESS },
        baseSepolia: { address: SAME_CHAIN_MODULE_ADDRESS },
        optimismSepolia: {
          address: SAME_CHAIN_MODULE_ADDRESS,
        },
        arbitrumSepolia: {
          address: SAME_CHAIN_MODULE_ADDRESS,
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
        soneium: { address: ROUTER_ADDRESS },
        sepolia: { address: ROUTER_ADDRESS },
        baseSepolia: { address: ROUTER_ADDRESS },
        optimismSepolia: {
          address: ROUTER_ADDRESS,
        },
        arbitrumSepolia: {
          address: ROUTER_ADDRESS,
        },
      }
    },
    relayer: {
      abi: relayerAbi,
      startBlock: "latest",
      chain: {
        mainnet: { address: RELAYER_ADDRESS },
        base: { address: RELAYER_ADDRESS },
        optimism: { address: RELAYER_ADDRESS },
        arbitrum: { address: RELAYER_ADDRESS },
        polygon: { address: RELAYER_ADDRESS },
        zksync: { address: RELAYER_ADDRESS },
        soneium: { address: RELAYER_ADDRESS },
        sepolia: { address: RELAYER_ADDRESS },
        baseSepolia: { address: RELAYER_ADDRESS },
        optimismSepolia: {
          address: RELAYER_ADDRESS,
        },
        arbitrumSepolia: {
          address: RELAYER_ADDRESS,
        },
      },
    },
    proxies: {
      abi: proxyAbi,
      startBlock: "latest",
      chain: {
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
