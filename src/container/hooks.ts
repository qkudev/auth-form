import { useContext } from 'react';

import { ContainerContext } from './context';
import { Container, Deps } from './types';

export function useContainer(): Container;
export function useContainer<K extends keyof Deps>(key: K): Deps[typeof key];
export function useContainer<K extends keyof Deps>(key?: K) {
  const di = useContext(ContainerContext) as Container;

  if (key) {
    return di.resolve(key);
  }

  return di;
}
