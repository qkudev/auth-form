import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export { SignUpPage as default } from '@/components/auth/pages';

export async function getStaticProps({ locale }: ServerCtx) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth'])),
    },
  };
}
