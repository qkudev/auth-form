import { useCallback, useEffect, useMemo, useState } from 'react';

import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { AuthLayout, SignUpForm } from '@/components/auth';
import { actions, useAppDispatch, useAppSelector } from '@/store';
import { Link, Typography } from '@/ui/core';
import { urls } from '@/utils/constants';

export function SignUpPage() {
  const { error } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const signUp = useCallback(
    (payload: AuthAPI.EmailPasswordPayload) => {
      setLoading(true);
      dispatch(
        actions.signUp({
          strategy: 'email',
          payload,
        }),
      );
    },
    [dispatch],
  );
  const { t } = useTranslation('auth');
  const errorLabel = useMemo(() => {
    if (!error) return undefined;
    if (error && error.code) {
      return t(`error-code.${error.code}`);
    }

    return t('error-code.AE000');
  }, [t, error]);

  useEffect(() => {
    if (error) {
      setLoading(false);
    }
  }, [error, setLoading]);

  return (
    <>
      <Head>
        <title>{t('sign-up-page.html.title')}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthLayout loading={loading} title={t('sign-up-page.title')}>
        <SignUpForm
          loading={loading}
          errorLabel={errorLabel}
          onSubmit={signUp}
          submitLabel={t('sign-up-page.submit')}
        />

        <footer>
          <Typography variant="body">
            {t('sign-up-page.footer.text')}{' '}
            <Link data-cy="sign-in-link" href={urls.auth.signIn}>
              {t('sign-up-page.footer.link')}
            </Link>
          </Typography>
        </footer>
      </AuthLayout>
    </>
  );
}
