import { z } from 'zod';
import { StockAdjustReason } from '../enums';

export const createStockAdjustmentSchema = z.object({
  productId: z.string().cuid(),
  branchId: z.string().cuid(),
  quantityDelta: z.number().refine((v) => v !== 0, 'Adjustment quantity cannot be zero'),
  reason: z.nativeEnum(StockAdjustReason),
  notes: z.string().max(500).optional(),
});
export type CreateStockAdjustmentInput = z.infer<typeof createStockAdjustmentSchema>;

export const stockTransferItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().positive(),
});

export const createStockTransferSchema = z.object({
  fromBranchId: z.string().cuid(),
  toBranchId: z.string().cuid(),
  items: z.array(stockTransferItemSchema).min(1),
});
export type CreateStockTransferInput = z.infer<typeof createStockTransferSchema>;

export const createStockBatchSchema = z.object({
  productId: z.string().cuid(),
  branchId: z.string().cuid(),
  batchNo: z.string().min(1).max(100),
  expiryDate: z.coerce.date().nullable().optional(),
  quantity: z.number().positive(),
  costPrice: z.number().nonnegative(),
});
export type CreateStockBatchInput = z.infer<typeof createStockBatchSchema>;
