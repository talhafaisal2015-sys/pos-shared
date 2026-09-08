import { z } from 'zod';

export const clockInSchema = z.object({
  branchId: z.string().cuid(),
});
export type ClockInInput = z.infer<typeof clockInSchema>;

export const createShiftSchema = z.object({
  userId: z.string().cuid(),
  branchId: z.string().cuid(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
});
export type CreateShiftInput = z.infer<typeof createShiftSchema>;
