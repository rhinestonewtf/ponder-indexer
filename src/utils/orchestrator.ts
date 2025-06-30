import {
  ORCHESTRATOR_DEV_URL,
  ORCHESTRATOR_STAGING_URL,
  ORCHESTRATOR_URL,
  ORCHESTRATOR_V1_DEV_URL,
  ORCHESTRATOR_V1_STAGING_URL,
  ORCHESTRATOR_V1_URL,
} from "./constants";

type Environment = {
  name: string;
  url: string;
  apiKey: string;
};

export const getEnvironment = ({ nonce }: { nonce: bigint }): Environment => {
  switch (BigInt(nonce.toString().slice(0, 1))) {
    case 1n:
      return {
        name: "prod",
        url: ORCHESTRATOR_URL,
        apiKey: process.env.ORCHESTRATOR_API_KEY!,
      };
    case 2n:
      return {
        name: "dev",
        url: ORCHESTRATOR_DEV_URL,
        apiKey: process.env.ORCHESTRATOR_DEV_API_KEY!,
      };
    case 3n:
      return {
        name: "staging",
        url: ORCHESTRATOR_STAGING_URL,
        apiKey: process.env.ORCHESTRATOR_STAGING_API_KEY!,
      };
    case 4n:
      return {
        name: "prod",
        url: ORCHESTRATOR_V1_URL,
        apiKey: process.env.ORCHESTRATOR_V1_API_KEY!,
      };
    case 5n:
      return {
        name: "dev",
        url: ORCHESTRATOR_V1_DEV_URL,
        apiKey: process.env.ORCHESTRATOR_V1_DEV_API_KEY!,
      };
    case 6n:
      return {
        name: "staging",
        url: ORCHESTRATOR_V1_STAGING_URL,
        apiKey: process.env.ORCHESTRATOR_V1_STAGING_API_KEY!,
      };
    default:
      // default to prod
      return {
        name: "prod",
        url: ORCHESTRATOR_URL,
        apiKey: process.env.ORCHESTRATOR_API_KEY!,
      };
  }
};

export const sendToOrchestrator = async ({
  data,
  environment,
}: {
  data: any;
  environment: Environment;
}) => {
  console.log(`sending to orchestrator: ${environment.name}`);
  await fetch(`${environment.url}/chain-events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": environment.apiKey,
    },
    body: JSON.stringify(data),
  });
};
