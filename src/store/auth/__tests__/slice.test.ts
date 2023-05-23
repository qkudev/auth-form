import * as actions from '@/store/actions';

import { authSlice, initialState } from '../slice';

const emailPayload: AuthAPI.SignInPayload = {
  strategy: 'email',
  payload: {
    email: 'test@mail.com',
    password: 'Yop12677j1_',
  },
};

describe('authSlice', () => {
  it('actions.signIn.pending', () => {
    const nextState = authSlice.reducer(initialState, actions.signIn.pending('', emailPayload));

    expect(nextState).toEqual({
      ...initialState,
      loading: true,
      error: null,
      isLoggedIn: false,
    });
  });

  it('actions.signIn.fulfilled', () => {
    const nextState = authSlice.reducer(
      initialState,
      actions.signIn.fulfilled({ token: 'test-token' }, '', emailPayload),
    );

    expect(nextState).toEqual({
      ...initialState,
      loading: false,
      error: null,
      isLoggedIn: true,
    });
  });

  it('signUp.pending', () => {
    const nextState = authSlice.reducer(initialState, actions.signUp.pending('', emailPayload));

    expect(nextState).toEqual({
      ...initialState,
      loading: true,
      error: null,
      isLoggedIn: false,
    });
  });

  it('actions.signUp.fulfilled', () => {
    const nextState = authSlice.reducer(
      initialState,
      actions.signUp.fulfilled({ token: 'test-token' }, '', emailPayload),
    );

    expect(nextState).toEqual({
      ...initialState,
      loading: false,
      error: null,
      isLoggedIn: true,
    });
  });
});
