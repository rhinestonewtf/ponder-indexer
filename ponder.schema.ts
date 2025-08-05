import { onchainTable } from "ponder";

export const account = onchainTable("account", (t) => ({
  address: t.hex().primaryKey(),
  balance: t.bigint().notNull(),
}));

export const securityEvent = onchainTable("security_event", (t) => ({
  id: t.text().primaryKey(),
  eventType: t.text().notNull(), // 'proxy_upgrade', 'funds_moved', 'owner_changed'
  severity: t.text().notNull(), // 'critical', 'warning', 'info'
  chainId: t.integer().notNull(),
  contractAddress: t.hex().notNull(),
  txHash: t.hex().notNull(),
  blockNumber: t.bigint().notNull(),
  blockTimestamp: t.bigint().notNull(),
  alertSent: t.boolean().notNull().default(false),
  metadata: t.json(), // Additional event-specific data
}));
