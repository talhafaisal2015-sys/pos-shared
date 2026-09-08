import { z } from 'zod';

export const recordCreditPaymentSchema = z.object({
  amount: z.number().positive(),
  notes: z.string().max(300).optional(),
});
export type RecordCreditPaymentInput = z.infer<typeof recordCreditPaymentSchema>;

export const recordCreditAdjustmentSchema = z.object({
  amount: z.number().refine((v) => v !== 0, 'Adjustment cannot be zero'),
  notes: z.string().max(300),
});
export type RecordCreditAdjustmentInput = z.infer<typeof recordCreditAdjustmentSchema>;
