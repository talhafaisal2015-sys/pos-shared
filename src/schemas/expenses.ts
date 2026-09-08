import { z } from 'zod';
import { PaymentMethod } from '../enums';

export const createExpenseCategorySchema = z.object({
  name: z.string().min(1).max(100),
});
export type CreateExpenseCategoryInput = z.infer<typeof createExpenseCategorySchema>;

export const createExpenseSchema = z.object({
  branchId: z.preprocess((val) => (val === '' ? undefined : val), z.string().cuid().nullable().optional()),
  categoryId: z.string().cuid(),
  amount: z.number().positive(),
  paymentMethod: z.nativeEnum(PaymentMethod).optional(),
  description: z.string().max(500).optional(),
  receiptImageUrl: z.string().url().optional(),
  isRecurring: z.boolean().optional(),
  recurrenceRule: z.string().max(50).optional(),
  isPettyCash: z.boolean().optional(),
});
export type CreateExpenseInput = z.infer<typeof createExpenseSchema>;

export const updateExpenseSchema = createExpenseSchema.partial();
export type UpdateExpenseInput = z.infer<typeof updateExpenseSchema>;

export const decideExpenseSchema = z.object({
  approve: z.boolean(),
});
export type DecideExpenseInput = z.infer<typeof decideExpenseSchema>;
