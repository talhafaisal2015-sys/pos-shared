import { z } from 'zod';
export declare const purchaseOrderItemSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
    unitCost: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    productId: string;
    unitCost: number;
}, {
    quantity: number;
    productId: string;
    unitCost: number;
}>;
export type PurchaseOrderItemInput = z.infer<typeof purchaseOrderItemSchema>;
export declare const createPurchaseOrderSchema: z.ZodObject<{
    branchId: z.ZodString;
    supplierId: z.ZodString;
    expectedDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    notes: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantity: z.ZodNumber;
        unitCost: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        productId: string;
        unitCost: number;
    }, {
        quantity: number;
        productId: string;
        unitCost: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    branchId: string;
    items: {
        quantity: number;
        productId: string;
        unitCost: number;
    }[];
    supplierId: string;
    notes?: string | undefined;
    expectedDate?: Date | null | undefined;
}, {
    branchId: string;
    items: {
        quantity: number;
        productId: string;
        unitCost: number;
    }[];
    supplierId: string;
    notes?: string | undefined;
    expectedDate?: Date | null | undefined;
}>;
export type CreatePurchaseOrderInput = z.infer<typeof createPurchaseOrderSchema>;
export declare const sendPurchaseOrderSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type SendPurchaseOrderInput = z.infer<typeof sendPurchaseOrderSchema>;
export declare const grnItemSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
    batchNo: z.ZodOptional<z.ZodString>;
    expiryDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    productId: string;
    batchNo?: string | undefined;
    expiryDate?: Date | null | undefined;
}, {
    quantity: number;
    productId: string;
    batchNo?: string | undefined;
    expiryDate?: Date | null | undefined;
}>;
export type GrnItemInput = z.infer<typeof grnItemSchema>;
export declare const createGrnSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantity: z.ZodNumber;
        batchNo: z.ZodOptional<z.ZodString>;
        expiryDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        productId: string;
        batchNo?: string | undefined;
        expiryDate?: Date | null | undefined;
    }, {
        quantity: number;
        productId: string;
        batchNo?: string | undefined;
        expiryDate?: Date | null | undefined;
    }>, "many">;
    invoiceImageUrl: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    items: {
        quantity: number;
        productId: string;
        batchNo?: string | undefined;
        expiryDate?: Date | null | undefined;
    }[];
    notes?: string | undefined;
    invoiceImageUrl?: string | undefined;
}, {
    items: {
        quantity: number;
        productId: string;
        batchNo?: string | undefined;
        expiryDate?: Date | null | undefined;
    }[];
    notes?: string | undefined;
    invoiceImageUrl?: string | undefined;
}>;
export type CreateGrnInput = z.infer<typeof createGrnSchema>;
export declare const purchaseReturnItemSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    productId: string;
}, {
    quantity: number;
    productId: string;
}>;
export declare const createPurchaseReturnSchema: z.ZodObject<{
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
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    items: {
        quantity: number;
        productId: string;
    }[];
    reason?: string | undefined;
}, {
    items: {
        quantity: number;
        productId: string;
    }[];
    reason?: string | undefined;
}>;
export type CreatePurchaseReturnInput = z.infer<typeof createPurchaseReturnSchema>;
