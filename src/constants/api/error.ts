import { ApiErrorResponse } from '@/app/api/auth/type';

export const API_ERROR: Record<string, ApiErrorResponse> = {
  SERVER_ERROR: {
    code: 'SERVER_ERROR',
    message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  },
};

export const SUPABASE_ERROR_CODE: Record<string, ApiErrorResponse> = {
  OVER_EMAIL_SEND_RATE_LIMIT: {
    code: 'over_email_send_rate_limit',
    message: '이메일 전송 횟수가 초과되었습니다.',
  },
  SUPABASE_EMAIL_ADDRESS_INVALID: {
    code: 'email_address_invalid',
    message: '올바른 이메일 형식이 아닙니다.',
  },
  SUPABASE_EMAIL_EXISTS: {
    code: 'email_exists',
    message: '이미 가입된 이메일입니다.',
  },
  SUPABASE_WEAK_PASSWORD: {
    code: 'weak_password',
    message: '비밀번호는 6자 이상이어야 합니다.',
  },
};
