export const urls = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
  },
  home: '/',
};

export const ERROR_CODE = {
  UNKNOWN_ERROR: 'AE000',
  INTERNAL_SERVER_ERROR: 'AE001',
  BAD_REQUEST: 'AE002',
  USER_ALREADY_EXISTS: 'AE003',
  USER_NOT_FOUND: 'AE004',
  METHOD_NOT_ALLOWED: 'AE007',
} as const;

export type ApiErrorCode = (typeof ERROR_CODE)[keyof typeof ERROR_CODE];
