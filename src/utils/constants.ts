export const ROUTER_ADDRESS = "0x000000000004598D17aaD017bF0734a364c5588b";
export const EMISSARY_ADDRESS = "0x00000000000191E0ffEca3835B693Aa1DDeE8d40";
export const INTENT_EXECUTOR_ADDRESS =
  "0x00000000005aD9ce1f5035FD62CA96CEf16AdAAF";

export const SAMECHAIN_ARBITER_ADDRESS =
  "0x000000000006e2569CaF8Ff021810790e0A0D740";
export const ACROSS_MULTICALL_ARBITER_ADDRESS =
  "0x000000000001252F7a905045897B08EBCAAE9915";
export const ACROSS_7579_ARBITER_ADDRESS =
  "0x000000000020223eE8C17364259d804679337959";
export const ECO_ARBITER_ADDRESS = "0x0000000000814Cf877224D19919490d4761B0C86";

export const RS_SPOKE_POOL_ADDRESS = "0x000000000060f6e853447881951574CDd0663530";


export const ORCHESTRATOR_URL =
  process.env.ORCHESTRATOR_URL ?? "https://orchestrator.rhinestone.dev";

export const ORCHESTRATOR_DEV_URL =
  process.env.ORCHESTRATOR_DEV_URL ?? "https://dev.orchestrator.rhinestone.dev";

export const ORCHESTRATOR_STAGING_URL =
  process.env.ORCHESTRATOR_STAGING_URL ??
  "https://staging.orchestrator.rhinestone.dev";

export const ORCHESTRATOR_V1_URL =
  process.env.ORCHESTRATOR_V1_URL ?? "https://v1.orchestrator.rhinestone.dev";

export const ORCHESTRATOR_V1_DEV_URL =
  process.env.ORCHESTRATOR_V1_DEV_URL ??
  "https://dev.v1.orchestrator.rhinestone.dev";

export const ORCHESTRATOR_V1_STAGING_URL =
  process.env.ORCHESTRATOR_V1_STAGING_URL ??
  "https://staging.v1.orchestrator.rhinestone.dev";


// Contract configurations for event handlers
export const CONTRACT_CONFIGS = [
  {
    name: "rsSpokePool",
    address: RS_SPOKE_POOL_ADDRESS,
    events: {
      business: ["Filled"],
      security: ["Upgraded"]
    }
  },
  {
    name: "router",
    address: ROUTER_ADDRESS,
    events: {
      business: ["Claimed", "Filled"],
      security: ["Upgraded", "FillRouteAdded", "ClaimRouteAdded", "RelayerSet", "Withdrawn", "Approved"]
    }
  }
] as const;

export const SECURITY_EVENT_HANDLERS = {
  Upgraded: "handleProxyUpgrade",
  FillRouteAdded: "handleFillRouteAdded",
  ClaimRouteAdded: "handleClaimRouteAdded",
  RelayerSet: "handleRelayerSet",
  Withdrawn: "handleRelayerWithdrawal",
  Approved: "handleTokenApproval",
} as const;

export const CONTRACT_ADDRESS_MAP = {
  [RS_SPOKE_POOL_ADDRESS.toLowerCase()]: "rsSpokePool",
  [ROUTER_ADDRESS.toLowerCase()]: "router",
  [EMISSARY_ADDRESS.toLowerCase()]: "emissary",
  [INTENT_EXECUTOR_ADDRESS.toLowerCase()]: "intentExecutor",
  [SAMECHAIN_ARBITER_ADDRESS.toLowerCase()]: "sameChainArbiter",
  [ACROSS_MULTICALL_ARBITER_ADDRESS.toLowerCase()]: "acrossMulticallArbiter",
  [ACROSS_7579_ARBITER_ADDRESS.toLowerCase()]: "across7579Arbiter",
  [ECO_ARBITER_ADDRESS.toLowerCase()]: "ecoArbiter",
} as const;