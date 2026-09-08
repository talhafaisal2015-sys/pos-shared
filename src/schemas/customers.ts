import { z } from 'zod';
import { CustomerGroup } from '../enums';

export const createCustomerSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().max(20).optional(),
  address: z.string().max(255).optional(),
  cnic: z.string().max(20).optional(),
  group: z.nativeEnum(CustomerGroup).optional(),
  creditLimit: z.number().nonnegative().optional(),
});
export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;

export const updateCustomerSchema = createCustomerSchema.partial();
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
