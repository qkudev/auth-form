import { DetailedHTMLProps, FC, LabelHTMLAttributes, createElement, memo, useMemo } from 'react';

import cn from 'classnames';

import css from './styles.module.css';

interface Props extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  /**
   * Typography variant
   * @default body
   */
  variant?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'body'
    | 'label'
    | 'caption';
  /**
   * Tag to use
   * @default p
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'small' | 'caption';

  /**
   * Shortcut for "text-align: center"
   * @default false
   */
  center?: boolean;
  /**
   * Bold variant
   * @default false
   */
  bold?: boolean;
}
export const Typography: FC<Props> = memo(
  ({
    as = 'p',
    variant = 'body',
    className = '',
    center = false,
    bold = false,
    color,
    children,
    style,
    ...rest
  }) => {
    const inlineStyles = useMemo(
      () => ({
        ...(style || {}),
        color,
      }),
      [style, color],
    );

    return createElement(
      as,
      {
        className: cn({
          [variant]: true,
          [css.center]: center,
          [css.bold]: bold,
          [className]: true,
        }),
        ...rest,
        style: inlineStyles,
      },
      children,
    );
  },
);

Typography.displayName = 'Typography';
