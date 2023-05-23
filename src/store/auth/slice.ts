import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from './types';
import { signIn, signUp, signOut } from '../actions';

export const initialState: AuthState = {
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const initRequest = (state: AuthState) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    };

    const onError = (state: AuthState, action: ReturnType<typeof signIn.rejected>) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = action.error;
    };

    const onSuccess = (state: AuthState) => {
      state.loading = false;
      state.error = null;
      state.isLoggedIn = true;
    };

    const onSignOut = () => ({
      ...initialState,
    });

    builder
      .addCase(signIn.pending, initRequest)
      .addCase(signIn.rejected, onError)
      .addCase(signIn.fulfilled, onSuccess)

      .addCase(signUp.pending, initRequest)
      .addCase(signUp.rejected, onError)
      .addCase(signUp.fulfilled, onSuccess)

      .addCase(signOut.pending, onSignOut);
  },
});
