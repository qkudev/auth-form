import { ERROR_CODE } from '@/utils/constants';

import { BaseServerError } from './base-server.error';

export class UserNotFoundError extends BaseServerError {
  constructor() {
    super({
      status: 400,
      code: ERROR_CODE.USER_NOT_FOUND,
      message: 'User not found',
    });
  }
}
