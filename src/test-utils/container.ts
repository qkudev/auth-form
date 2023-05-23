import { InjectionMode, asFunction, asValue, createContainer } from 'awilix';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { makeStore } from '../store';

export const createTestContainer = () => {
  const logger = {
    logEvent: jest.fn(),
  };
  const errorTracker = {
    logError: jest.fn(),
  };
  const config = {
    get: jest.fn(),
  };
  const transport = axios;
  const transportMock = new MockAdapter(axios);

  type TestDeps = {
    logger: typeof logger;
    errorTracker: typeof errorTracker;
    config: typeof config;
    transport: typeof transport;
    transportMock: typeof transportMock;
    store: ReturnType<typeof makeStore>;
  };

  const container = createContainer<TestDeps>({
    injectionMode: InjectionMode.PROXY,
  });
  container.register({
    logger: asValue(logger),
    errorTracker: asValue(errorTracker),
    config: asValue(config),
    transport: asValue(transport),
    transportMock: asValue(transportMock),
    store: asFunction(makeStore)
      .singleton()
      .inject((injector) => injector),
  });

  return container;
};
