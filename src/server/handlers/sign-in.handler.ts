import { wait } from '@/utils/wait';

import { accounts } from '../accounts';
import { authenticate } from '../authenticate';
import { BadRequestError, MethodNotAllowedError, UserNotFoundError } from '../errors';
import { responseWithError } from '../response';
import { emailPasswordSchema } from '../utils';

import type { NextApiRequest, NextApiResponse } from 'next';

export const signInHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await wait(2000);

  if (req.method !== 'POST') {
    return responseWithError(new MethodNotAllowedError(), res);
  }

  const isValid = await emailPasswordSchema.isValid(req.body);
  if (!isValid) {
    return responseWithError(new BadRequestError(), res);
  }

  const { email, password } = req.body;
  if (!accounts.has(email)) {
    return responseWithError(new UserNotFoundError(), res);
  }

  if (accounts.get(email) === password) {
    return authenticate(email, res);
  }

  return responseWithError(new UserNotFoundError(), res);
};
