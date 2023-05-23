import { ErrorResponse } from './error.response';
import { BaseServerError } from '../errors';

import type { NextApiResponse } from 'next';

export const responseWithError = <E extends BaseServerError>(e: E, res: NextApiResponse) => {
  res.status(e.status).json(new ErrorResponse(e));
};
