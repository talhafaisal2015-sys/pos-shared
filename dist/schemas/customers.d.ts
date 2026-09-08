import { z } from 'zod';
export declare const createCustomerSchema: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    cnic: z.ZodOptional<z.ZodString>;
    group: z.ZodOptional<z.ZodNativeEnum<{
        readonly RETAIL: "RETAIL";
        readonly WHOLESALE: "WHOLESALE";
        readonly VIP: "VIP";
    }>>;
    creditLimit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    cnic?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    group?: "RETAIL" | "WHOLESALE" | "VIP" | undefined;
    creditLimit?: number | undefined;
}, {
    name: string;
    cnic?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    group?: "RETAIL" | "WHOLESALE" | "VIP" | undefined;
    creditLimit?: number | undefined;
}>;
export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export declare const updateCustomerSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    cnic: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    group: z.ZodOptional<z.ZodOptional<z.ZodNativeEnum<{
        readonly RETAIL: "RETAIL";
        readonly WHOLESALE: "WHOLESALE";
        readonly VIP: "VIP";
    }>>>;
    creditLimit: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    cnic?: string | undefined;
    phone?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    group?: "RETAIL" | "WHOLESALE" | "VIP" | undefined;
    creditLimit?: number | undefined;
}, {
    cnic?: string | undefined;
    phone?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    group?: "RETAIL" | "WHOLESALE" | "VIP" | undefined;
    creditLimit?: number | undefined;
}>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
