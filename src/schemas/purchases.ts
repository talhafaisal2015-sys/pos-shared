import { z } from 'zod';

export const purchaseOrderItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().positive(),
  unitCost: z.number().nonnegative(),
});
export type PurchaseOrderItemInput = z.infer<typeof purchaseOrderItemSchema>;

export const createPurchaseOrderSchema = z.object({
  branchId: z.string().cuid(),
  supplierId: z.string().cuid(),
  expectedDate: z.coerce.date().nullable().optional(),
  notes: z.string().max(500).optional(),
  items: z.array(purchaseOrderItemSchema).min(1),
});
export type CreatePurchaseOrderInput = z.infer<typeof createPurchaseOrderSchema>;

export const sendPurchaseOrderSchema = z.object({});
export type SendPurchaseOrderInput = z.infer<typeof sendPurchaseOrderSchema>;

export const grnItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().positive(),
  batchNo: z.string().max(100).optional(),
  expiryDate: z.coerce.date().nullable().optional(),
});
export type GrnItemInput = z.infer<typeof grnItemSchema>;

export const createGrnSchema = z.object({
  items: z.array(grnItemSchema).min(1),
  invoiceImageUrl: z.string().url().optional(),
  notes: z.string().max(500).optional(),
});
export type CreateGrnInput = z.infer<typeof createGrnSchema>;

export const purchaseReturnItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().positive(),
});

export const createPurchaseReturnSchema = z.object({
  items: z.array(purchaseReturnItemSchema).min(1),
  reason: z.string().max(300).optional(),
});
export type CreatePurchaseReturnInput = z.infer<typeof createPurchaseReturnSchema>;
