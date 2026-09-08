import { z } from 'zod';
export declare const registerOrgSchema: z.ZodObject<{
    organizationName: z.ZodString;
    businessType: z.ZodNativeEnum<{
        readonly GROCERY: "GROCERY";
        readonly PHARMACY: "PHARMACY";
        readonly APPAREL: "APPAREL";
        readonly ELECTRONICS: "ELECTRONICS";
        readonly HARDWARE: "HARDWARE";
        readonly BAKERY: "BAKERY";
        readonly GENERAL: "GENERAL";
        readonly OTHER: "OTHER";
    }>;
    ownerName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    organizationName: string;
    businessType: "GROCERY" | "PHARMACY" | "APPAREL" | "ELECTRONICS" | "HARDWARE" | "BAKERY" | "GENERAL" | "OTHER";
    ownerName: string;
    phone: string;
    password: string;
}, {
    email: string;
    organizationName: string;
    businessType: "GROCERY" | "PHARMACY" | "APPAREL" | "ELECTRONICS" | "HARDWARE" | "BAKERY" | "GENERAL" | "OTHER";
    ownerName: string;
    phone: string;
    password: string;
}>;
export type RegisterOrgInput = z.infer<typeof registerOrgSchema>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export declare const refreshSchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    refreshToken: string;
}, {
    refreshToken: string;
}>;
export type RefreshInput = z.infer<typeof refreshSchema>;
