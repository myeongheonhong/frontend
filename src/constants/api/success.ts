import { ApiResponse } from '@/app/api/auth/type';

export const API_SUCCESS: Record<string, ApiResponse> = {
  SIGNUP_SUCCESS: {
    code: 'signup_success',
    message: '회원가입이 완료되었습니다.',
  },
};
