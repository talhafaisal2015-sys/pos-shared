import { z } from 'zod';

export const createBranchSchema = z.object({
  name: z.string().min(2).max(120),
  address: z.string().max(255).optional(),
  phone: z.string().min(7).max(20).optional(),
  managerId: z.string().cuid().nullable().optional(),
  openingCashBalance: z.coerce.number().optional(),
  openingCashAsOf: z.coerce.date().nullable().optional(),
});
export type CreateBranchInput = z.infer<typeof createBranchSchema>;

export const updateBranchSchema = createBranchSchema.partial().extend({
  isActive: z.boolean().optional(),
});
export type UpdateBranchInput = z.infer<typeof updateBranchSchema>;
