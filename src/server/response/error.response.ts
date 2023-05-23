import { BaseResponse } from './base.response';
import { BaseServerError } from '../errors';

export class ErrorResponse<E extends BaseServerError> extends BaseResponse {
  public readonly success = false;

  constructor(public readonly error: E) {
    super();
  }

  public toJSON() {
    return {
      success: false,
      error: this.error.toJSON(),
    };
  }
}
