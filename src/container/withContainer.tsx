/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

import { ContainerContext } from './context';
import { Container } from './types';

export function withContainer<P>(Component: FC<P>, container: Container) {
  function ContainerProvider(props: P) {
    return (
      <ContainerContext.Provider value={container}>
        <Component {...(props as any)} />
      </ContainerContext.Provider>
    );
  }
  ContainerProvider.displayName = `ContainerProvider(${Component.displayName || Component.name})`;

  return ContainerProvider;
}
