"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decideExpenseSchema = exports.updateExpenseSchema = exports.createExpenseSchema = exports.createExpenseCategorySchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.createExpenseCategorySchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
});
exports.createExpenseSchema = zod_1.z.object({
    branchId: zod_1.z.preprocess((val) => (val === '' ? undefined : val), zod_1.z.string().cuid().nullable().optional()),
    categoryId: zod_1.z.string().cuid(),
    amount: zod_1.z.number().positive(),
    paymentMethod: zod_1.z.nativeEnum(enums_1.PaymentMethod).optional(),
    description: zod_1.z.string().max(500).optional(),
    receiptImageUrl: zod_1.z.string().url().optional(),
    isRecurring: zod_1.z.boolean().optional(),
    recurrenceRule: zod_1.z.string().max(50).optional(),
    isPettyCash: zod_1.z.boolean().optional(),
});
exports.updateExpenseSchema = exports.createExpenseSchema.partial();
exports.decideExpenseSchema = zod_1.z.object({
    approve: zod_1.z.boolean(),
});
