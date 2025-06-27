export type ApiResponse<T = unknown> = {
  data?: T;
  code: string;
  message?: string;
};

export interface ApiErrorResponse {
  code: string;
  message: string;
}
