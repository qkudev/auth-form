import * as yup from 'yup';

import { BaseServerError } from './errors';
import { ErrorResponse } from './response';

import type { NextApiResponse } from 'next';

export const emailPasswordSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

export const responseWithError = <E extends BaseServerError>(e: E, res: NextApiResponse) => {
  res.status(e.status).json(new ErrorResponse(e));
};
