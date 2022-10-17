import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
