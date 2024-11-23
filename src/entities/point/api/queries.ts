import {
  DefaultError,
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';

import { pointApi } from './instance';

export const POINT_QUERY_KEY = {
  GET_POINT: () => ['point'],
};

const queries = {
  getPoint: () => ({
    queryKey: POINT_QUERY_KEY.GET_POINT(),
    queryFn: () => pointApi.getPoint(),
  }),
};

// ---------------------- Query ------------------------------
/**
 * @tags Point
 * @request GET:/point */
export const useGetPointQuery = <TData = void>(
  options?: Omit<UseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getPoint(),
    ...options,
  });
};

// ------------------ Suspense Query --------------------------
/**
 * @tags Point
 * @request GET:/point */
export const useGetPointSuspenseQuery = <TData = void>(
  options?: Omit<UseSuspenseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useSuspenseQuery({
    ...queries.getPoint(),
    ...options,
  });
};
