import { Role } from './enums';
/**
 * Static permission matrix: minimum role required per action key, i.e. each key's ROLE
 * DEFAULT. Both the NestJS PermissionsGuard and the Next.js UI (to hide/disable actions) read
 * this so "who can do what by default" is defined in exactly one place.
 *
 * A user's EFFECTIVE permission can differ from their role default via `User.permissionOverrides`
 * (see `resolveEffectivePermission` below) — e.g. a Cashier can be individually granted
 * `POS_VOID` without promoting them to Manager for everything else.
 */
export declare const PERMISSIONS: {
    readonly PRODUCT_VIEW: "STAFF";
    readonly PRODUCT_MANAGE: "MANAGER";
    readonly PRICE_OVERRIDE: "MANAGER";
    readonly POS_SELL: "CASHIER";
    readonly POS_DISCOUNT_OVERRIDE: "MANAGER";
    readonly POS_VOID: "MANAGER";
    readonly INVENTORY_ADJUST: "MANAGER";
    readonly PURCHASE_MANAGE: "MANAGER";
    readonly SUPPLIER_MANAGE: "MANAGER";
    readonly CUSTOMER_MANAGE: "CASHIER";
    readonly CUSTOMER_DELETE: "MANAGER";
    readonly CREDIT_MANAGE: "MANAGER";
    readonly CASH_SESSION_OPEN: "CASHIER";
    readonly CASH_RECONCILE: "MANAGER";
    readonly EXPENSE_CREATE: "STAFF";
    readonly EXPENSE_APPROVE: "ADMIN";
    readonly STAFF_MANAGE: "ADMIN";
    readonly REPORTS_VIEW: "MANAGER";
    readonly BRANCH_MANAGE: "ADMIN";
    readonly SETTINGS_MANAGE: "OWNER";
};
export type PermissionKey = keyof typeof PERMISSIONS;
export declare const PERMISSION_LABELS: Record<PermissionKey, {
    label: string;
    description: string;
}>;
export type PermissionOverrides = Partial<Record<PermissionKey, boolean>>;
/**
 * Single source of truth for "can this user do X" — an override wins over the role default.
 * Used identically by the backend PermissionsGuard and the frontend's hasPermission() helper,
 * so a granted/revoked override behaves the same in the UI as it's enforced by the API.
 */
export declare function resolveEffectivePermission(role: Role, overrides: PermissionOverrides | null | undefined, key: PermissionKey): boolean;
