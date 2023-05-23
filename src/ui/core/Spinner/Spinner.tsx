import { FC, SVGProps, memo } from 'react';

import cn from 'classnames';

import css from './styles.module.css';

interface Props extends SVGProps<SVGSVGElement> {
  /**
   * Size in pixels (optional)
   * @default 32
   */
  size?: number;
  /**
   * Color (optional)
   * @default 'var(--color-primary)'
   */
  color?: string;
}
export const Spinner: FC<Props> = memo(
  ({ size = 32, color = 'var(--color-primary)', className, ...rest }) => (
    <svg
      role="progressbar"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(css.spinner, className)}
      {...rest}
    >
      <path
        d="M27.2 16C27.2 13.7849 26.5432 11.6194 25.3125 9.77762C24.0818 7.93579 22.3326 6.50025 20.2861 5.65255C18.2396 4.80485 15.9876 4.58305 13.815 5.01521C11.6424 5.44736 9.6468 6.51406 8.08045 8.08041C6.5141 9.64676 5.44741 11.6424 5.01525 13.815C4.5831 15.9876 4.8049 18.2395 5.6526 20.2861C6.5003 22.3326 7.93583 24.0818 9.77766 25.3125C11.6195 26.5431 13.7849 27.2 16 27.2"
        strokeWidth="3"
        stroke={color}
      />
    </svg>
  ),
);

Spinner.displayName = 'Spinner';
