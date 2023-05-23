import type { SerializedError } from '@reduxjs/toolkit';

export interface AuthState {
  loading: boolean;
  error: Nullable<SerializedError>;
  isLoggedIn: boolean;
}
