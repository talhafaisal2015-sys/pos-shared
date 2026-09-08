"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBranchSchema = exports.createBranchSchema = void 0;
const zod_1 = require("zod");
exports.createBranchSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(120),
    address: zod_1.z.string().max(255).optional(),
    phone: zod_1.z.string().min(7).max(20).optional(),
    managerId: zod_1.z.string().cuid().nullable().optional(),
    openingCashBalance: zod_1.z.coerce.number().optional(),
    openingCashAsOf: zod_1.z.coerce.date().nullable().optional(),
});
exports.updateBranchSchema = exports.createBranchSchema.partial().extend({
    isActive: zod_1.z.boolean().optional(),
});
