import { ERROR_CODE } from '@/utils/constants';

import { BaseServerError } from './base-server.error';

export class MethodNotAllowedError extends BaseServerError {
  constructor() {
    super({
      status: 405,
      code: ERROR_CODE.METHOD_NOT_ALLOWED,
      message: 'Bad request error',
    });
  }
}
