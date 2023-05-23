/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAppSelector } from '@/store';
import { urls } from '@/utils/constants';

/**
 * Returns HOC that will redirect user to "Sign-in" page if no authentication provided
 */
export function withAuth<P>(Component: FC<P>) {
  function Wrapped(props: P) {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push(urls.auth.signIn);
      }
    }, [router, isLoggedIn]);

    return <Component {...(props as any)} />;
  }

  Wrapped.displayName = `WithAuth(${Component.displayName || Component.name})`;

  return Wrapped;
}
