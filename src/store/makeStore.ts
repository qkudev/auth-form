import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { initialState as authInitialState, authSlice } from './auth';

import type { Container } from '@/container';

export const makeStore = (container: Container, isAuthorized = false) => {
  const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
  });
  const getPreloadedState = (isLoggedIn: boolean) => ({
    auth: {
      ...authInitialState,
      isLoggedIn,
    },
  });

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: getPreloadedState(isAuthorized),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: container,
        },
      }),
  });

  return store;
};
