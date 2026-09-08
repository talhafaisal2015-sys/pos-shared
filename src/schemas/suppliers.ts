import { z } from 'zod';

export const createSupplierSchema = z.object({
  name: z.string().min(1, 'Supplier name is required').max(200),
  contactPerson: z.string().max(120).optional(),
  phone: z.string().max(20).optional(),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  address: z.string().max(255).optional(),
  ntn: z.string().max(30).optional(),
  cnic: z.string().max(20).optional(),
  bankDetails: z.string().max(255).optional(),
  notes: z.string().max(1000).optional(),
  rating: z.number().int().min(1).max(5).optional(),
  isActive: z.boolean().optional(),
});
export type CreateSupplierInput = z.infer<typeof createSupplierSchema>;

export const updateSupplierSchema = createSupplierSchema.partial();
export type UpdateSupplierInput = z.infer<typeof updateSupplierSchema>;
