import { z } from 'zod';
export declare const createBranchSchema: z.ZodObject<{
    name: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    managerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    openingCashBalance: z.ZodOptional<z.ZodNumber>;
    openingCashAsOf: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    phone?: string | undefined;
    address?: string | undefined;
    managerId?: string | null | undefined;
    openingCashBalance?: number | undefined;
    openingCashAsOf?: Date | null | undefined;
}, {
    name: string;
    phone?: string | undefined;
    address?: string | undefined;
    managerId?: string | null | undefined;
    openingCashBalance?: number | undefined;
    openingCashAsOf?: Date | null | undefined;
}>;
export type CreateBranchInput = z.infer<typeof createBranchSchema>;
export declare const updateBranchSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    managerId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    openingCashBalance: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    openingCashAsOf: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
} & {
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    phone?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    isActive?: boolean | undefined;
    managerId?: string | null | undefined;
    openingCashBalance?: number | undefined;
    openingCashAsOf?: Date | null | undefined;
}, {
    phone?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    isActive?: boolean | undefined;
    managerId?: string | null | undefined;
    openingCashBalance?: number | undefined;
    openingCashAsOf?: Date | null | undefined;
}>;
export type UpdateBranchInput = z.infer<typeof updateBranchSchema>;
