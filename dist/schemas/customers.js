"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerSchema = exports.createCustomerSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.createCustomerSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(200),
    phone: zod_1.z.string().max(20).optional(),
    address: zod_1.z.string().max(255).optional(),
    cnic: zod_1.z.string().max(20).optional(),
    group: zod_1.z.nativeEnum(enums_1.CustomerGroup).optional(),
    creditLimit: zod_1.z.number().nonnegative().optional(),
});
exports.updateCustomerSchema = exports.createCustomerSchema.partial();
