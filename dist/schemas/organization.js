"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettingsSchema = exports.updateOrganizationSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.updateOrganizationSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(120).optional(),
    businessType: zod_1.z.nativeEnum(enums_1.BusinessType).optional(),
    logoUrl: zod_1.z.string().max(500).nullable().optional().or(zod_1.z.literal('')).transform(v => v === '' ? null : v),
    address: zod_1.z.string().max(255).optional(),
    ntn: zod_1.z.string().max(30).optional(),
    phone: zod_1.z.string().max(20).optional(),
    email: zod_1.z.string().email().optional(),
    currency: zod_1.z.string().max(10).optional(),
});
exports.updateSettingsSchema = zod_1.z.object({
    taxConfig: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
    receiptConfig: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
    printerConfig: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
    fbrConfig: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
    paymentMethodsEnabled: zod_1.z.record(zod_1.z.string(), zod_1.z.boolean()).optional(),
    language: zod_1.z.enum(['en', 'ur']).optional(),
});
