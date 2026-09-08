"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaleReturnSchema = exports.saleReturnItemSchema = exports.voidSaleSchema = exports.resumeSaleSchema = exports.holdSaleSchema = exports.createSaleSchema = exports.salePaymentInputSchema = exports.saleItemInputSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.saleItemInputSchema = zod_1.z.object({
    productId: zod_1.z.string().cuid(),
    quantity: zod_1.z.number().positive(),
    unitPrice: zod_1.z.number().nonnegative(),
    discount: zod_1.z.number().nonnegative().optional(),
    taxRate: zod_1.z.number().min(0).max(100).optional(),
});
exports.salePaymentInputSchema = zod_1.z.object({
    method: zod_1.z.nativeEnum(enums_1.PaymentMethod),
    amount: zod_1.z.number().nonnegative(),
});
exports.createSaleSchema = zod_1.z.object({
    branchId: zod_1.z.string().cuid(),
    customerId: zod_1.z.string().cuid().nullable().optional(),
    items: zod_1.z.array(exports.saleItemInputSchema).min(1),
    payments: zod_1.z.array(exports.salePaymentInputSchema),
    discountTotal: zod_1.z.number().nonnegative().optional(),
});
/** A sale rung up but not yet paid for — parked so the cashier can serve the next customer. */
exports.holdSaleSchema = zod_1.z.object({
    branchId: zod_1.z.string().cuid(),
    customerId: zod_1.z.string().cuid().nullable().optional(),
    items: zod_1.z.array(exports.saleItemInputSchema).min(1),
    discountTotal: zod_1.z.number().nonnegative().optional(),
});
exports.resumeSaleSchema = zod_1.z.object({
    payments: zod_1.z.array(exports.salePaymentInputSchema),
});
exports.voidSaleSchema = zod_1.z.object({
    reason: zod_1.z.string().min(3).max(300),
});
exports.saleReturnItemSchema = zod_1.z.object({
    productId: zod_1.z.string().cuid(),
    quantity: zod_1.z.number().positive(),
});
exports.createSaleReturnSchema = zod_1.z.object({
    items: zod_1.z.array(exports.saleReturnItemSchema).min(1),
    reason: zod_1.z.string().max(300).optional(),
    refundMethod: zod_1.z.nativeEnum(enums_1.PaymentMethod),
});
