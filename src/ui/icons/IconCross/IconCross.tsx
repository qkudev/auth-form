import { FC, memo } from 'react';

import type { IconBaseProps } from '../types';

type Props = IconBaseProps;
export const IconCross: FC<Props> = memo(
  ({ size = 24, color = 'var(--color-icon-default)', ...rest }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g clipPath="url(#clip0_104_1862)">
          <rect
            x="0.375"
            y="0.375"
            width="15.25"
            height="15.25"
            rx="7.625"
            fill={`var(--alt-color, ${color})`}
            strokeWidth="0.75"
          />
          <path
            d="M10.2009 6.05597L6.0565 10.2004"
            fill={`var(--alt-color, ${color})`}
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.202 10.2028L6.05412 6.05402"
            fill={`var(--alt-color, ${color})`}
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_104_1862">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

IconCross.displayName = 'IconCross';
