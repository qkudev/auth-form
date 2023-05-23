import { createTestContainer } from '@/test-utils';

import { createTransport } from '../createTransport';

describe('createTransport', () => {
  it('should log error', async () => {
    const container = createTestContainer();
    const errorTracker = container.resolve('errorTracker');
    const transport = createTransport({
      errorTracker,
    });

    const transportMock = container.resolve('transportMock');
    transportMock.onGet('/').reply(404);
    try {
      await transport.get('/');
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect(errorTracker.logError).toHaveBeenCalled();
    expect.assertions(2);
  });
});
