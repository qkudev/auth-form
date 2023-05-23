import axios from 'axios';

import type { Deps } from '@/container';

type TransportDeps = Pick<Deps, 'errorTracker'>;
export const createTransport = ({ errorTracker }: TransportDeps) => {
  const transport = axios.create({
    timeout: 30000,
  });

  transport.interceptors.request.use((config) => {
    if (config.headers) {
      config.headers['X-Custom-Header'] = 'test-value';
    }

    return config;
  });

  transport.interceptors.response.use(
    (res) => res,
    (e) => {
      errorTracker.logError(e);

      throw e;
    },
  );

  return transport;
};
