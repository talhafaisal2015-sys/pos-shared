"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productImportRowSchema = exports.setBundleItemsSchema = exports.bundleItemSchema = exports.createProductVariantSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.createProductSchema = zod_1.z.object({
    sku: zod_1.z.string().max(64).optional().or(zod_1.z.literal('')).transform(s => s === '' ? undefined : s),
    barcode: zod_1.z.string().max(64).optional().or(zod_1.z.literal('')).transform(s => s === '' ? undefined : s),
    name: zod_1.z.string().min(1, 'Product name is required').max(200),
    description: zod_1.z.string().max(2000).optional(),
    // Relative path returned by the uploads endpoint (e.g. "/uploads/products/{orgId}/{file}"), not
    // an absolute URL — kept portable across environments/domains, resolved client-side at render time.
    imageUrl: zod_1.z.string().max(500).nullable().optional().or(zod_1.z.literal('')).transform(v => v === '' ? null : v),
    categoryId: zod_1.z.string().cuid().nullable().optional().or(zod_1.z.literal('')).transform(v => v === '' ? null : v),
    costPrice: zod_1.z.number({ invalid_type_error: 'Cost price is required' }).or(zod_1.z.nan()).transform(n => Number.isNaN(n) ? undefined : n).refine((val) => val !== undefined, { message: 'Cost price is required' }).refine((val) => val >= 0, { message: 'Cost price cannot be negative' }),
    retailPrice: zod_1.z.number({ invalid_type_error: 'Retail price is required' }).or(zod_1.z.nan()).transform(n => Number.isNaN(n) ? undefined : n).refine((val) => val !== undefined, { message: 'Retail price is required' }).refine((val) => val >= 0, { message: 'Retail price cannot be negative' }),
    wholesalePrice: zod_1.z.number().nonnegative().optional().or(zod_1.z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
    taxRate: zod_1.z.number().min(0).max(100).optional().or(zod_1.z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
    unit: zod_1.z.nativeEnum(enums_1.Unit).optional().or(zod_1.z.literal('')).transform(v => v === '' ? undefined : v),
    unitConversionFactor: zod_1.z.number().positive().optional().or(zod_1.z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
    baseUnit: zod_1.z.nativeEnum(enums_1.Unit).nullable().optional().or(zod_1.z.literal('')).transform(v => v === '' ? undefined : v),
    reorderLevel: zod_1.z.number().nonnegative().optional().or(zod_1.z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
    reorderQty: zod_1.z.number().nonnegative().optional().or(zod_1.z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
    status: zod_1.z.nativeEnum(enums_1.ProductStatus).optional().or(zod_1.z.literal('')).transform(v => v === '' ? undefined : v),
    isBundle: zod_1.z.boolean().optional(),
});
exports.updateProductSchema = exports.createProductSchema.partial();
exports.createProductVariantSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    sku: zod_1.z.string().max(64).optional(),
    barcode: zod_1.z.string().max(64).optional(),
    priceDelta: zod_1.z.number().optional(),
});
exports.bundleItemSchema = zod_1.z.object({
    componentProductId: zod_1.z.string().cuid(),
    quantity: zod_1.z.number().positive(),
});
exports.setBundleItemsSchema = zod_1.z.object({
    items: zod_1.z.array(exports.bundleItemSchema).min(1),
});
/** One row of a bulk product CSV/Excel import. */
exports.productImportRowSchema = zod_1.z.object({
    sku: zod_1.z.string().min(1),
    barcode: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1),
    categoryName: zod_1.z.string().optional(),
    costPrice: zod_1.z.coerce.number().nonnegative(),
    retailPrice: zod_1.z.coerce.number().nonnegative(),
    wholesalePrice: zod_1.z.coerce.number().nonnegative().optional(),
    taxRate: zod_1.z.coerce.number().min(0).max(100).default(0),
    unit: zod_1.z.nativeEnum(enums_1.Unit).default(enums_1.Unit.PIECE),
    reorderLevel: zod_1.z.coerce.number().nonnegative().default(0),
    reorderQty: zod_1.z.coerce.number().nonnegative().default(0),
});
