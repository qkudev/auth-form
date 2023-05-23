import React, { memo } from 'react';

import type { IconBaseProps } from '../types';
import type { FC } from 'react';

export const IconSearch: FC<IconBaseProps> = memo(
  ({ size = 24, color = 'var(--color-icon-default)', ...rest }) => (
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
        d="M14.4964 16.6177C13.215 17.4901 11.6671 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.6671 17.4901 13.215 16.6178 14.4964L21.1317 19.0104C21.7175 19.5962 21.7175 20.5459 21.1317 21.1317C20.546 21.7175 19.5962 21.7175 19.0104 21.1317L14.4964 16.6177ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"
        fill={`var(--alt-color, ${color})`}
      />
    </svg>
  ),
);

IconSearch.displayName = 'IconSearch';
