import { SessionProvider } from 'next-auth/react';
// import {
//   QueryClient,
//   QueryClientProvider,
//   Hydrate,
// } from '@tanstack/react-query';
import Layout from '../components/layouts/Layout';
import { QueryClientProvider } from '../lib/Provider/AppProvider';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
