import React, { JSX, ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

import cn from 'classnames';

import css from './styles.module.css';
import { Spinner } from '../Spinner';
import { Typography } from '../Typography';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /**
   * Button variant(style)
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * Button size
   * @default 'medium'
   *
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button text
   */
  label?: string;
  /**
   * If `true` button will be 100% width
   * @default false
   */
  floating?: boolean;
  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Button icon, optional
   */
  icon?: JSX.Element;
}
export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className = '',
      floating = false,
      label,
      variant = 'primary',
      size = 'medium',
      loading,
      type,
      disabled = false,
      icon,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={type}
        aria-disabled={disabled}
        className={cn({
          [css.btn]: true,
          [css[variant]]: true,
          [css.floating]: floating,
          [css.loading]: loading,
          [css.disabled]: disabled,
          [css['with-icon']]: !!icon,
          [`size-${size}`]: true,
          [className]: true,
        })}
        disabled={disabled}
        {...rest}
      >
        <Typography center className={css.label} variant="body" bold>
          {label}
        </Typography>
        {loading ? <Spinner className={css.spinner} color="var(--alt-color)" /> : null}
        {icon ? <span className={css.icon_right}>{icon}</span> : null}
      </button>
    );
  },
);

Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'primary',
  loading: false,
  disabled: false,
  floating: false,
  label: undefined,
  size: 'medium',
  icon: undefined,
};
