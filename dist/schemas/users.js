"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePermissionOverridesSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
const permissions_1 = require("../permissions");
const permissionKeySchema = zod_1.z.enum(Object.keys(permissions_1.PERMISSIONS));
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(120),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().min(7).max(20).optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? undefined : v)),
    password: zod_1.z.string().min(8).max(72),
    role: zod_1.z.nativeEnum(enums_1.Role),
    branchId: zod_1.z.string().cuid().nullable().optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? null : v)),
    salary: zod_1.z.preprocess((v) => (typeof v === 'number' && Number.isNaN(v) ? undefined : v), zod_1.z.number().nonnegative().optional()),
    cnic: zod_1.z.string().max(20).optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? undefined : v)),
    address: zod_1.z.string().max(255).optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? undefined : v)),
    hireDate: zod_1.z.preprocess((v) => (v === '' || v === undefined ? undefined : v), zod_1.z.coerce.date().optional()),
    notes: zod_1.z.string().max(1000).optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? undefined : v)),
});
exports.updateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(120).optional(),
    phone: zod_1.z.string().min(7).max(20).optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? undefined : v)),
    role: zod_1.z.nativeEnum(enums_1.Role).optional(),
    branchId: zod_1.z.string().cuid().nullable().optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? null : v)),
    salary: zod_1.z.preprocess((v) => (typeof v === 'number' && Number.isNaN(v) ? undefined : v), zod_1.z.number().nonnegative().optional()),
    cnic: zod_1.z.string().max(20).optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? undefined : v)),
    address: zod_1.z.string().max(255).optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? undefined : v)),
    hireDate: zod_1.z.preprocess((v) => (v === '' || v === undefined ? undefined : v), zod_1.z.coerce.date().optional()),
    notes: zod_1.z.string().max(1000).optional().or(zod_1.z.literal('')).transform((v) => (v === '' ? undefined : v)),
    isActive: zod_1.z.boolean().optional(),
});
exports.updatePermissionOverridesSchema = zod_1.z.object({
    overrides: zod_1.z.record(permissionKeySchema, zod_1.z.boolean()),
});
