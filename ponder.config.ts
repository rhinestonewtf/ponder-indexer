import { createConfig } from "ponder";
import { http } from "viem";

import { rsSpokePoolAbi } from "./abis/rsSpokePoolAbi";
import { originAbi } from "./abis/originAbi";
import { routerAbi } from "./abis/routerAbi";
import { securityAbi } from "./abis/securityAbi";
import {
  RS_SPOKE_POOL_ADDRESS,
  ORIGIN_MODULE_ADDRESS,
  SAME_CHAIN_MODULE_ADDRESS,
  ROUTER_ADDRESS,
  EMISSARY_ADDRESS,
  INTENT_EXECUTOR_ADDRESS,
  SAMECHAIN_ARBITER_ADDRESS,
  ACROSS_MULTICALL_ARBITER_ADDRESS,
  ACROSS_7579_ARBITER_ADDRESS,
  ECO_ARBITER_ADDRESS,
} from "./src/utils/constants";


export default createConfig({
  ordering: "multichain",
  networks: {
    // Mainnets
    mainnet: {
      chainId: 1,
      transport: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    base: {
      chainId: 8453,
      transport: http(`https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    optimism: {
      chainId: 10,
      transport: http(`https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    arbitrum: {
      chainId: 42161,
      transport: http(`https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    polygon: {
      chainId: 137,
      transport: http(`https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    zksync: {
      chainId: 324,
      transport: http(`https://zksync-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    soneium: {
      chainId: 1868,
      transport: http(`https://soneium-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    // Testnets
    sepolia: {
      chainId: 11155111,
      transport: http(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    baseSepolia: {
      chainId: 84532,
      transport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    optimismSepolia: {
      chainId: 11155420,
      transport: http(`https://opt-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
    arbitrumSepolia: {
      chainId: 421614,
      transport: http(`https://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`),
    },
  },
  contracts: {
    rsSpokePool: {
      abi: rsSpokePoolAbi,
      startBlock: "latest",
      network: {
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
      network: {
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
      network: {
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
      network: {
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
      },
    },
    proxies: {
      abi: securityAbi,
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
