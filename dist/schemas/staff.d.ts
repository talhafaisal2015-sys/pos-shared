import { z } from 'zod';
export declare const clockInSchema: z.ZodObject<{
    branchId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    branchId: string;
}, {
    branchId: string;
}>;
export type ClockInInput = z.infer<typeof clockInSchema>;
export declare const createShiftSchema: z.ZodObject<{
    userId: z.ZodString;
    branchId: z.ZodString;
    startTime: z.ZodDate;
    endTime: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    branchId: string;
    userId: string;
    startTime: Date;
    endTime: Date;
}, {
    branchId: string;
    userId: string;
    startTime: Date;
    endTime: Date;
}>;
export type CreateShiftInput = z.infer<typeof createShiftSchema>;
