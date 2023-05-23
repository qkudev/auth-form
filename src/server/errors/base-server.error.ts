import { ApiErrorCode } from '@/utils/constants';

interface Options {
  status: number;
  code: ApiErrorCode;
  message: string;
}

export class BaseServerError extends Error {
  public readonly status: number;

  public readonly code: ApiErrorCode;

  public readonly message: string;

  constructor(options: Options) {
    super(options.message);

    this.status = options.status;
    this.code = options.code;
    this.message = options.message;
  }

  public toJSON() {
    return {
      status: this.status,
      code: this.code,
      message: this.message,
    };
  }
}
