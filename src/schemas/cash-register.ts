import { z } from 'zod';
import { CashMovementType } from '../enums';

export const openCashSessionSchema = z.object({
  branchId: z.string().cuid(),
  openingBalance: z.number().nonnegative(),
});
export type OpenCashSessionInput = z.infer<typeof openCashSessionSchema>;

export const denominationBreakdownSchema = z.record(z.string(), z.number().int().nonnegative());
export type DenominationBreakdown = z.infer<typeof denominationBreakdownSchema>;

export const closeCashSessionSchema = z.object({
  closingBalance: z.number().nonnegative(),
  denominationBreakdown: denominationBreakdownSchema.optional(),
});
export type CloseCashSessionInput = z.infer<typeof closeCashSessionSchema>;

export const createCashMovementSchema = z.object({
  type: z.nativeEnum(CashMovementType),
  amount: z.number().positive(),
  reason: z.string().max(300).optional(),
});
export type CreateCashMovementInput = z.infer<typeof createCashMovementSchema>;
