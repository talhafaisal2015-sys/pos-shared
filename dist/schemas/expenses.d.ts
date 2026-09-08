import { z } from 'zod';
export declare const createExpenseCategorySchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type CreateExpenseCategoryInput = z.infer<typeof createExpenseCategorySchema>;
export declare const createExpenseSchema: z.ZodObject<{
    branchId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, unknown>;
    categoryId: z.ZodString;
    amount: z.ZodNumber;
    paymentMethod: z.ZodOptional<z.ZodNativeEnum<{
        readonly CASH: "CASH";
        readonly CARD: "CARD";
        readonly JAZZCASH: "JAZZCASH";
        readonly EASYPAISA: "EASYPAISA";
        readonly BANK_TRANSFER: "BANK_TRANSFER";
        readonly CREDIT: "CREDIT";
    }>>;
    description: z.ZodOptional<z.ZodString>;
    receiptImageUrl: z.ZodOptional<z.ZodString>;
    isRecurring: z.ZodOptional<z.ZodBoolean>;
    recurrenceRule: z.ZodOptional<z.ZodString>;
    isPettyCash: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    categoryId: string;
    amount: number;
    branchId?: string | null | undefined;
    description?: string | undefined;
    paymentMethod?: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT" | undefined;
    receiptImageUrl?: string | undefined;
    isRecurring?: boolean | undefined;
    recurrenceRule?: string | undefined;
    isPettyCash?: boolean | undefined;
}, {
    categoryId: string;
    amount: number;
    branchId?: unknown;
    description?: string | undefined;
    paymentMethod?: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT" | undefined;
    receiptImageUrl?: string | undefined;
    isRecurring?: boolean | undefined;
    recurrenceRule?: string | undefined;
    isPettyCash?: boolean | undefined;
}>;
export type CreateExpenseInput = z.infer<typeof createExpenseSchema>;
export declare const updateExpenseSchema: z.ZodObject<{
    branchId: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, unknown>>;
    categoryId: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
    paymentMethod: z.ZodOptional<z.ZodOptional<z.ZodNativeEnum<{
        readonly CASH: "CASH";
        readonly CARD: "CARD";
        readonly JAZZCASH: "JAZZCASH";
        readonly EASYPAISA: "EASYPAISA";
        readonly BANK_TRANSFER: "BANK_TRANSFER";
        readonly CREDIT: "CREDIT";
    }>>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    receiptImageUrl: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isRecurring: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    recurrenceRule: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isPettyCash: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    branchId?: string | null | undefined;
    description?: string | undefined;
    categoryId?: string | undefined;
    amount?: number | undefined;
    paymentMethod?: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT" | undefined;
    receiptImageUrl?: string | undefined;
    isRecurring?: boolean | undefined;
    recurrenceRule?: string | undefined;
    isPettyCash?: boolean | undefined;
}, {
    branchId?: unknown;
    description?: string | undefined;
    categoryId?: string | undefined;
    amount?: number | undefined;
    paymentMethod?: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT" | undefined;
    receiptImageUrl?: string | undefined;
    isRecurring?: boolean | undefined;
    recurrenceRule?: string | undefined;
    isPettyCash?: boolean | undefined;
}>;
export type UpdateExpenseInput = z.infer<typeof updateExpenseSchema>;
export declare const decideExpenseSchema: z.ZodObject<{
    approve: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    approve: boolean;
}, {
    approve: boolean;
}>;
export type DecideExpenseInput = z.infer<typeof decideExpenseSchema>;
