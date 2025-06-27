export const COMMON_VALIDATION = {
  REQUIRED: {
    code: 'REQUIRED',
    message: (field: string) => `${field}는(은) 필수 입력 항목입니다.`,
  },
  INVALID_FORMAT: {
    code: 'INVALID_FORMAT',
    message: '올바른 형식이 아닙니다.',
  },
};
