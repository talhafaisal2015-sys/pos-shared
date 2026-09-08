"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStockBatchSchema = exports.createStockTransferSchema = exports.stockTransferItemSchema = exports.createStockAdjustmentSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.createStockAdjustmentSchema = zod_1.z.object({
    productId: zod_1.z.string().cuid(),
    branchId: zod_1.z.string().cuid(),
    quantityDelta: zod_1.z.number().refine((v) => v !== 0, 'Adjustment quantity cannot be zero'),
    reason: zod_1.z.nativeEnum(enums_1.StockAdjustReason),
    notes: zod_1.z.string().max(500).optional(),
});
exports.stockTransferItemSchema = zod_1.z.object({
    productId: zod_1.z.string().cuid(),
    quantity: zod_1.z.number().positive(),
});
exports.createStockTransferSchema = zod_1.z.object({
    fromBranchId: zod_1.z.string().cuid(),
    toBranchId: zod_1.z.string().cuid(),
    items: zod_1.z.array(exports.stockTransferItemSchema).min(1),
});
exports.createStockBatchSchema = zod_1.z.object({
    productId: zod_1.z.string().cuid(),
    branchId: zod_1.z.string().cuid(),
    batchNo: zod_1.z.string().min(1).max(100),
    expiryDate: zod_1.z.coerce.date().nullable().optional(),
    quantity: zod_1.z.number().positive(),
    costPrice: zod_1.z.number().nonnegative(),
});
