import { z } from 'zod';
export declare const saleItemInputSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    discount: z.ZodOptional<z.ZodNumber>;
    taxRate: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    productId: string;
    unitPrice: number;
    taxRate?: number | undefined;
    discount?: number | undefined;
}, {
    quantity: number;
    productId: string;
    unitPrice: number;
    taxRate?: number | undefined;
    discount?: number | undefined;
}>;
export type SaleItemInput = z.infer<typeof saleItemInputSchema>;
export declare const salePaymentInputSchema: z.ZodObject<{
    method: z.ZodNativeEnum<{
        readonly CASH: "CASH";
        readonly CARD: "CARD";
        readonly JAZZCASH: "JAZZCASH";
        readonly EASYPAISA: "EASYPAISA";
        readonly BANK_TRANSFER: "BANK_TRANSFER";
        readonly CREDIT: "CREDIT";
    }>;
    amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
    amount: number;
}, {
    method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
    amount: number;
}>;
export type SalePaymentInput = z.infer<typeof salePaymentInputSchema>;
export declare const createSaleSchema: z.ZodObject<{
    branchId: z.ZodString;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        discount: z.ZodOptional<z.ZodNumber>;
        taxRate: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        productId: string;
        unitPrice: number;
        taxRate?: number | undefined;
        discount?: number | undefined;
    }, {
        quantity: number;
        productId: string;
        unitPrice: number;
        taxRate?: number | undefined;
        discount?: number | undefined;
    }>, "many">;
    payments: z.ZodArray<z.ZodObject<{
        method: z.ZodNativeEnum<{
            readonly CASH: "CASH";
            readonly CARD: "CARD";
            readonly JAZZCASH: "JAZZCASH";
            readonly EASYPAISA: "EASYPAISA";
            readonly BANK_TRANSFER: "BANK_TRANSFER";
            readonly CREDIT: "CREDIT";
        }>;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
        amount: number;
    }, {
        method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
        amount: number;
    }>, "many">;
    discountTotal: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    branchId: string;
    items: {
        quantity: number;
        productId: string;
        unitPrice: number;
        taxRate?: number | undefined;
        discount?: number | undefined;
    }[];
    payments: {
        method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
        amount: number;
    }[];
    customerId?: string | null | undefined;
    discountTotal?: number | undefined;
}, {
    branchId: string;
    items: {
        quantity: number;
        productId: string;
        unitPrice: number;
        taxRate?: number | undefined;
        discount?: number | undefined;
    }[];
    payments: {
        method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
        amount: number;
    }[];
    customerId?: string | null | undefined;
    discountTotal?: number | undefined;
}>;
export type CreateSaleInput = z.infer<typeof createSaleSchema>;
/** A sale rung up but not yet paid for — parked so the cashier can serve the next customer. */
export declare const holdSaleSchema: z.ZodObject<{
    branchId: z.ZodString;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        discount: z.ZodOptional<z.ZodNumber>;
        taxRate: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        productId: string;
        unitPrice: number;
        taxRate?: number | undefined;
        discount?: number | undefined;
    }, {
        quantity: number;
        productId: string;
        unitPrice: number;
        taxRate?: number | undefined;
        discount?: number | undefined;
    }>, "many">;
    discountTotal: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    branchId: string;
    items: {
        quantity: number;
        productId: string;
        unitPrice: number;
        taxRate?: number | undefined;
        discount?: number | undefined;
    }[];
    customerId?: string | null | undefined;
    discountTotal?: number | undefined;
}, {
    branchId: string;
    items: {
        quantity: number;
        productId: string;
        unitPrice: number;
        taxRate?: number | undefined;
        discount?: number | undefined;
    }[];
    customerId?: string | null | undefined;
    discountTotal?: number | undefined;
}>;
export type HoldSaleInput = z.infer<typeof holdSaleSchema>;
export declare const resumeSaleSchema: z.ZodObject<{
    payments: z.ZodArray<z.ZodObject<{
        method: z.ZodNativeEnum<{
            readonly CASH: "CASH";
            readonly CARD: "CARD";
            readonly JAZZCASH: "JAZZCASH";
            readonly EASYPAISA: "EASYPAISA";
            readonly BANK_TRANSFER: "BANK_TRANSFER";
            readonly CREDIT: "CREDIT";
        }>;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
        amount: number;
    }, {
        method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
        amount: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    payments: {
        method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
        amount: number;
    }[];
}, {
    payments: {
        method: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
        amount: number;
    }[];
}>;
export type ResumeSaleInput = z.infer<typeof resumeSaleSchema>;
export declare const voidSaleSchema: z.ZodObject<{
    reason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reason: string;
}, {
    reason: string;
}>;
export type VoidSaleInput = z.infer<typeof voidSaleSchema>;
export declare const saleReturnItemSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    productId: string;
}, {
    quantity: number;
    productId: string;
}>;
export declare const createSaleReturnSchema: z.ZodObject<{
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
    refundMethod: z.ZodNativeEnum<{
        readonly CASH: "CASH";
        readonly CARD: "CARD";
        readonly JAZZCASH: "JAZZCASH";
        readonly EASYPAISA: "EASYPAISA";
        readonly BANK_TRANSFER: "BANK_TRANSFER";
        readonly CREDIT: "CREDIT";
    }>;
}, "strip", z.ZodTypeAny, {
    items: {
        quantity: number;
        productId: string;
    }[];
    refundMethod: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
    reason?: string | undefined;
}, {
    items: {
        quantity: number;
        productId: string;
    }[];
    refundMethod: "CASH" | "CARD" | "JAZZCASH" | "EASYPAISA" | "BANK_TRANSFER" | "CREDIT";
    reason?: string | undefined;
}>;
export type CreateSaleReturnInput = z.infer<typeof createSaleReturnSchema>;
