import {
  DefaultError,
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';

import { pointApi } from './instance';

export const POINT_QUERY_KEY = {
  GET_V1_POINT: () => ['v1', 'point'],
};

const queries = {
  getApiV1Point: () => ({
    queryKey: POINT_QUERY_KEY.GET_V1_POINT(),
    queryFn: () => pointApi.getApiV1Point(),
  }),
};

// ---------------------- Query ------------------------------
/**
 * @tags Point
 * @request GET:/api/v1/point */
export const useGetApiV1PointQuery = <TData = void>(
  options?: Omit<UseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getApiV1Point(),
    ...options,
  });
};

// ------------------ Suspense Query --------------------------
/**
 * @tags Point
 * @request GET:/api/v1/point */
export const useGetApiV1PointSuspenseQuery = <TData = void>(
  options?: Omit<UseSuspenseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useSuspenseQuery({
    ...queries.getApiV1Point(),
    ...options,
  });
};
