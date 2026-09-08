import { z } from 'zod';
import { BusinessType } from '../enums';

export const registerOrgSchema = z.object({
  organizationName: z.string().min(2).max(120),
  businessType: z.nativeEnum(BusinessType),
  ownerName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  password: z.string().min(8).max(72),
});
export type RegisterOrgInput = z.infer<typeof registerOrgSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const refreshSchema = z.object({
  refreshToken: z.string().min(1),
});
export type RefreshInput = z.infer<typeof refreshSchema>;
