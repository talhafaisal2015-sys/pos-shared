import { z } from 'zod';
import { CommunicationChannel } from '../enums';

export const upsertIntegrationCredentialSchema = z.object({
  config: z.record(z.string(), z.string()),
  isEnabled: z.boolean(),
});
export type UpsertIntegrationCredentialInput = z.infer<typeof upsertIntegrationCredentialSchema>;

export const sendCustomerMessageSchema = z.object({
  channel: z.nativeEnum(CommunicationChannel),
  message: z.string().min(1).max(1000),
});
export type SendCustomerMessageInput = z.infer<typeof sendCustomerMessageSchema>;
