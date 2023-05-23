import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';

import cn from 'classnames';

import css from './styles.module.css';
import { Spinner } from '../Spinner';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  loading?: boolean;
}
export const AsyncView: FC<Props> = memo(({ children, className, loading = false, ...rest }) => {
  return (
    <div className={cn(css.async, className)} {...rest}>
      {children}

      {loading ? (
        <span className={css.loader}>
          <Spinner />
        </span>
      ) : null}
    </div>
  );
});

AsyncView.displayName = 'AsyncView';
