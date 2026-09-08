import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string().min(1).max(120),
  parentId: z
    .string()
    .cuid()
    .nullable()
    .optional()
    .or(z.literal(''))
    .transform((v) => (v === '' ? null : v)),
  color: z.string().max(20).optional(),
  icon: z.string().max(40).optional(),
});
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;

export const updateCategorySchema = createCategorySchema.partial();
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
