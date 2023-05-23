import { AxiosError } from 'axios';
import Router from 'next/router';

import { ERROR_CODE, urls } from '@/utils/constants';

import { createThunk } from './utils';

const onLogin = () => {
  Router.push(urls.home);
};

const isServerError = (e: unknown): e is AxiosError<ApiErrorResponse, unknown> =>
  e instanceof AxiosError && e.response?.data?.success === false;

const serializeError = (e: unknown) => {
  if (isServerError(e)) {
    return e.response!.data.error;
  }

  return {
    code: ERROR_CODE.UNKNOWN_ERROR,
    message: 'Unknown error',
  };
};

export const signIn = createThunk<AuthAPI.SignInResponse, AuthAPI.SignInPayload>(
  'SIGN_IN',
  async (data, thunkAPI) => {
    const container = thunkAPI.extra;
    const transport = container.resolve('transport');
    const { strategy, payload } = data;
    let token: Nullable<AuthAPI.JWT> = null;

    switch (strategy) {
      case 'email': {
        const res = await transport.request<ApiSuccessResponse<AuthAPI.SignInResponse>>({
          url: '/api/auth/sign-in/email',
          method: 'POST',
          data: payload,
        });

        token = res.data.data.token;
        break;
      }
      default: {
        throw new Error('Unsupported strategy');
      }
    }

    if (!token) {
      throw new Error('Unsupported authentication strategy');
    }

    const logger = thunkAPI.extra.resolve('logger');
    logger.logEvent({
      type: 'sign-in',
      params: {
        strategy,
      },
    });

    onLogin();

    return thunkAPI.fulfillWithValue({
      token,
    });
  },
  {
    serializeError,
  },
);

export const signUp = createThunk<AuthAPI.SignUpResponse, AuthAPI.SignUpPayload>(
  'SIGN_UP',
  async (data, thunkAPI) => {
    const container = thunkAPI.extra;
    const transport = container.resolve('transport');
    const { strategy, payload } = data;
    let token: Nullable<AuthAPI.JWT> = null;

    switch (strategy) {
      case 'email': {
        const res = await transport.request<ApiSuccessResponse<AuthAPI.SignUpResponse>>({
          url: '/api/auth/sign-up/email',
          method: 'POST',
          data: payload,
        });

        token = res.data.data.token;
        break;
      }
      default: {
        throw new Error('Unsupported strategy');
      }
    }

    if (!token) {
      throw new Error('Unsupported strategy');
    }

    const logger = thunkAPI.extra.resolve('logger');
    logger.logEvent({
      type: 'sign-up',
      params: {
        strategy,
      },
    });

    onLogin();

    return {
      token,
    };
  },
  {
    serializeError,
  },
);

export const signOut = createThunk(
  'SIGN_OUT',
  async (_, thunkAPI) => {
    const container = thunkAPI.extra;
    const transport = container.resolve('transport');

    await transport.request<AuthAPI.SignInResponse>({
      url: '/api/auth/sign-out',
      method: 'POST',
    });

    const logger = thunkAPI.extra.resolve('logger');
    logger.logEvent({
      type: 'sign-out',
    });

    Router.push(urls.auth.signIn);
  },
  {
    serializeError,
  },
);
