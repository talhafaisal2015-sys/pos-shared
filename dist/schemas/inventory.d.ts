import { z } from 'zod';
export declare const createStockAdjustmentSchema: z.ZodObject<{
    productId: z.ZodString;
    branchId: z.ZodString;
    quantityDelta: z.ZodEffects<z.ZodNumber, number, number>;
    reason: z.ZodNativeEnum<{
        readonly DAMAGE: "DAMAGE";
        readonly THEFT: "THEFT";
        readonly EXPIRY: "EXPIRY";
        readonly INTERNAL_USE: "INTERNAL_USE";
        readonly RECOUNT: "RECOUNT";
        readonly OTHER: "OTHER";
    }>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    branchId: string;
    productId: string;
    quantityDelta: number;
    reason: "OTHER" | "DAMAGE" | "THEFT" | "EXPIRY" | "INTERNAL_USE" | "RECOUNT";
    notes?: string | undefined;
}, {
    branchId: string;
    productId: string;
    quantityDelta: number;
    reason: "OTHER" | "DAMAGE" | "THEFT" | "EXPIRY" | "INTERNAL_USE" | "RECOUNT";
    notes?: string | undefined;
}>;
export type CreateStockAdjustmentInput = z.infer<typeof createStockAdjustmentSchema>;
export declare const stockTransferItemSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    productId: string;
}, {
    quantity: number;
    productId: string;
}>;
export declare const createStockTransferSchema: z.ZodObject<{
    fromBranchId: z.ZodString;
    toBranchId: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        productId: string;
    }, {
        quantity: number;
        productId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        quantity: number;
        productId: string;
    }[];
    fromBranchId: string;
    toBranchId: string;
}, {
    items: {
        quantity: number;
        productId: string;
    }[];
    fromBranchId: string;
    toBranchId: string;
}>;
export type CreateStockTransferInput = z.infer<typeof createStockTransferSchema>;
export declare const createStockBatchSchema: z.ZodObject<{
    productId: z.ZodString;
    branchId: z.ZodString;
    batchNo: z.ZodString;
    expiryDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    quantity: z.ZodNumber;
    costPrice: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    branchId: string;
    costPrice: number;
    quantity: number;
    productId: string;
    batchNo: string;
    expiryDate?: Date | null | undefined;
}, {
    branchId: string;
    costPrice: number;
    quantity: number;
    productId: string;
    batchNo: string;
    expiryDate?: Date | null | undefined;
}>;
export type CreateStockBatchInput = z.infer<typeof createStockBatchSchema>;
