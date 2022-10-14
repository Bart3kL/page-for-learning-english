import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      {router.pathname === '/' ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;
