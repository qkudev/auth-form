import { ComponentProps, forwardRef } from 'react';

import cn from 'classnames';
import NextLink from 'next/link';

import css from './styles.module.css';

export const Link: typeof NextLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof NextLink>>(
  ({ className, ...rest }, ref) => (
    <NextLink ref={ref} className={cn(css.link, className)} {...rest} />
  ),
);

Link.displayName = 'Link';
