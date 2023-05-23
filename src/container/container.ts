import { InjectionMode, asClass, asFunction, createContainer } from 'awilix';

import { ErrorTracker, Logger, createTransport } from '@/container/services';

import type { Deps } from './types';

export const container = createContainer<Deps>({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  errorTracker: asClass(ErrorTracker).singleton(),
  logger: asClass(Logger).singleton(),
  transport: asFunction(createTransport)
    .singleton()
    .inject((injector) => injector),
});
