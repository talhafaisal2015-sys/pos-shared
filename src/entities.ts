import type {
  BusinessType,
  CashMovementType,
  CashSessionStatus,
  CommunicationChannel,
  CommunicationStatus,
  CreditTransactionType,
  CustomerGroup,
  ExpenseApprovalStatus,
  IntegrationProvider,
  PaymentMethod,
  ProductStatus,
  PurchaseOrderStatus,
  PurchaseReturnStatus,
  Role,
  SaleStatus,
  StockAdjustReason,
  StockTransferStatus,
  Unit,
} from './enums';

/**
 * Wire-shape response types. Decimal DB columns serialize to JSON strings (Prisma's
 * Decimal#toJSON), so money/quantity fields are typed `string` here — convert with
 * Number(...) or the formatCurrency helper before doing arithmetic or display formatting.
 */

export interface Organization {
  id: string;
  name: string;
  businessType: BusinessType;
  logoUrl: string | null;
  address: string | null;
  ntn: string | null;
  phone: string | null;
  email: string | null;
  currency: string;
  isSuspended: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OrganizationWithCounts extends Organization {
  _count: { users: number; products: number; branches: number };
}

export interface PlatformAdminAccount {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: string;
}

export interface Branch {
  id: string;
  organizationId: string;
  name: string;
  address: string | null;
  phone: string | null;
  managerId: string | null;
  manager?: { id: string; name: string } | null;
  isActive: boolean;
  staffCount?: number;
  todaySales?: number;
  openingCashBalance: string;
  openingCashAsOf: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: Role;
  branchId: string | null;
  salary: string | null;
  cnic: string | null;
  address: string | null;
  hireDate: string | null;
  notes: string | null;
  isActive: boolean;
  lastLoginAt: string | null;
  createdAt: string;
  permissionOverrides: Record<string, boolean> | null;
}

export interface Category {
  id: string;
  organizationId: string;
  parentId: string | null;
  name: string;
  color: string | null;
  icon: string | null;
  productCount?: number;
  childCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  name: string;
  sku: string | null;
  barcode: string | null;
  priceDelta: string;
}

export interface BundleItem {
  id: string;
  bundleProductId: string;
  componentProductId: string;
  quantity: string;
  componentProduct?: Product;
}

export interface Product {
  id: string;
  organizationId: string;
  categoryId: string | null;
  category?: Category | null;
  sku: string;
  barcode: string | null;
  name: string;
  description: string | null;
  imageUrl: string | null;
  costPrice: string;
  retailPrice: string;
  wholesalePrice: string | null;
  taxRate: string;
  unit: Unit;
  unitConversionFactor: string;
  baseUnit: Unit | null;
  reorderLevel: string;
  reorderQty: string;
  status: ProductStatus;
  isBundle: boolean;
  variants?: ProductVariant[];
  bundleItems?: BundleItem[];
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedProducts {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
}

export interface Supplier {
  id: string;
  organizationId: string;
  name: string;
  contactPerson: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  ntn: string | null;
  cnic: string | null;
  bankDetails: string | null;
  notes: string | null;
  rating: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  organizationId: string;
  name: string;
  phone: string | null;
  address: string | null;
  cnic: string | null;
  group: CustomerGroup;
  creditLimit: string;
  creditBalance: string;
  loyaltyPoints: number;
  createdAt: string;
  updatedAt: string;
}

export interface StockItem {
  id: string;
  productId: string;
  branchId: string;
  quantity: string;
  updatedAt: string;
  product: Product;
  branch: Branch;
}

export interface StockAdjustment {
  id: string;
  organizationId: string;
  productId: string;
  branchId: string;
  quantityDelta: string;
  reason: StockAdjustReason;
  notes: string | null;
  userId: string;
  createdAt: string;
  product?: Product;
  branch?: Branch;
  user?: { id: string; name: string };
}

export interface StockBatch {
  id: string;
  productId: string;
  branchId: string;
  batchNo: string;
  expiryDate: string | null;
  quantity: string;
  costPrice: string;
  createdAt: string;
}

export interface StockTransferItem {
  id: string;
  transferId: string;
  productId: string;
  quantity: string;
}

export interface SaleItem {
  id: string;
  saleId: string;
  productId: string;
  product?: Product;
  quantity: string;
  unitPrice: string;
  discount: string;
  taxRate: string;
  lineTotal: string;
}

export interface SalePayment {
  id: string;
  saleId: string;
  method: PaymentMethod;
  amount: string;
}

export interface SaleReturnItem {
  id: string;
  saleReturnId: string;
  productId: string;
  quantity: string;
}

export interface SaleReturn {
  id: string;
  saleId: string;
  reason: string | null;
  refundMethod: PaymentMethod;
  amount: string;
  createdAt: string;
  items: SaleReturnItem[];
}

export interface Sale {
  id: string;
  organizationId: string;
  branchId: string;
  branch?: Branch;
  customerId: string | null;
  customer?: Customer | null;
  staffId: string;
  staff?: { id: string; name: string };
  invoiceNo: string;
  status: SaleStatus;
  subtotal: string;
  discountTotal: string;
  taxTotal: string;
  total: string;
  heldAt: string | null;
  voidReason: string | null;
  fbrInvoiceNo: string | null;
  qrCode: string | null;
  createdAt: string;
  updatedAt: string;
  items: SaleItem[];
  payments: SalePayment[];
  returns?: SaleReturn[];
}

export interface CashMovement {
  id: string;
  sessionId: string;
  type: CashMovementType;
  amount: string;
  reason: string | null;
  userId: string;
  user?: { id: string; name: string };
  createdAt: string;
}

export interface CashRegisterSession {
  id: string;
  organizationId: string;
  branchId: string;
  branch?: Branch;
  userId: string;
  user?: { id: string; name: string };
  openingBalance: string;
  closingBalance: string | null;
  expectedBalance: string | null;
  variance: string | null;
  denominationBreakdown: Record<string, number> | null;
  status: CashSessionStatus;
  openedAt: string;
  closedAt: string | null;
  movements?: CashMovement[];
}

export interface Settings {
  id: string;
  organizationId: string;
  taxConfig: Record<string, unknown> | null;
  receiptConfig: Record<string, unknown> | null;
  printerConfig: Record<string, unknown> | null;
  fbrConfig: Record<string, unknown> | null;
  paymentMethodsEnabled: Record<string, boolean> | null;
  language: string;
  lastBackupAt: string | null;
  updatedAt: string;
}

export interface IntegrationCredentialStatus {
  provider: IntegrationProvider;
  isEnabled: boolean;
  configuredKeys: string[];
  updatedAt: string | null;
}

export interface CommunicationLog {
  id: string;
  organizationId: string;
  customerId: string | null;
  channel: CommunicationChannel;
  message: string;
  status: CommunicationStatus;
  sentAt: string | null;
  createdAt: string;
}

export interface ExpenseCategory {
  id: string;
  organizationId: string;
  name: string;
}

export interface Expense {
  id: string;
  organizationId: string;
  branchId: string | null;
  branch?: Branch | null;
  categoryId: string;
  category?: ExpenseCategory;
  amount: string;
  paymentMethod: PaymentMethod;
  description: string | null;
  receiptImageUrl: string | null;
  isRecurring: boolean;
  recurrenceRule: string | null;
  isPettyCash: boolean;
  approvalStatus: ExpenseApprovalStatus;
  createdById: string;
  createdBy?: { id: string; name: string };
  approvedById: string | null;
  approvedBy?: { id: string; name: string } | null;
  createdAt: string;
  updatedAt: string;
}

export interface Attendance {
  id: string;
  userId: string;
  user?: { id: string; name: string };
  branchId: string;
  branch?: Branch;
  clockIn: string;
  clockOut: string | null;
  date: string;
}

export interface Shift {
  id: string;
  userId: string;
  user?: { id: string; name: string };
  branchId: string;
  branch?: Branch;
  startTime: string;
  endTime: string;
}

export interface AuditLog {
  id: string;
  organizationId: string;
  userId: string | null;
  user?: { id: string; name: string } | null;
  platformAdminId: string | null;
  platformAdmin?: { id: string; name: string } | null;
  action: string;
  entityType: string;
  entityId: string;
  meta: Record<string, unknown> | null;
  createdAt: string;
}

export interface CreditTransaction {
  id: string;
  customerId: string;
  type: CreditTransactionType;
  amount: string;
  balanceAfter: string;
  referenceSaleId: string | null;
  notes: string | null;
  userId: string;
  user?: { id: string; name: string };
  createdAt: string;
}

export interface PurchaseOrderItem {
  id: string;
  purchaseOrderId: string;
  productId: string;
  product?: Product;
  quantity: string;
  unitCost: string;
  receivedQty: string;
}

export interface GrnItem {
  id: string;
  grnId: string;
  productId: string;
  product?: Product;
  quantity: string;
  batchNo: string | null;
  expiryDate: string | null;
}

export interface GoodsReceivedNote {
  id: string;
  purchaseOrderId: string;
  receivedAt: string;
  invoiceImageUrl: string | null;
  notes: string | null;
  items: GrnItem[];
}

export interface PurchaseReturnItem {
  id: string;
  purchaseReturnId: string;
  productId: string;
  product?: Product;
  quantity: string;
}

export interface PurchaseReturn {
  id: string;
  purchaseOrderId: string;
  status: PurchaseReturnStatus;
  reason: string | null;
  createdAt: string;
  items: PurchaseReturnItem[];
}

export interface PurchaseOrder {
  id: string;
  organizationId: string;
  branchId: string;
  branch?: Branch;
  supplierId: string;
  supplier?: Supplier;
  poNumber: string;
  status: PurchaseOrderStatus;
  expectedDate: string | null;
  invoiceImageUrl: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  items: PurchaseOrderItem[];
  grns?: GoodsReceivedNote[];
  returns?: PurchaseReturn[];
}

export interface StockTransfer {
  id: string;
  organizationId: string;
  fromBranchId: string;
  toBranchId: string;
  status: StockTransferStatus;
  requestedById: string;
  dispatchedAt: string | null;
  receivedAt: string | null;
  createdAt: string;
  items: StockTransferItem[];
  fromBranch?: Branch;
  toBranch?: Branch;
}
