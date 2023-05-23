import React, { memo } from 'react';

import type { IconBaseProps } from '../types';
import type { FC } from 'react';

export const IconClose: FC<IconBaseProps> = memo(
  ({ color = 'var(--color-icon-default)', size = 24, ...rest }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8346 17.9581C16.4202 18.544 17.3698 18.544 17.9554 17.9581C18.5411 17.3722 18.5411 16.4222 17.9554 15.8363L14.1209 12L17.9554 8.16378C18.5411 7.57786 18.5411 6.6279 17.9554 6.04198C17.3698 5.45606 16.4202 5.45606 15.8346 6.04198L12.0001 9.87823L8.16555 6.04198C7.57989 5.45606 6.63036 5.45606 6.04471 6.04198C5.45906 6.6279 5.45906 7.57786 6.04471 8.16378L9.87922 12L6.04471 15.8363C5.45906 16.4222 5.45906 17.3722 6.04471 17.9581C6.63036 18.544 7.57989 18.544 8.16555 17.9581L12.0001 14.1218L15.8346 17.9581Z"
        fill={`var(--alt-color, ${color})`}
      />
    </svg>
  ),
);

IconClose.displayName = 'IconClose';
