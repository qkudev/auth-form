import { parse, serialize } from 'cookie';
import * as jwt from 'jsonwebtoken';

import { SuccessResponse } from './response';

import type { IncomingMessage } from 'http';
import type { NextApiResponse } from 'next';

const jwtSecret = 'secret';

export const authenticate = (email: Email, res: NextApiResponse) => {
  const token = jwt.sign({ email }, jwtSecret, {
    expiresIn: '365d',
  });

  res.setHeader('Set-Cookie', serialize('token', token, { path: '/', httpOnly: true }));

  res.status(201).json(
    new SuccessResponse({
      token,
    }),
  );
};

export const logOut = (res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    serialize('token', '', { path: '/', httpOnly: true, expires: new Date() }),
  );
  res.status(201).json(new SuccessResponse(undefined));
};

export const verify = (token: string) => jwt.verify(token, jwtSecret);

export const verifyRequest = (req?: IncomingMessage): boolean => {
  const { cookie: cookieRaw } = req?.headers || {};

  if (cookieRaw) {
    const parsed = parse(cookieRaw);
    if (parsed.token) {
      try {
        verify(parsed.token);

        return true;
      } catch {
        return false;
      }
    }
  }

  return false;
};
