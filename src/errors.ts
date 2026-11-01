/** Thrown by API clients on any non-2xx response. Consumers branch on `instanceof ApiError`. */
export class ApiError extends Error {
  readonly statusCode: number;
  readonly code: string;

  constructor(status: number, code: string, message?: string) {
    super(message ?? code);
    this.name = 'ApiError';
    this.statusCode = status;
    this.code = code;
  }
}
