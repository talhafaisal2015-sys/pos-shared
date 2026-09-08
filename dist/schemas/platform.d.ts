import { z } from 'zod';
export declare const platformLoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type PlatformLoginInput = z.infer<typeof platformLoginSchema>;
export declare const createPlatformAdminSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
}, {
    email: string;
    password: string;
    name: string;
}>;
export type CreatePlatformAdminInput = z.infer<typeof createPlatformAdminSchema>;
export declare const updatePlatformAdminSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    isActive?: boolean | undefined;
}, {
    name?: string | undefined;
    isActive?: boolean | undefined;
}>;
export type UpdatePlatformAdminInput = z.infer<typeof updatePlatformAdminSchema>;
export declare const suspendOrganizationSchema: z.ZodObject<{
    isSuspended: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isSuspended: boolean;
}, {
    isSuspended: boolean;
}>;
export type SuspendOrganizationInput = z.infer<typeof suspendOrganizationSchema>;
