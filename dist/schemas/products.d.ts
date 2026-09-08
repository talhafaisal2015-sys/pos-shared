import { z } from 'zod';
export declare const createProductSchema: z.ZodObject<{
    sku: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    barcode: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>;
    categoryId: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>;
    costPrice: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodNaN]>, number | undefined, number>, number, number>, number, number>;
    retailPrice: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodNaN]>, number | undefined, number>, number, number>, number, number>;
    wholesalePrice: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>;
    taxRate: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>;
    unit: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNativeEnum<{
        readonly PIECE: "PIECE";
        readonly KG: "KG";
        readonly GRAM: "GRAM";
        readonly LITRE: "LITRE";
        readonly ML: "ML";
        readonly DOZEN: "DOZEN";
        readonly BOX: "BOX";
        readonly CARTON: "CARTON";
        readonly METER: "METER";
        readonly PACK: "PACK";
    }>>, z.ZodLiteral<"">]>, "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined, "" | "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined>;
    unitConversionFactor: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>;
    baseUnit: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodNativeEnum<{
        readonly PIECE: "PIECE";
        readonly KG: "KG";
        readonly GRAM: "GRAM";
        readonly LITRE: "LITRE";
        readonly ML: "ML";
        readonly DOZEN: "DOZEN";
        readonly BOX: "BOX";
        readonly CARTON: "CARTON";
        readonly METER: "METER";
        readonly PACK: "PACK";
    }>>>, z.ZodLiteral<"">]>, "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | null | undefined, "" | "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | null | undefined>;
    reorderLevel: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>;
    reorderQty: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>;
    status: z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNativeEnum<{
        readonly ACTIVE: "ACTIVE";
        readonly INACTIVE: "INACTIVE";
        readonly DISCONTINUED: "DISCONTINUED";
    }>>, z.ZodLiteral<"">]>, "ACTIVE" | "INACTIVE" | "DISCONTINUED" | undefined, "" | "ACTIVE" | "INACTIVE" | "DISCONTINUED" | undefined>;
    isBundle: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    costPrice: number;
    retailPrice: number;
    sku?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | "DISCONTINUED" | undefined;
    barcode?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | null | undefined;
    categoryId?: string | null | undefined;
    wholesalePrice?: number | undefined;
    taxRate?: number | undefined;
    unit?: "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined;
    unitConversionFactor?: number | undefined;
    baseUnit?: "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | null | undefined;
    reorderLevel?: number | undefined;
    reorderQty?: number | undefined;
    isBundle?: boolean | undefined;
}, {
    name: string;
    costPrice: number;
    retailPrice: number;
    sku?: string | undefined;
    status?: "" | "ACTIVE" | "INACTIVE" | "DISCONTINUED" | undefined;
    barcode?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | null | undefined;
    categoryId?: string | null | undefined;
    wholesalePrice?: number | undefined;
    taxRate?: number | undefined;
    unit?: "" | "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined;
    unitConversionFactor?: number | undefined;
    baseUnit?: "" | "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | null | undefined;
    reorderLevel?: number | undefined;
    reorderQty?: number | undefined;
    isBundle?: boolean | undefined;
}>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
export declare const updateProductSchema: z.ZodObject<{
    sku: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>>;
    barcode: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>, string | undefined, string | undefined>>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>>;
    categoryId: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodLiteral<"">]>, string | null | undefined, string | null | undefined>>;
    costPrice: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodNaN]>, number | undefined, number>, number, number>, number, number>>;
    retailPrice: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodNaN]>, number | undefined, number>, number, number>, number, number>>;
    wholesalePrice: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>>;
    taxRate: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>>;
    unit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNativeEnum<{
        readonly PIECE: "PIECE";
        readonly KG: "KG";
        readonly GRAM: "GRAM";
        readonly LITRE: "LITRE";
        readonly ML: "ML";
        readonly DOZEN: "DOZEN";
        readonly BOX: "BOX";
        readonly CARTON: "CARTON";
        readonly METER: "METER";
        readonly PACK: "PACK";
    }>>, z.ZodLiteral<"">]>, "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined, "" | "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined>>;
    unitConversionFactor: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>>;
    baseUnit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNullable<z.ZodNativeEnum<{
        readonly PIECE: "PIECE";
        readonly KG: "KG";
        readonly GRAM: "GRAM";
        readonly LITRE: "LITRE";
        readonly ML: "ML";
        readonly DOZEN: "DOZEN";
        readonly BOX: "BOX";
        readonly CARTON: "CARTON";
        readonly METER: "METER";
        readonly PACK: "PACK";
    }>>>, z.ZodLiteral<"">]>, "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | null | undefined, "" | "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | null | undefined>>;
    reorderLevel: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>>;
    reorderQty: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNumber>, z.ZodNaN]>, number | undefined, number | undefined>>;
    status: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodOptional<z.ZodNativeEnum<{
        readonly ACTIVE: "ACTIVE";
        readonly INACTIVE: "INACTIVE";
        readonly DISCONTINUED: "DISCONTINUED";
    }>>, z.ZodLiteral<"">]>, "ACTIVE" | "INACTIVE" | "DISCONTINUED" | undefined, "" | "ACTIVE" | "INACTIVE" | "DISCONTINUED" | undefined>>;
    isBundle: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    sku?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | "DISCONTINUED" | undefined;
    name?: string | undefined;
    barcode?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | null | undefined;
    categoryId?: string | null | undefined;
    costPrice?: number | undefined;
    retailPrice?: number | undefined;
    wholesalePrice?: number | undefined;
    taxRate?: number | undefined;
    unit?: "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined;
    unitConversionFactor?: number | undefined;
    baseUnit?: "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | null | undefined;
    reorderLevel?: number | undefined;
    reorderQty?: number | undefined;
    isBundle?: boolean | undefined;
}, {
    sku?: string | undefined;
    status?: "" | "ACTIVE" | "INACTIVE" | "DISCONTINUED" | undefined;
    name?: string | undefined;
    barcode?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | null | undefined;
    categoryId?: string | null | undefined;
    costPrice?: number | undefined;
    retailPrice?: number | undefined;
    wholesalePrice?: number | undefined;
    taxRate?: number | undefined;
    unit?: "" | "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined;
    unitConversionFactor?: number | undefined;
    baseUnit?: "" | "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | null | undefined;
    reorderLevel?: number | undefined;
    reorderQty?: number | undefined;
    isBundle?: boolean | undefined;
}>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export declare const createProductVariantSchema: z.ZodObject<{
    name: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    priceDelta: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    sku?: string | undefined;
    barcode?: string | undefined;
    priceDelta?: number | undefined;
}, {
    name: string;
    sku?: string | undefined;
    barcode?: string | undefined;
    priceDelta?: number | undefined;
}>;
export type CreateProductVariantInput = z.infer<typeof createProductVariantSchema>;
export declare const bundleItemSchema: z.ZodObject<{
    componentProductId: z.ZodString;
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    componentProductId: string;
    quantity: number;
}, {
    componentProductId: string;
    quantity: number;
}>;
export type BundleItemInput = z.infer<typeof bundleItemSchema>;
export declare const setBundleItemsSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        componentProductId: z.ZodString;
        quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        componentProductId: string;
        quantity: number;
    }, {
        componentProductId: string;
        quantity: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        componentProductId: string;
        quantity: number;
    }[];
}, {
    items: {
        componentProductId: string;
        quantity: number;
    }[];
}>;
export type SetBundleItemsInput = z.infer<typeof setBundleItemsSchema>;
/** One row of a bulk product CSV/Excel import. */
export declare const productImportRowSchema: z.ZodObject<{
    sku: z.ZodString;
    barcode: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    categoryName: z.ZodOptional<z.ZodString>;
    costPrice: z.ZodNumber;
    retailPrice: z.ZodNumber;
    wholesalePrice: z.ZodOptional<z.ZodNumber>;
    taxRate: z.ZodDefault<z.ZodNumber>;
    unit: z.ZodDefault<z.ZodNativeEnum<{
        readonly PIECE: "PIECE";
        readonly KG: "KG";
        readonly GRAM: "GRAM";
        readonly LITRE: "LITRE";
        readonly ML: "ML";
        readonly DOZEN: "DOZEN";
        readonly BOX: "BOX";
        readonly CARTON: "CARTON";
        readonly METER: "METER";
        readonly PACK: "PACK";
    }>>;
    reorderLevel: z.ZodDefault<z.ZodNumber>;
    reorderQty: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    sku: string;
    name: string;
    costPrice: number;
    retailPrice: number;
    taxRate: number;
    unit: "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK";
    reorderLevel: number;
    reorderQty: number;
    barcode?: string | undefined;
    wholesalePrice?: number | undefined;
    categoryName?: string | undefined;
}, {
    sku: string;
    name: string;
    costPrice: number;
    retailPrice: number;
    barcode?: string | undefined;
    wholesalePrice?: number | undefined;
    taxRate?: number | undefined;
    unit?: "PIECE" | "KG" | "GRAM" | "LITRE" | "ML" | "DOZEN" | "BOX" | "CARTON" | "METER" | "PACK" | undefined;
    reorderLevel?: number | undefined;
    reorderQty?: number | undefined;
    categoryName?: string | undefined;
}>;
export type ProductImportRow = z.infer<typeof productImportRowSchema>;
