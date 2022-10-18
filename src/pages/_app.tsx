import { SessionProvider } from 'next-auth/react';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import Layout from '../components/layouts/Layout';

// https://github.com/refixshow/repo-search

// import { FC, PropsWithChildren } from "react";
// import { QueryClient } from "@tanstack/react-query";
// import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
// import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       cacheTime: 1000 * 60 * 60 * 24, // 24 hours
//       refetchOnReconnect: false,
//       refetchOnWindowFocus: false,
//       refetchOnMount: false,
//       retry: 1,
//     },
//   },
// });

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
// });

// export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
//   return (
//     <PersistQueryClientProvider
//       client={queryClient}
//       persistOptions={{ persister }}
//     >
//       {children}
//     </PersistQueryClientProvider>
//   );

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
