import { createContext } from 'react';

import { AwilixContainer, createContainer } from 'awilix';

import type { Deps } from './types';

export const ContainerContext = createContext<AwilixContainer<Deps>>(createContainer());
