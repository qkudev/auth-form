import { ERROR_CODE } from '@/utils/constants';

import { BaseServerError } from './base-server.error';

export class BadRequestError extends BaseServerError {
  constructor() {
    super({
      status: 400,
      code: ERROR_CODE.BAD_REQUEST,
      message: 'Bad request error',
    });
  }
}
