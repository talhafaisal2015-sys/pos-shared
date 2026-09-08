/**
 * Single source of truth for string-literal enums shared between apps/api (Prisma enums
 * must use these exact values) and apps/web (which cannot import @prisma/client directly).
 */
export declare const Role: {
    readonly OWNER: "OWNER";
    readonly ADMIN: "ADMIN";
    readonly MANAGER: "MANAGER";
    readonly CASHIER: "CASHIER";
    readonly STAFF: "STAFF";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const BusinessType: {
    readonly GROCERY: "GROCERY";
    readonly PHARMACY: "PHARMACY";
    readonly APPAREL: "APPAREL";
    readonly ELECTRONICS: "ELECTRONICS";
    readonly HARDWARE: "HARDWARE";
    readonly BAKERY: "BAKERY";
    readonly GENERAL: "GENERAL";
    readonly OTHER: "OTHER";
};
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType];
export declare const Unit: {
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
};
export type Unit = (typeof Unit)[keyof typeof Unit];
export declare const ProductStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly DISCONTINUED: "DISCONTINUED";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const CustomerGroup: {
    readonly RETAIL: "RETAIL";
    readonly WHOLESALE: "WHOLESALE";
    readonly VIP: "VIP";
};
export type CustomerGroup = (typeof CustomerGroup)[keyof typeof CustomerGroup];
export declare const PaymentMethod: {
    readonly CASH: "CASH";
    readonly CARD: "CARD";
    readonly JAZZCASH: "JAZZCASH";
    readonly EASYPAISA: "EASYPAISA";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
    readonly CREDIT: "CREDIT";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const SaleStatus: {
    readonly COMPLETED: "COMPLETED";
    readonly HELD: "HELD";
    readonly VOIDED: "VOIDED";
    readonly RETURNED: "RETURNED";
    readonly PARTIALLY_RETURNED: "PARTIALLY_RETURNED";
};
export type SaleStatus = (typeof SaleStatus)[keyof typeof SaleStatus];
export declare const StockAdjustReason: {
    readonly DAMAGE: "DAMAGE";
    readonly THEFT: "THEFT";
    readonly EXPIRY: "EXPIRY";
    readonly INTERNAL_USE: "INTERNAL_USE";
    readonly RECOUNT: "RECOUNT";
    readonly OTHER: "OTHER";
};
export type StockAdjustReason = (typeof StockAdjustReason)[keyof typeof StockAdjustReason];
export declare const StockTransferStatus: {
    readonly REQUESTED: "REQUESTED";
    readonly DISPATCHED: "DISPATCHED";
    readonly RECEIVED: "RECEIVED";
    readonly CANCELLED: "CANCELLED";
};
export type StockTransferStatus = (typeof StockTransferStatus)[keyof typeof StockTransferStatus];
export declare const PurchaseOrderStatus: {
    readonly DRAFT: "DRAFT";
    readonly SENT: "SENT";
    readonly PARTIAL: "PARTIAL";
    readonly RECEIVED: "RECEIVED";
    readonly CANCELLED: "CANCELLED";
};
export type PurchaseOrderStatus = (typeof PurchaseOrderStatus)[keyof typeof PurchaseOrderStatus];
export declare const CreditTransactionType: {
    readonly SALE: "SALE";
    readonly PAYMENT: "PAYMENT";
    readonly ADJUSTMENT: "ADJUSTMENT";
    readonly LATE_FEE: "LATE_FEE";
};
export type CreditTransactionType = (typeof CreditTransactionType)[keyof typeof CreditTransactionType];
export declare const CashMovementType: {
    readonly CASH_IN: "CASH_IN";
    readonly CASH_OUT: "CASH_OUT";
    readonly WITHDRAWAL: "WITHDRAWAL";
    readonly PETTY_CASH_TOPUP: "PETTY_CASH_TOPUP";
};
export type CashMovementType = (typeof CashMovementType)[keyof typeof CashMovementType];
export declare const CashSessionStatus: {
    readonly OPEN: "OPEN";
    readonly CLOSED: "CLOSED";
};
export type CashSessionStatus = (typeof CashSessionStatus)[keyof typeof CashSessionStatus];
export declare const ExpenseApprovalStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly NOT_REQUIRED: "NOT_REQUIRED";
};
export type ExpenseApprovalStatus = (typeof ExpenseApprovalStatus)[keyof typeof ExpenseApprovalStatus];
export declare const IntegrationProvider: {
    readonly FBR: "FBR";
    readonly JAZZCASH: "JAZZCASH";
    readonly EASYPAISA: "EASYPAISA";
    readonly WHATSAPP: "WHATSAPP";
    readonly SMS: "SMS";
};
export type IntegrationProvider = (typeof IntegrationProvider)[keyof typeof IntegrationProvider];
export declare const CommunicationChannel: {
    readonly SMS: "SMS";
    readonly WHATSAPP: "WHATSAPP";
};
export type CommunicationChannel = (typeof CommunicationChannel)[keyof typeof CommunicationChannel];
export declare const CommunicationStatus: {
    readonly SENT: "SENT";
    readonly FAILED: "FAILED";
    readonly PENDING: "PENDING";
};
export type CommunicationStatus = (typeof CommunicationStatus)[keyof typeof CommunicationStatus];
export declare const PurchaseReturnStatus: {
    readonly DRAFT: "DRAFT";
    readonly SENT: "SENT";
    readonly COMPLETED: "COMPLETED";
};
export type PurchaseReturnStatus = (typeof PurchaseReturnStatus)[keyof typeof PurchaseReturnStatus];
/** Ordered weakest -> strongest; used by the RolesGuard permission matrix. */
export declare const ROLE_HIERARCHY: Role[];
