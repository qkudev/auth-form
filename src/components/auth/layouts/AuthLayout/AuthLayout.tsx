import { FC, PropsWithChildren, memo, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAppSelector } from '@/store';
import { AsyncView, Typography } from '@/ui/core';
import { IconLogo } from '@/ui/icons';
import { urls } from '@/utils/constants';

import css from './styles.module.css';

interface Props extends PropsWithChildren {
  loading: boolean;
  title: string;
}
export const AuthLayout: FC<Props> = memo(({ loading, title, children }) => {
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      router.push(urls.home);
    }
  }, [router, isLoggedIn]);

  return (
    <main className={css.main}>
      <AsyncView loading={loading} className={css.card}>
        <header>
          <div className={css.header}>
            <IconLogo aria-label="Logo" />
          </div>

          <Typography center variant="heading3" as="h1">
            {title}
          </Typography>
        </header>

        {children}
      </AsyncView>
    </main>
  );
});

AuthLayout.displayName = 'AuthLayout';
