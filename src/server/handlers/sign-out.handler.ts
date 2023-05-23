import { logOut } from '../authenticate';

import type { NextApiRequest, NextApiResponse } from 'next';

export const signOutHandler = async (_: NextApiRequest, res: NextApiResponse) => {
  logOut(res);
};
