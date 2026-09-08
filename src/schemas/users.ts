import { z } from 'zod';
import { Role } from '../enums';
import { PERMISSIONS } from '../permissions';

const permissionKeySchema = z.enum(Object.keys(PERMISSIONS) as [string, ...string[]]);

export const createUserSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20).optional().or(z.literal('')).transform((v) => (v === '' ? undefined : v)),
  password: z.string().min(8).max(72),
  role: z.nativeEnum(Role),
  branchId: z.string().cuid().nullable().optional().or(z.literal('')).transform((v) => (v === '' ? null : v)),
  salary: z.preprocess((v) => (typeof v === 'number' && Number.isNaN(v) ? undefined : v), z.number().nonnegative().optional()),
  cnic: z.string().max(20).optional().or(z.literal('')).transform((v) => (v === '' ? undefined : v)),
  address: z.string().max(255).optional().or(z.literal('')).transform((v) => (v === '' ? undefined : v)),
  hireDate: z.preprocess((v) => (v === '' || v === undefined ? undefined : v), z.coerce.date().optional()),
  notes: z.string().max(1000).optional().or(z.literal('')).transform((v) => (v === '' ? undefined : v)),
});
export type CreateUserInput = z.infer<typeof createUserSchema>;

export const updateUserSchema = z.object({
  name: z.string().min(2).max(120).optional(),
  phone: z.string().min(7).max(20).optional().or(z.literal('')).transform((v) => (v === '' ? undefined : v)),
  role: z.nativeEnum(Role).optional(),
  branchId: z.string().cuid().nullable().optional().or(z.literal('')).transform((v) => (v === '' ? null : v)),
  salary: z.preprocess((v) => (typeof v === 'number' && Number.isNaN(v) ? undefined : v), z.number().nonnegative().optional()),
  cnic: z.string().max(20).optional().or(z.literal('')).transform((v) => (v === '' ? undefined : v)),
  address: z.string().max(255).optional().or(z.literal('')).transform((v) => (v === '' ? undefined : v)),
  hireDate: z.preprocess((v) => (v === '' || v === undefined ? undefined : v), z.coerce.date().optional()),
  notes: z.string().max(1000).optional().or(z.literal('')).transform((v) => (v === '' ? undefined : v)),
  isActive: z.boolean().optional(),
});
export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export const updatePermissionOverridesSchema = z.object({
  overrides: z.record(permissionKeySchema, z.boolean()),
});
export type UpdatePermissionOverridesInput = z.infer<typeof updatePermissionOverridesSchema>;
