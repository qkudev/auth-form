import { ERROR_CODE } from '@/utils/constants';

import { BaseServerError } from './base-server.error';

export class InternalServerError extends BaseServerError {
  constructor() {
    super({
      status: 500,
      code: ERROR_CODE.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    });
  }
}
