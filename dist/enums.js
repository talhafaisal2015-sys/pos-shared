"use strict";
/**
 * Single source of truth for string-literal enums shared between apps/api (Prisma enums
 * must use these exact values) and apps/web (which cannot import @prisma/client directly).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_HIERARCHY = exports.PurchaseReturnStatus = exports.CommunicationStatus = exports.CommunicationChannel = exports.IntegrationProvider = exports.ExpenseApprovalStatus = exports.CashSessionStatus = exports.CashMovementType = exports.CreditTransactionType = exports.PurchaseOrderStatus = exports.StockTransferStatus = exports.StockAdjustReason = exports.SaleStatus = exports.PaymentMethod = exports.CustomerGroup = exports.ProductStatus = exports.Unit = exports.BusinessType = exports.Role = void 0;
exports.Role = {
    OWNER: 'OWNER',
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    CASHIER: 'CASHIER',
    STAFF: 'STAFF',
};
exports.BusinessType = {
    GROCERY: 'GROCERY',
    PHARMACY: 'PHARMACY',
    APPAREL: 'APPAREL',
    ELECTRONICS: 'ELECTRONICS',
    HARDWARE: 'HARDWARE',
    BAKERY: 'BAKERY',
    GENERAL: 'GENERAL',
    OTHER: 'OTHER',
};
exports.Unit = {
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
};
exports.ProductStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    DISCONTINUED: 'DISCONTINUED',
};
exports.CustomerGroup = {
    RETAIL: 'RETAIL',
    WHOLESALE: 'WHOLESALE',
    VIP: 'VIP',
};
exports.PaymentMethod = {
    CASH: 'CASH',
    CARD: 'CARD',
    JAZZCASH: 'JAZZCASH',
    EASYPAISA: 'EASYPAISA',
    BANK_TRANSFER: 'BANK_TRANSFER',
    CREDIT: 'CREDIT',
};
exports.SaleStatus = {
    COMPLETED: 'COMPLETED',
    HELD: 'HELD',
    VOIDED: 'VOIDED',
    RETURNED: 'RETURNED',
    PARTIALLY_RETURNED: 'PARTIALLY_RETURNED',
};
exports.StockAdjustReason = {
    DAMAGE: 'DAMAGE',
    THEFT: 'THEFT',
    EXPIRY: 'EXPIRY',
    INTERNAL_USE: 'INTERNAL_USE',
    RECOUNT: 'RECOUNT',
    OTHER: 'OTHER',
};
exports.StockTransferStatus = {
    REQUESTED: 'REQUESTED',
    DISPATCHED: 'DISPATCHED',
    RECEIVED: 'RECEIVED',
    CANCELLED: 'CANCELLED',
};
exports.PurchaseOrderStatus = {
    DRAFT: 'DRAFT',
    SENT: 'SENT',
    PARTIAL: 'PARTIAL',
    RECEIVED: 'RECEIVED',
    CANCELLED: 'CANCELLED',
};
exports.CreditTransactionType = {
    SALE: 'SALE',
    PAYMENT: 'PAYMENT',
    ADJUSTMENT: 'ADJUSTMENT',
    LATE_FEE: 'LATE_FEE',
};
exports.CashMovementType = {
    CASH_IN: 'CASH_IN',
    CASH_OUT: 'CASH_OUT',
    WITHDRAWAL: 'WITHDRAWAL',
    PETTY_CASH_TOPUP: 'PETTY_CASH_TOPUP',
};
exports.CashSessionStatus = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED',
};
exports.ExpenseApprovalStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    NOT_REQUIRED: 'NOT_REQUIRED',
};
exports.IntegrationProvider = {
    FBR: 'FBR',
    JAZZCASH: 'JAZZCASH',
    EASYPAISA: 'EASYPAISA',
    WHATSAPP: 'WHATSAPP',
    SMS: 'SMS',
};
exports.CommunicationChannel = {
    SMS: 'SMS',
    WHATSAPP: 'WHATSAPP',
};
exports.CommunicationStatus = {
    SENT: 'SENT',
    FAILED: 'FAILED',
    PENDING: 'PENDING',
};
exports.PurchaseReturnStatus = {
    DRAFT: 'DRAFT',
    SENT: 'SENT',
    COMPLETED: 'COMPLETED',
};
/** Ordered weakest -> strongest; used by the RolesGuard permission matrix. */
exports.ROLE_HIERARCHY = [exports.Role.STAFF, exports.Role.CASHIER, exports.Role.MANAGER, exports.Role.ADMIN, exports.Role.OWNER];
