/**
 * Single source of truth for string-literal enums shared between apps/api (Prisma enums
 * must use these exact values) and apps/web (which cannot import @prisma/client directly).
 */

export const Role = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  CASHIER: 'CASHIER',
  STAFF: 'STAFF',
} as const;
export type Role = (typeof Role)[keyof typeof Role];

export const BusinessType = {
  GROCERY: 'GROCERY',
  PHARMACY: 'PHARMACY',
  APPAREL: 'APPAREL',
  ELECTRONICS: 'ELECTRONICS',
  HARDWARE: 'HARDWARE',
  BAKERY: 'BAKERY',
  GENERAL: 'GENERAL',
  OTHER: 'OTHER',
} as const;
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType];

export const Unit = {
  PIECE: 'PIECE',
  KG: 'KG',
  GRAM: 'GRAM',
  LITRE: 'LITRE',
  ML: 'ML',
  DOZEN: 'DOZEN',
  BOX: 'BOX',
  CARTON: 'CARTON',
  METER: 'METER',
  PACK: 'PACK',
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit];

export const ProductStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DISCONTINUED: 'DISCONTINUED',
} as const;
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];

export const CustomerGroup = {
  RETAIL: 'RETAIL',
  WHOLESALE: 'WHOLESALE',
  VIP: 'VIP',
} as const;
export type CustomerGroup = (typeof CustomerGroup)[keyof typeof CustomerGroup];

export const PaymentMethod = {
  CASH: 'CASH',
  CARD: 'CARD',
  JAZZCASH: 'JAZZCASH',
  EASYPAISA: 'EASYPAISA',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CREDIT: 'CREDIT',
} as const;
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];

export const SaleStatus = {
  COMPLETED: 'COMPLETED',
  HELD: 'HELD',
  VOIDED: 'VOIDED',
  RETURNED: 'RETURNED',
  PARTIALLY_RETURNED: 'PARTIALLY_RETURNED',
} as const;
export type SaleStatus = (typeof SaleStatus)[keyof typeof SaleStatus];

export const StockAdjustReason = {
  DAMAGE: 'DAMAGE',
  THEFT: 'THEFT',
  EXPIRY: 'EXPIRY',
  INTERNAL_USE: 'INTERNAL_USE',
  RECOUNT: 'RECOUNT',
  OTHER: 'OTHER',
} as const;
export type StockAdjustReason = (typeof StockAdjustReason)[keyof typeof StockAdjustReason];

export const StockTransferStatus = {
  REQUESTED: 'REQUESTED',
  DISPATCHED: 'DISPATCHED',
  RECEIVED: 'RECEIVED',
  CANCELLED: 'CANCELLED',
} as const;
export type StockTransferStatus = (typeof StockTransferStatus)[keyof typeof StockTransferStatus];

export const PurchaseOrderStatus = {
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  PARTIAL: 'PARTIAL',
  RECEIVED: 'RECEIVED',
  CANCELLED: 'CANCELLED',
} as const;
export type PurchaseOrderStatus = (typeof PurchaseOrderStatus)[keyof typeof PurchaseOrderStatus];

export const CreditTransactionType = {
  SALE: 'SALE',
  PAYMENT: 'PAYMENT',
  ADJUSTMENT: 'ADJUSTMENT',
  LATE_FEE: 'LATE_FEE',
} as const;
export type CreditTransactionType = (typeof CreditTransactionType)[keyof typeof CreditTransactionType];

export const CashMovementType = {
  CASH_IN: 'CASH_IN',
  CASH_OUT: 'CASH_OUT',
  WITHDRAWAL: 'WITHDRAWAL',
  PETTY_CASH_TOPUP: 'PETTY_CASH_TOPUP',
} as const;
export type CashMovementType = (typeof CashMovementType)[keyof typeof CashMovementType];

export const CashSessionStatus = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
} as const;
export type CashSessionStatus = (typeof CashSessionStatus)[keyof typeof CashSessionStatus];

export const ExpenseApprovalStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  NOT_REQUIRED: 'NOT_REQUIRED',
} as const;
export type ExpenseApprovalStatus = (typeof ExpenseApprovalStatus)[keyof typeof ExpenseApprovalStatus];

export const IntegrationProvider = {
  FBR: 'FBR',
  JAZZCASH: 'JAZZCASH',
  EASYPAISA: 'EASYPAISA',
  WHATSAPP: 'WHATSAPP',
  SMS: 'SMS',
} as const;
export type IntegrationProvider = (typeof IntegrationProvider)[keyof typeof IntegrationProvider];

export const CommunicationChannel = {
  SMS: 'SMS',
  WHATSAPP: 'WHATSAPP',
} as const;
export type CommunicationChannel = (typeof CommunicationChannel)[keyof typeof CommunicationChannel];

export const CommunicationStatus = {
  SENT: 'SENT',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
} as const;
export type CommunicationStatus = (typeof CommunicationStatus)[keyof typeof CommunicationStatus];

export const PurchaseReturnStatus = {
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  COMPLETED: 'COMPLETED',
} as const;
export type PurchaseReturnStatus = (typeof PurchaseReturnStatus)[keyof typeof PurchaseReturnStatus];

/** Ordered weakest -> strongest; used by the RolesGuard permission matrix. */
export const ROLE_HIERARCHY: Role[] = [Role.STAFF, Role.CASHIER, Role.MANAGER, Role.ADMIN, Role.OWNER];
