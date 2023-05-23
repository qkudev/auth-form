/**
 * Sleeps for given ms
 * @param {number} ms time to sleep (ms)
 */
export const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
