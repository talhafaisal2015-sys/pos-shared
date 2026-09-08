"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suspendOrganizationSchema = exports.updatePlatformAdminSchema = exports.createPlatformAdminSchema = exports.platformLoginSchema = void 0;
const zod_1 = require("zod");
exports.platformLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1),
});
exports.createPlatformAdminSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(120),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8).max(72),
});
exports.updatePlatformAdminSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(120).optional(),
    isActive: zod_1.z.boolean().optional(),
});
exports.suspendOrganizationSchema = zod_1.z.object({
    isSuspended: zod_1.z.boolean(),
});
