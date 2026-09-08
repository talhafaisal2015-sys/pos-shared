"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSION_LABELS = exports.PERMISSIONS = void 0;
exports.resolveEffectivePermission = resolveEffectivePermission;
const enums_1 = require("./enums");
/**
 * Static permission matrix: minimum role required per action key, i.e. each key's ROLE
 * DEFAULT. Both the NestJS PermissionsGuard and the Next.js UI (to hide/disable actions) read
 * this so "who can do what by default" is defined in exactly one place.
 *
 * A user's EFFECTIVE permission can differ from their role default via `User.permissionOverrides`
 * (see `resolveEffectivePermission` below) — e.g. a Cashier can be individually granted
 * `POS_VOID` without promoting them to Manager for everything else.
 */
exports.PERMISSIONS = {
    // Products / catalog
    PRODUCT_VIEW: enums_1.Role.STAFF,
    PRODUCT_MANAGE: enums_1.Role.MANAGER,
    PRICE_OVERRIDE: enums_1.Role.MANAGER,
    // POS
    POS_SELL: enums_1.Role.CASHIER,
    POS_DISCOUNT_OVERRIDE: enums_1.Role.MANAGER,
    POS_VOID: enums_1.Role.MANAGER,
    // Inventory / purchases
    INVENTORY_ADJUST: enums_1.Role.MANAGER,
    PURCHASE_MANAGE: enums_1.Role.MANAGER,
    SUPPLIER_MANAGE: enums_1.Role.MANAGER,
    // Customers / credits
    CUSTOMER_MANAGE: enums_1.Role.CASHIER,
    CUSTOMER_DELETE: enums_1.Role.MANAGER,
    CREDIT_MANAGE: enums_1.Role.MANAGER,
    // Cash register
    CASH_SESSION_OPEN: enums_1.Role.CASHIER,
    CASH_RECONCILE: enums_1.Role.MANAGER,
    // Expenses
    EXPENSE_CREATE: enums_1.Role.STAFF,
    EXPENSE_APPROVE: enums_1.Role.ADMIN,
    // Staff
    STAFF_MANAGE: enums_1.Role.ADMIN,
    // Reports / branches / settings
    REPORTS_VIEW: enums_1.Role.MANAGER,
    BRANCH_MANAGE: enums_1.Role.ADMIN,
    SETTINGS_MANAGE: enums_1.Role.OWNER,
};
exports.PERMISSION_LABELS = {
    PRODUCT_VIEW: { label: 'View products', description: 'Browse the product catalog' },
    PRODUCT_MANAGE: { label: 'Manage products', description: 'Create, edit, and discontinue products and categories' },
    PRICE_OVERRIDE: { label: 'Override prices', description: 'Change cost/retail prices on products' },
    POS_SELL: { label: 'Use POS', description: 'Ring up sales at the checkout screen' },
    POS_DISCOUNT_OVERRIDE: { label: 'Apply discounts', description: 'Apply per-item or invoice-level discounts at checkout' },
    POS_VOID: { label: 'Void sales', description: 'Void a completed sale and process returns' },
    INVENTORY_ADJUST: { label: 'Adjust inventory', description: 'Record stock adjustments, batches, and transfers' },
    PURCHASE_MANAGE: { label: 'Manage purchases', description: 'Create purchase orders and receive goods' },
    SUPPLIER_MANAGE: { label: 'Manage suppliers', description: 'Add, edit, and remove suppliers' },
    CUSTOMER_MANAGE: { label: 'Manage customers', description: 'Add and edit customer profiles' },
    CUSTOMER_DELETE: { label: 'Delete customers', description: 'Permanently remove a customer record' },
    CREDIT_MANAGE: { label: 'Manage credit (Udhaar)', description: 'Record credit adjustments beyond payments' },
    CASH_SESSION_OPEN: { label: 'Open cash register', description: 'Open a shift and log cash in/out' },
    CASH_RECONCILE: { label: 'Reconcile cash register', description: 'Close a shift and confirm the counted balance' },
    EXPENSE_CREATE: { label: 'Log expenses', description: 'Submit new expenses' },
    EXPENSE_APPROVE: { label: 'Approve expenses', description: 'Approve or reject submitted expenses' },
    STAFF_MANAGE: { label: 'View staff area', description: 'See the Staff page (profiles, attendance, performance, activity log) — staff accounts and permissions are managed from the Platform Admin portal' },
    REPORTS_VIEW: { label: 'View reports', description: 'Access sales, inventory, and financial reports' },
    BRANCH_MANAGE: { label: 'Manage branches', description: 'Add and edit business locations' },
    SETTINGS_MANAGE: { label: 'Manage settings', description: 'Change business profile, tax, and integration settings' },
};
/**
 * Single source of truth for "can this user do X" — an override wins over the role default.
 * Used identically by the backend PermissionsGuard and the frontend's hasPermission() helper,
 * so a granted/revoked override behaves the same in the UI as it's enforced by the API.
 */
function resolveEffectivePermission(role, overrides, key) {
    const override = overrides?.[key];
    if (override !== undefined)
        return override;
    const minRole = exports.PERMISSIONS[key];
    return enums_1.ROLE_HIERARCHY.indexOf(role) >= enums_1.ROLE_HIERARCHY.indexOf(minRole);
}
