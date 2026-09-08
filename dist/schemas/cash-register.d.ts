import { z } from 'zod';
export declare const openCashSessionSchema: z.ZodObject<{
    branchId: z.ZodString;
    openingBalance: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    branchId: string;
    openingBalance: number;
}, {
    branchId: string;
    openingBalance: number;
}>;
export type OpenCashSessionInput = z.infer<typeof openCashSessionSchema>;
export declare const denominationBreakdownSchema: z.ZodRecord<z.ZodString, z.ZodNumber>;
export type DenominationBreakdown = z.infer<typeof denominationBreakdownSchema>;
export declare const closeCashSessionSchema: z.ZodObject<{
    closingBalance: z.ZodNumber;
    denominationBreakdown: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    closingBalance: number;
    denominationBreakdown?: Record<string, number> | undefined;
}, {
    closingBalance: number;
    denominationBreakdown?: Record<string, number> | undefined;
}>;
export type CloseCashSessionInput = z.infer<typeof closeCashSessionSchema>;
export declare const createCashMovementSchema: z.ZodObject<{
    type: z.ZodNativeEnum<{
        readonly CASH_IN: "CASH_IN";
        readonly CASH_OUT: "CASH_OUT";
        readonly WITHDRAWAL: "WITHDRAWAL";
        readonly PETTY_CASH_TOPUP: "PETTY_CASH_TOPUP";
    }>;
    amount: z.ZodNumber;
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "CASH_IN" | "CASH_OUT" | "WITHDRAWAL" | "PETTY_CASH_TOPUP";
    amount: number;
    reason?: string | undefined;
}, {
    type: "CASH_IN" | "CASH_OUT" | "WITHDRAWAL" | "PETTY_CASH_TOPUP";
    amount: number;
    reason?: string | undefined;
}>;
export type CreateCashMovementInput = z.infer<typeof createCashMovementSchema>;
