"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshSchema = exports.loginSchema = exports.registerOrgSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.registerOrgSchema = zod_1.z.object({
    organizationName: zod_1.z.string().min(2).max(120),
    businessType: zod_1.z.nativeEnum(enums_1.BusinessType),
    ownerName: zod_1.z.string().min(2).max(120),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().min(7).max(20),
    password: zod_1.z.string().min(8).max(72),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1),
});
exports.refreshSchema = zod_1.z.object({
    refreshToken: zod_1.z.string().min(1),
});
