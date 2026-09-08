export interface PaginationQuery {
  page?: number;
  pageSize?: number;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiErrorBody {
  statusCode: number;
  message: string | string[];
  error?: string;
}

export interface AuthUser {
  id: string;
  organizationId: string;
  branchId: string | null;
  name: string;
  email: string;
  role: import('./enums').Role;
  permissionOverrides: Record<string, boolean> | null;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
