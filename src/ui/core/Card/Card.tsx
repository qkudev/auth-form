import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';

import cn from 'classnames';

import css from './styles.module.css';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const Card = forwardRef<HTMLDivElement, Props>(({ className, ...rest }, ref) => {
  return <div ref={ref} className={cn(css.card, className)} {...rest} />;
});

Card.displayName = 'Card';
