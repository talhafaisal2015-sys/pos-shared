"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.createCategorySchema = void 0;
const zod_1 = require("zod");
exports.createCategorySchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(120),
    parentId: zod_1.z
        .string()
        .cuid()
        .nullable()
        .optional()
        .or(zod_1.z.literal(''))
        .transform((v) => (v === '' ? null : v)),
    color: zod_1.z.string().max(20).optional(),
    icon: zod_1.z.string().max(40).optional(),
});
exports.updateCategorySchema = exports.createCategorySchema.partial();
