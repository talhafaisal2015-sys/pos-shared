import { Role, ROLE_HIERARCHY } from './enums';

/**
 * Static permission matrix: minimum role required per action key, i.e. each key's ROLE
 * DEFAULT. Both the NestJS PermissionsGuard and the Next.js UI (to hide/disable actions) read
 * this so "who can do what by default" is defined in exactly one place.
 *
 * A user's EFFECTIVE permission can differ from their role default via `User.permissionOverrides`
 * (see `resolveEffectivePermission` below) — e.g. a Cashier can be individually granted
 * `POS_VOID` without promoting them to Manager for everything else.
 */
export const PERMISSIONS = {
  // Products / catalog
  PRODUCT_VIEW: Role.STAFF,
  PRODUCT_MANAGE: Role.MANAGER,
  PRICE_OVERRIDE: Role.MANAGER,
  // POS
  POS_SELL: Role.CASHIER,
  POS_DISCOUNT_OVERRIDE: Role.MANAGER,
  POS_VOID: Role.MANAGER,
  // Inventory / purchases
  INVENTORY_ADJUST: Role.MANAGER,
  PURCHASE_MANAGE: Role.MANAGER,
  SUPPLIER_MANAGE: Role.MANAGER,
  // Customers / credits
  CUSTOMER_MANAGE: Role.CASHIER,
  CUSTOMER_DELETE: Role.MANAGER,
  CREDIT_MANAGE: Role.MANAGER,
  // Cash register
  CASH_SESSION_OPEN: Role.CASHIER,
  CASH_RECONCILE: Role.MANAGER,
  // Expenses
  EXPENSE_CREATE: Role.STAFF,
  EXPENSE_APPROVE: Role.ADMIN,
  // Staff
  STAFF_MANAGE: Role.ADMIN,
  // Reports / branches / settings
  REPORTS_VIEW: Role.MANAGER,
  BRANCH_MANAGE: Role.ADMIN,
  SETTINGS_MANAGE: Role.OWNER,
} as const;

export type PermissionKey = keyof typeof PERMISSIONS;

export const PERMISSION_LABELS: Record<PermissionKey, { label: string; description: string }> = {
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

export type PermissionOverrides = Partial<Record<PermissionKey, boolean>>;

/**
 * Single source of truth for "can this user do X" — an override wins over the role default.
 * Used identically by the backend PermissionsGuard and the frontend's hasPermission() helper,
 * so a granted/revoked override behaves the same in the UI as it's enforced by the API.
 */
export function resolveEffectivePermission(
  role: Role,
  overrides: PermissionOverrides | null | undefined,
  key: PermissionKey,
): boolean {
  const override = overrides?.[key];
  if (override !== undefined) return override;
  const minRole = PERMISSIONS[key];
  return ROLE_HIERARCHY.indexOf(role) >= ROLE_HIERARCHY.indexOf(minRole);
}
