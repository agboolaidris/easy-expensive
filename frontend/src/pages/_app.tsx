import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Notifications } from '@ui/common/Notification';
import { GlobalModals } from '@ui/GlobalModal';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import ModalProvider from 'src/store/modalStore';

import 'tailwindcss/tailwind.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        {getLayout(<Component {...pageProps} />)}
        <GlobalModals />
      </ModalProvider>
      <Notifications />
    </QueryClientProvider>
  );
}
