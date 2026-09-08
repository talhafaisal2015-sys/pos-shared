"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCashMovementSchema = exports.closeCashSessionSchema = exports.denominationBreakdownSchema = exports.openCashSessionSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.openCashSessionSchema = zod_1.z.object({
    branchId: zod_1.z.string().cuid(),
    openingBalance: zod_1.z.number().nonnegative(),
});
exports.denominationBreakdownSchema = zod_1.z.record(zod_1.z.string(), zod_1.z.number().int().nonnegative());
exports.closeCashSessionSchema = zod_1.z.object({
    closingBalance: zod_1.z.number().nonnegative(),
    denominationBreakdown: exports.denominationBreakdownSchema.optional(),
});
exports.createCashMovementSchema = zod_1.z.object({
    type: zod_1.z.nativeEnum(enums_1.CashMovementType),
    amount: zod_1.z.number().positive(),
    reason: zod_1.z.string().max(300).optional(),
});
