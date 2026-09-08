import { z } from 'zod';
export declare const recordCreditPaymentSchema: z.ZodObject<{
    amount: z.ZodNumber;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    amount: number;
    notes?: string | undefined;
}, {
    amount: number;
    notes?: string | undefined;
}>;
export type RecordCreditPaymentInput = z.infer<typeof recordCreditPaymentSchema>;
export declare const recordCreditAdjustmentSchema: z.ZodObject<{
    amount: z.ZodEffects<z.ZodNumber, number, number>;
    notes: z.ZodString;
}, "strip", z.ZodTypeAny, {
    notes: string;
    amount: number;
}, {
    notes: string;
    amount: number;
}>;
export type RecordCreditAdjustmentInput = z.infer<typeof recordCreditAdjustmentSchema>;
