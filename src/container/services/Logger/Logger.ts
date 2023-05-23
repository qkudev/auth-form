import { EventPayload } from './types';

/**
 * Facade for any logger SDK, used as singleton
 */
export class Logger {
  /**
   * Logs event with given payload
   * @param {EventPayload} e event payload
   */
  public logEvent(e: EventPayload) {
    // eslint-disable-next-line no-console
    console.log(`[Logger] ${e.type}`);
  }
}
