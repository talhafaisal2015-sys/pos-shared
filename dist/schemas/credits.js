"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordCreditAdjustmentSchema = exports.recordCreditPaymentSchema = void 0;
const zod_1 = require("zod");
exports.recordCreditPaymentSchema = zod_1.z.object({
    amount: zod_1.z.number().positive(),
    notes: zod_1.z.string().max(300).optional(),
});
exports.recordCreditAdjustmentSchema = zod_1.z.object({
    amount: zod_1.z.number().refine((v) => v !== 0, 'Adjustment cannot be zero'),
    notes: zod_1.z.string().max(300),
});
