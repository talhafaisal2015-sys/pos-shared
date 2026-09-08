import { z } from 'zod';
export declare const upsertIntegrationCredentialSchema: z.ZodObject<{
    config: z.ZodRecord<z.ZodString, z.ZodString>;
    isEnabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    config: Record<string, string>;
    isEnabled: boolean;
}, {
    config: Record<string, string>;
    isEnabled: boolean;
}>;
export type UpsertIntegrationCredentialInput = z.infer<typeof upsertIntegrationCredentialSchema>;
export declare const sendCustomerMessageSchema: z.ZodObject<{
    channel: z.ZodNativeEnum<{
        readonly SMS: "SMS";
        readonly WHATSAPP: "WHATSAPP";
    }>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    channel: "WHATSAPP" | "SMS";
}, {
    message: string;
    channel: "WHATSAPP" | "SMS";
}>;
export type SendCustomerMessageInput = z.infer<typeof sendCustomerMessageSchema>;
