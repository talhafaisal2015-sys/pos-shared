import { z } from 'zod';
import { ProductStatus, Unit } from '../enums';

export const createProductSchema = z.object({
  sku: z.string().max(64).optional().or(z.literal('')).transform(s => s === '' ? undefined : s),
  barcode: z.string().max(64).optional().or(z.literal('')).transform(s => s === '' ? undefined : s),
  name: z.string().min(1, 'Product name is required').max(200),
  description: z.string().max(2000).optional(),
  // Relative path returned by the uploads endpoint (e.g. "/uploads/products/{orgId}/{file}"), not
  // an absolute URL — kept portable across environments/domains, resolved client-side at render time.
  imageUrl: z.string().max(500).nullable().optional().or(z.literal('')).transform(v => v === '' ? null : v),
  categoryId: z.string().cuid().nullable().optional().or(z.literal('')).transform(v => v === '' ? null : v),
  costPrice: z.number({ invalid_type_error: 'Cost price is required' }).or(z.nan()).transform(n => Number.isNaN(n) ? undefined : n).refine((val) => val !== undefined, { message: 'Cost price is required' }).refine((val) => val! >= 0, { message: 'Cost price cannot be negative' }),
  retailPrice: z.number({ invalid_type_error: 'Retail price is required' }).or(z.nan()).transform(n => Number.isNaN(n) ? undefined : n).refine((val) => val !== undefined, { message: 'Retail price is required' }).refine((val) => val! >= 0, { message: 'Retail price cannot be negative' }),
  wholesalePrice: z.number().nonnegative().optional().or(z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
  taxRate: z.number().min(0).max(100).optional().or(z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
  unit: z.nativeEnum(Unit).optional().or(z.literal('')).transform(v => v === '' ? undefined : v),
  unitConversionFactor: z.number().positive().optional().or(z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
  baseUnit: z.nativeEnum(Unit).nullable().optional().or(z.literal('')).transform(v => v === '' ? undefined : v),
  reorderLevel: z.number().nonnegative().optional().or(z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
  reorderQty: z.number().nonnegative().optional().or(z.nan()).transform(n => Number.isNaN(n) ? undefined : n),
  status: z.nativeEnum(ProductStatus).optional().or(z.literal('')).transform(v => v === '' ? undefined : v),
  isBundle: z.boolean().optional(),
});
export type CreateProductInput = z.infer<typeof createProductSchema>;

export const updateProductSchema = createProductSchema.partial();
export type UpdateProductInput = z.infer<typeof updateProductSchema>;

export const createProductVariantSchema = z.object({
  name: z.string().min(1).max(100),
  sku: z.string().max(64).optional(),
  barcode: z.string().max(64).optional(),
  priceDelta: z.number().optional(),
});
export type CreateProductVariantInput = z.infer<typeof createProductVariantSchema>;

export const bundleItemSchema = z.object({
  componentProductId: z.string().cuid(),
  quantity: z.number().positive(),
});
export type BundleItemInput = z.infer<typeof bundleItemSchema>;

export const setBundleItemsSchema = z.object({
  items: z.array(bundleItemSchema).min(1),
});
export type SetBundleItemsInput = z.infer<typeof setBundleItemsSchema>;

/** One row of a bulk product CSV/Excel import. */
export const productImportRowSchema = z.object({
  sku: z.string().min(1),
  barcode: z.string().optional(),
  name: z.string().min(1),
  categoryName: z.string().optional(),
  costPrice: z.coerce.number().nonnegative(),
  retailPrice: z.coerce.number().nonnegative(),
  wholesalePrice: z.coerce.number().nonnegative().optional(),
  taxRate: z.coerce.number().min(0).max(100).default(0),
  unit: z.nativeEnum(Unit).default(Unit.PIECE),
  reorderLevel: z.coerce.number().nonnegative().default(0),
  reorderQty: z.coerce.number().nonnegative().default(0),
});
export type ProductImportRow = z.infer<typeof productImportRowSchema>;
