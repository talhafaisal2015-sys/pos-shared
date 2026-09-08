"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSupplierSchema = exports.createSupplierSchema = void 0;
const zod_1 = require("zod");
exports.createSupplierSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Supplier name is required').max(200),
    contactPerson: zod_1.z.string().max(120).optional(),
    phone: zod_1.z.string().max(20).optional(),
    email: zod_1.z.string().email('Invalid email address').optional().or(zod_1.z.literal('')),
    address: zod_1.z.string().max(255).optional(),
    ntn: zod_1.z.string().max(30).optional(),
    cnic: zod_1.z.string().max(20).optional(),
    bankDetails: zod_1.z.string().max(255).optional(),
    notes: zod_1.z.string().max(1000).optional(),
    rating: zod_1.z.number().int().min(1).max(5).optional(),
    isActive: zod_1.z.boolean().optional(),
});
exports.updateSupplierSchema = exports.createSupplierSchema.partial();
