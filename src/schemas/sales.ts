import { z } from 'zod';
import { PaymentMethod } from '../enums';

export const saleItemInputSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().positive(),
  unitPrice: z.number().nonnegative(),
  discount: z.number().nonnegative().optional(),
  taxRate: z.number().min(0).max(100).optional(),
});
export type SaleItemInput = z.infer<typeof saleItemInputSchema>;

export const salePaymentInputSchema = z.object({
  method: z.nativeEnum(PaymentMethod),
  amount: z.number().nonnegative(),
});
export type SalePaymentInput = z.infer<typeof salePaymentInputSchema>;

export const createSaleSchema = z.object({
  branchId: z.string().cuid(),
  customerId: z.string().cuid().nullable().optional(),
  items: z.array(saleItemInputSchema).min(1),
  payments: z.array(salePaymentInputSchema),
  discountTotal: z.number().nonnegative().optional(),
});
export type CreateSaleInput = z.infer<typeof createSaleSchema>;

/** A sale rung up but not yet paid for — parked so the cashier can serve the next customer. */
export const holdSaleSchema = z.object({
  branchId: z.string().cuid(),
  customerId: z.string().cuid().nullable().optional(),
  items: z.array(saleItemInputSchema).min(1),
  discountTotal: z.number().nonnegative().optional(),
});
export type HoldSaleInput = z.infer<typeof holdSaleSchema>;

export const resumeSaleSchema = z.object({
  payments: z.array(salePaymentInputSchema),
});
export type ResumeSaleInput = z.infer<typeof resumeSaleSchema>;

export const voidSaleSchema = z.object({
  reason: z.string().min(3).max(300),
});
export type VoidSaleInput = z.infer<typeof voidSaleSchema>;

export const saleReturnItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().positive(),
});

export const createSaleReturnSchema = z.object({
  items: z.array(saleReturnItemSchema).min(1),
  reason: z.string().max(300).optional(),
  refundMethod: z.nativeEnum(PaymentMethod),
});
export type CreateSaleReturnInput = z.infer<typeof createSaleReturnSchema>;
