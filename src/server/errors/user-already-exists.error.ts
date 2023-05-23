import { ERROR_CODE } from '@/utils/constants';

import { BaseServerError } from './base-server.error';

export class UserAlreadyExistsError extends BaseServerError {
  constructor() {
    super({
      status: 400,
      code: ERROR_CODE.USER_ALREADY_EXISTS,
      message: 'User already exists',
    });
  }
}
