import { z } from 'zod';
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
    parentId: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>;
    color: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    parentId?: string | null | undefined;
    color?: string | undefined;
    icon?: string | undefined;
}, {
    name: string;
    parentId?: string | null | undefined;
    color?: string | undefined;
    icon?: string | undefined;
}>;
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export declare const updateCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>>;
    color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    icon: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    parentId?: string | null | undefined;
    color?: string | undefined;
    icon?: string | undefined;
}, {
    name?: string | undefined;
    parentId?: string | null | undefined;
    color?: string | undefined;
    icon?: string | undefined;
}>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
