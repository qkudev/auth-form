import { useMemo } from 'react';

import { asValue } from 'awilix';
import NextApp from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';

import { container, useContainer, withContainer } from '@/container';
import { verifyRequest } from '@/server/authenticate';
import { makeStore } from '@/store';

import type { AppContext, AppProps, AppType } from 'next/app';

import '@/styles/globals.css';

interface IAppProps extends AppProps {
  isLoggedIn: boolean;
}
function App({ Component, pageProps, isLoggedIn }: IAppProps) {
  const c = useContainer();
  const store = useMemo(() => {
    const s = makeStore(c, isLoggedIn);
    c.register({ store: asValue(s) });

    return s;
  }, [isLoggedIn, c]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const Wrapped = withContainer(appWithTranslation(App), container) as AppType<IAppProps>;

Wrapped.getInitialProps = async (appContext: AppContext) => {
  const appInitialProps = await NextApp.getInitialProps(appContext);
  const { req } = appContext.ctx;
  const pageProps = {
    ...appInitialProps.pageProps,
    isLoggedIn: verifyRequest(req),
  };

  return pageProps;
};

export default Wrapped;
