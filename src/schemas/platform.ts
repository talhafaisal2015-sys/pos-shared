import { z } from 'zod';

export const platformLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
export type PlatformLoginInput = z.infer<typeof platformLoginSchema>;

export const createPlatformAdminSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  password: z.string().min(8).max(72),
});
export type CreatePlatformAdminInput = z.infer<typeof createPlatformAdminSchema>;

export const updatePlatformAdminSchema = z.object({
  name: z.string().min(2).max(120).optional(),
  isActive: z.boolean().optional(),
});
export type UpdatePlatformAdminInput = z.infer<typeof updatePlatformAdminSchema>;

export const suspendOrganizationSchema = z.object({
  isSuspended: z.boolean(),
});
export type SuspendOrganizationInput = z.infer<typeof suspendOrganizationSchema>;
