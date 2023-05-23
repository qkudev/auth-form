/**
 * Facade for any error tracking SDK, e.g. sentry. Used as singleton
 */
export class ErrorTracker {
  public logError(e: unknown, ctx: Record<string, unknown> = {}) {
    // eslint-disable-next-line no-console
    console.log(`[ErrorTracker] ${String(e)}\n${JSON.stringify(ctx, null, 2)}`);
  }
}
