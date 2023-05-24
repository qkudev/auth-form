import { createTestContainer } from '@/test-utils';

import { signIn, signOut, signUp } from '../actions';

const testToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

let container: ReturnType<typeof createTestContainer>;
beforeEach(() => {
  container = createTestContainer();
});

describe('signIn', () => {
  it('should sign in user', async () => {
    const transportMock = container.resolve('transportMock');
    transportMock.onPost('/api/auth/sign-in/email').reply(201, {
      success: true,
      data: {
        token: testToken,
      },
    });

    const store = container.resolve('store');
    await store.dispatch(
      signIn({
        strategy: 'email',
        payload: {
          email: 'test@mail.com',
          password: 'test-password',
        },
      }),
    );

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(true);

    const logger = container.resolve('logger');
    expect(logger.logEvent).toHaveBeenCalledWith({
      type: 'sign-in',
      params: {
        strategy: 'email',
      },
    });
  });

  it('should log error', async () => {
    const transportMock = container.resolve('transportMock');
    transportMock.onPost('/api/auth/sign-in/email').reply(400, {
      success: false,
      error: {
        code: 'AE001',
        message: 'Bad payload',
      },
    });

    const store = container.resolve('store');
    await store.dispatch(
      signIn({
        strategy: 'email',
        payload: {
          email: 'test@mail.com',
          password: 'test-password',
        },
      }),
    );

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);
  });
});

describe('signUp', () => {
  it('should sign up user', async () => {
    const transportMock = container.resolve('transportMock');
    transportMock.onPost('/api/auth/sign-up/email').reply(201, {
      success: true,
      data: {
        token: testToken,
      },
    });

    const store = container.resolve('store');
    await store.dispatch(
      signUp({
        strategy: 'email',
        payload: {
          email: 'test@mail.com',
          password: 'test-password',
        },
      }),
    );

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(true);

    const logger = container.resolve('logger');
    expect(logger.logEvent).toHaveBeenCalledWith({
      type: 'sign-up',
      params: {
        strategy: 'email',
      },
    });
  });

  it('should log error', async () => {
    const transportMock = container.resolve('transportMock');
    transportMock.onPost('/api/auth/sign-in/email').reply(400, {
      success: false,
      error: {
        code: 'AE001',
        message: 'Bad payload',
      },
    });

    const store = container.resolve('store');
    await store.dispatch(
      signUp({
        strategy: 'email',
        payload: {
          email: 'test@mail.com',
          password: 'test-password',
        },
      }),
    );

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);
  });
});

describe('signOut', () => {
  it('should sign out user', async () => {
    const transportMock = container.resolve('transportMock');
    transportMock.onPost('/api/auth/sign-out').reply(201);

    const store = container.resolve('store');
    await store.dispatch(signOut());

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);

    const logger = container.resolve('logger');
    expect(logger.logEvent).toHaveBeenCalledWith({
      type: 'sign-out',
    });
  });

  it('should handle error and sign out', async () => {
    const transportMock = container.resolve('transportMock');
    transportMock.onPost('/api/auth/sign-in/email').reply(400, {
      success: false,
      error: {
        code: 'AE001',
        message: 'Bad payload',
      },
    });

    const store = container.resolve('store');
    await store.dispatch(signOut());

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);
  });
});
