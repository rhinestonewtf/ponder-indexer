export const ORIGIN_MODULE_ADDRESS =
  "0x0000000000AFc904aE9860D9c4B96D7c529c58b8";
export const SAME_CHAIN_MODULE_ADDRESS =
  "0x000000000043ff16d5776c7F0f65Ec485C17Ca04";
export const RS_SPOKE_POOL_ADDRESS =
  "0x000000000060f6e853447881951574CDd0663530";

export const ROUTER_ADDRESS = "0x000000000004598D17aaD017bF0734a364c5588b";
export const ROUTER_ADDRESS_DEV = "0x8a525dc484f893ca64fef507746ebd5036eec256";
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

export const RELAYER_POT_PROD_V1 = "0x66Efc7e902Aed952d25A7A4b694ECe66EA150993";
export const RELAYER_POT_DEV_V1 = "0x5D9c2fEC9E237215492E430641ba723f3b7a9ee6";
export const RELAYER_POT_PROD_V0 = "0xFD0B6180164d57A1C8DE670bB90a69887501E31f";

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

export const SECURITY_EVENT_HANDLERS = {
  Upgraded: "handleProxyUpgrade",
  FillRouteAdded: "handleFillRouteAdded",
  ClaimRouteAdded: "handleClaimRouteAdded",
  RelayerSet: "handleRelayerSet",
  Withdrawn: "handleRelayerWithdrawal",
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
