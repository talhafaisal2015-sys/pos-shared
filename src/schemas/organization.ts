import { z } from 'zod';
import { BusinessType } from '../enums';

export const updateOrganizationSchema = z.object({
  name: z.string().min(2).max(120).optional(),
  businessType: z.nativeEnum(BusinessType).optional(),
  logoUrl: z.string().max(500).nullable().optional().or(z.literal('')).transform(v => v === '' ? null : v),
  address: z.string().max(255).optional(),
  ntn: z.string().max(30).optional(),
  phone: z.string().max(20).optional(),
  email: z.string().email().optional(),
  currency: z.string().max(10).optional(),
});
export type UpdateOrganizationInput = z.infer<typeof updateOrganizationSchema>;

export const updateSettingsSchema = z.object({
  taxConfig: z.record(z.string(), z.unknown()).optional(),
  receiptConfig: z.record(z.string(), z.unknown()).optional(),
  printerConfig: z.record(z.string(), z.unknown()).optional(),
  fbrConfig: z.record(z.string(), z.unknown()).optional(),
  paymentMethodsEnabled: z.record(z.string(), z.boolean()).optional(),
  language: z.enum(['en', 'ur']).optional(),
});
export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;
