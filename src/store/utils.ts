import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, AppState } from './types';
import type { Container } from '@/container';
import type { BaseQueryApi, BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import type { AxiosRequestConfig } from 'axios';

export type ThunkAPIConfig = BaseQueryApi & {
  abort: (reason: unknown) => void;
  dispatch: AppDispatch;
  extra: Container;
  getState: () => AppState;
};

type ThunkConfigType = {
  state: AppState;
  dispatch: AppDispatch;
  extra: Container;
};
export const createThunk = createAsyncThunk.withTypes<ThunkConfigType>();

export const createBaseQuery =
  <R = unknown>(): BaseQueryFn<AxiosRequestConfig, R> =>
  async (config, thunkApiArg) => {
    const thunkAPI = thunkApiArg as ThunkAPIConfig;
    const container = thunkAPI.extra;
    const transport = container.resolve('transport');

    try {
      const response = await transport(config);

      return {
        data: response.data,
      };
    } catch (error) {
      return {
        error: String(error),
      };
    }
  };

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;
