import { JSX, DetailedHTMLProps, InputHTMLAttributes, forwardRef, useMemo } from 'react';

import cn from 'classnames';

import css from './styles.module.css';
import { Typography } from '../Typography';

interface Props
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
  /**
   * Label text, optional
   */
  label?: string;
  /**
   * Error state, optional
   * @default false
   */
  error?: boolean;
  /**
   * Error label string, optional
   */
  errorLabel?: string;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Input size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Current value (for controlled state)
   * @default undefined
   */
  value?: string;

  /**
   * Input icon, optional
   */
  icon?: JSX.Element;
}
export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className = '',
      label,
      error = false,
      errorLabel,
      size = 'medium',
      disabled,
      id,
      icon,
      ...rest
    },
    ref,
  ) => {
    const labelComponent = useMemo(
      () =>
        label ? (
          <Typography as="label" variant="label" className={css.label} htmlFor={id}>
            {label}
          </Typography>
        ) : null,
      [label, id],
    );
    const errorComponent = useMemo(
      () =>
        errorLabel ? (
          <Typography
            data-cy={`error-${id}`}
            className={css['error-label']}
            as="p"
            variant="caption"
          >
            {errorLabel}
          </Typography>
        ) : null,
      [errorLabel, id],
    );

    return (
      <div
        className={cn({
          [css.container]: true,
          [className]: true,
        })}
      >
        {labelComponent}

        <div className={css['input-wrapper']}>
          <input
            ref={ref}
            aria-disabled={disabled}
            disabled={disabled}
            id={id}
            className={cn({
              body: true,
              [css.input]: true,
              [css.error]: !!errorLabel || error,
              [css.icon]: !!icon,
              [`size-${size}`]: true,
            })}
            {...rest}
          />
          <span className={css['icon-container']}>{icon}</span>
        </div>

        {errorComponent}
      </div>
    );
  },
);

Input.displayName = 'Input';

Input.defaultProps = {
  label: undefined,
  error: false,
  errorLabel: undefined,
  disabled: false,
  size: 'medium',
  value: '',
  icon: undefined,
};
