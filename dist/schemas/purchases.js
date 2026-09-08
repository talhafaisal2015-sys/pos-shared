"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchaseReturnSchema = exports.purchaseReturnItemSchema = exports.createGrnSchema = exports.grnItemSchema = exports.sendPurchaseOrderSchema = exports.createPurchaseOrderSchema = exports.purchaseOrderItemSchema = void 0;
const zod_1 = require("zod");
exports.purchaseOrderItemSchema = zod_1.z.object({
    productId: zod_1.z.string().cuid(),
    quantity: zod_1.z.number().positive(),
    unitCost: zod_1.z.number().nonnegative(),
});
exports.createPurchaseOrderSchema = zod_1.z.object({
    branchId: zod_1.z.string().cuid(),
    supplierId: zod_1.z.string().cuid(),
    expectedDate: zod_1.z.coerce.date().nullable().optional(),
    notes: zod_1.z.string().max(500).optional(),
    items: zod_1.z.array(exports.purchaseOrderItemSchema).min(1),
});
exports.sendPurchaseOrderSchema = zod_1.z.object({});
exports.grnItemSchema = zod_1.z.object({
    productId: zod_1.z.string().cuid(),
    quantity: zod_1.z.number().positive(),
    batchNo: zod_1.z.string().max(100).optional(),
    expiryDate: zod_1.z.coerce.date().nullable().optional(),
});
exports.createGrnSchema = zod_1.z.object({
    items: zod_1.z.array(exports.grnItemSchema).min(1),
    invoiceImageUrl: zod_1.z.string().url().optional(),
    notes: zod_1.z.string().max(500).optional(),
});
exports.purchaseReturnItemSchema = zod_1.z.object({
    productId: zod_1.z.string().cuid(),
    quantity: zod_1.z.number().positive(),
});
exports.createPurchaseReturnSchema = zod_1.z.object({
    items: zod_1.z.array(exports.purchaseReturnItemSchema).min(1),
    reason: zod_1.z.string().max(300).optional(),
});
