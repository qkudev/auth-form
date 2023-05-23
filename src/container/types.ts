import type { ErrorTracker, Logger, createTransport } from '@/container/services';
import type { makeStore } from '@/store';
import type { AwilixContainer } from 'awilix';

export interface Deps {
  errorTracker: ErrorTracker;
  logger: Logger;
  store: ReturnType<typeof makeStore>;
  transport: ReturnType<typeof createTransport>;
}

export type Container = AwilixContainer<Deps>;
