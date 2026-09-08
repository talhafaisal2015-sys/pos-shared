import { z } from 'zod';
export declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    password: z.ZodString;
    role: z.ZodNativeEnum<{
        readonly OWNER: "OWNER";
        readonly ADMIN: "ADMIN";
        readonly MANAGER: "MANAGER";
        readonly CASHIER: "CASHIER";
        readonly STAFF: "STAFF";
    }>;
    branchId: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>;
    salary: z.ZodEffects<z.ZodOptional<z.ZodNumber>, number | undefined, unknown>;
    cnic: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    address: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    hireDate: z.ZodEffects<z.ZodOptional<z.ZodDate>, Date | undefined, unknown>;
    notes: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    role: "OWNER" | "ADMIN" | "MANAGER" | "CASHIER" | "STAFF";
    cnic?: string | undefined;
    phone?: string | undefined;
    branchId?: string | null | undefined;
    salary?: number | undefined;
    address?: string | undefined;
    hireDate?: Date | undefined;
    notes?: string | undefined;
}, {
    email: string;
    password: string;
    name: string;
    role: "OWNER" | "ADMIN" | "MANAGER" | "CASHIER" | "STAFF";
    cnic?: string | undefined;
    phone?: string | undefined;
    branchId?: string | null | undefined;
    salary?: unknown;
    address?: string | undefined;
    hireDate?: unknown;
    notes?: string | undefined;
}>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    phone: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    role: z.ZodOptional<z.ZodNativeEnum<{
        readonly OWNER: "OWNER";
        readonly ADMIN: "ADMIN";
        readonly MANAGER: "MANAGER";
        readonly CASHIER: "CASHIER";
        readonly STAFF: "STAFF";
    }>>;
    branchId: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>;
    salary: z.ZodEffects<z.ZodOptional<z.ZodNumber>, number | undefined, unknown>;
    cnic: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    address: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    hireDate: z.ZodEffects<z.ZodOptional<z.ZodDate>, Date | undefined, unknown>;
    notes: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    cnic?: string | undefined;
    phone?: string | undefined;
    name?: string | undefined;
    role?: "OWNER" | "ADMIN" | "MANAGER" | "CASHIER" | "STAFF" | undefined;
    branchId?: string | null | undefined;
    salary?: number | undefined;
    address?: string | undefined;
    hireDate?: Date | undefined;
    notes?: string | undefined;
    isActive?: boolean | undefined;
}, {
    cnic?: string | undefined;
    phone?: string | undefined;
    name?: string | undefined;
    role?: "OWNER" | "ADMIN" | "MANAGER" | "CASHIER" | "STAFF" | undefined;
    branchId?: string | null | undefined;
    salary?: unknown;
    address?: string | undefined;
    hireDate?: unknown;
    notes?: string | undefined;
    isActive?: boolean | undefined;
}>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export declare const updatePermissionOverridesSchema: z.ZodObject<{
    overrides: z.ZodRecord<z.ZodEnum<[string, ...string[]]>, z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    overrides: Record<string, boolean>;
}, {
    overrides: Record<string, boolean>;
}>;
export type UpdatePermissionOverridesInput = z.infer<typeof updatePermissionOverridesSchema>;
