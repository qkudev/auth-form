import { FC, memo, useMemo } from 'react';

import { Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';

import { useBooleanState } from '@/hooks';
import { Button, Input, Typography } from '@/ui/core';
import { IconEyeCrossed } from '@/ui/icons';

import css from './styles.module.css';

interface Props {
  loading: boolean;
  errorLabel?: string;
  submitLabel: string;
  onSubmit: (payload: AuthAPI.EmailPasswordPayload) => void;
}
export const SignUpForm: FC<Props> = memo(({ onSubmit, loading, errorLabel, submitLabel }) => {
  const { t } = useTranslation('auth');
  const [showPassword, toggle] = useBooleanState();
  const initialValues: AuthAPI.EmailPasswordPayload = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    [],
  );
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup
          .string()
          .required(t('email-input.errors.required')!)
          .email(t('email-input.errors.invalid')!),
        password: yup
          .string()
          .required(t('password-input.errors.required')!)
          .min(8, t('password-input.errors.invalid')!),
      }),
    [t],
  );

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleBlur, handleChange, handleSubmit, errors }) => (
        <form className={css.form} onSubmit={handleSubmit} id="regform">
          <Input
            data-cy="email-input"
            id="email"
            errorLabel={errors.email}
            disabled={loading}
            aria-label={t('email-input.label')!}
            label={t('email-input.label')!}
            placeholder={t('email-input.placeholder')!}
            required
            aria-required="true"
            name="email"
            type="email"
            autoCapitalize="false"
            autoComplete="email"
            autoCorrect="false"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Input
            data-cy="password-input"
            id="new-password"
            autoComplete="new-password"
            errorLabel={errors.password}
            disabled={loading}
            aria-label={t('password-input.label')!}
            label={t('password-input.label')!}
            placeholder={t('password-input.placeholder')!}
            required
            aria-required="true"
            autoCapitalize="false"
            autoCorrect="false"
            name="password"
            maxLength={40}
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            icon={
              <button type="button" onClick={toggle}>
                <IconEyeCrossed />
              </button>
            }
          />

          {errorLabel ? (
            <Typography data-cy="form-error-label" variant="caption" color="var(--color-error)">
              {errorLabel}
            </Typography>
          ) : null}

          <Button
            data-cy="submit-button"
            type="submit"
            floating
            disabled={loading}
            label={submitLabel}
          />
        </form>
      )}
    </Formik>
  );
});

SignUpForm.displayName = 'EmailPasswordForm';
