import { z } from 'zod';
export declare const updateOrganizationSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    businessType: z.ZodOptional<z.ZodNativeEnum<{
        readonly GROCERY: "GROCERY";
        readonly PHARMACY: "PHARMACY";
        readonly APPAREL: "APPAREL";
        readonly ELECTRONICS: "ELECTRONICS";
        readonly HARDWARE: "HARDWARE";
        readonly BAKERY: "BAKERY";
        readonly GENERAL: "GENERAL";
        readonly OTHER: "OTHER";
    }>>;
    logoUrl: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>;
    address: z.ZodOptional<z.ZodString>;
    ntn: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    ntn?: string | undefined;
    email?: string | undefined;
    businessType?: "GROCERY" | "PHARMACY" | "APPAREL" | "ELECTRONICS" | "HARDWARE" | "BAKERY" | "GENERAL" | "OTHER" | undefined;
    phone?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    logoUrl?: string | null | undefined;
    currency?: string | undefined;
}, {
    ntn?: string | undefined;
    email?: string | undefined;
    businessType?: "GROCERY" | "PHARMACY" | "APPAREL" | "ELECTRONICS" | "HARDWARE" | "BAKERY" | "GENERAL" | "OTHER" | undefined;
    phone?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    logoUrl?: string | null | undefined;
    currency?: string | undefined;
}>;
export type UpdateOrganizationInput = z.infer<typeof updateOrganizationSchema>;
export declare const updateSettingsSchema: z.ZodObject<{
    taxConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    receiptConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    printerConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    fbrConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    paymentMethodsEnabled: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    language: z.ZodOptional<z.ZodEnum<["en", "ur"]>>;
}, "strip", z.ZodTypeAny, {
    taxConfig?: Record<string, unknown> | undefined;
    receiptConfig?: Record<string, unknown> | undefined;
    printerConfig?: Record<string, unknown> | undefined;
    fbrConfig?: Record<string, unknown> | undefined;
    paymentMethodsEnabled?: Record<string, boolean> | undefined;
    language?: "en" | "ur" | undefined;
}, {
    taxConfig?: Record<string, unknown> | undefined;
    receiptConfig?: Record<string, unknown> | undefined;
    printerConfig?: Record<string, unknown> | undefined;
    fbrConfig?: Record<string, unknown> | undefined;
    paymentMethodsEnabled?: Record<string, boolean> | undefined;
    language?: "en" | "ur" | undefined;
}>;
export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;
