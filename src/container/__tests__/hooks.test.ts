import { createElement, PropsWithChildren } from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { ErrorTracker } from '@/container/services';

import { container } from '../container';
import { ContainerContext } from '../context';
import { useContainer } from '../hooks';

describe('useContainer', () => {
  const options = {
    wrapper: ({ children }: PropsWithChildren) =>
      createElement(
        ContainerContext.Provider,
        {
          value: container,
        },
        children,
      ),
  };

  it('will get container from context', () => {
    const { result } = renderHook(() => useContainer(), options);

    expect(result.current).toBeDefined();
    expect(result.current.resolve('errorTracker')).toBeInstanceOf(ErrorTracker);
  });

  it('will get dependency by key', () => {
    const { result } = renderHook(() => useContainer('errorTracker'), options);

    expect(result.current).toBeInstanceOf(ErrorTracker);
  });
});
