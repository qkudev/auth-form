import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { verifyRequest } from '@/server/authenticate';

export { HomePage as default } from '@/components/home/pages';

export const getServerSideProps: GetServerSideProps = async ({ locale, req, res }) => {
  const isLoggedIn = verifyRequest(req);

  if (!isLoggedIn) {
    res.writeHead(301, { location: '/auth/sign-in' });
    res.end();
    return { props: {} };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['home'])),
    },
  };
};
