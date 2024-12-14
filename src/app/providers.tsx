'use client';

import 'dayjs/locale/ko';

import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { NextUiProvider } from '@/packages';
import { StyledToastContainer } from '@/shared/ui/styled-toast-container';

dayjs.extend(localizedFormat);
dayjs.locale('ko');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      void queryClient.invalidateQueries({
        queryKey: [mutation.options.mutationKey?.at(0)],
        exact: false,
      });
    },
  }),
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <NextUiProvider className="h-screen" locale="ko-KR">
        {children}
        <StyledToastContainer />
      </NextUiProvider>
    </QueryClientProvider>
  );
};
