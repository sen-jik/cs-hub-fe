import {
  DefaultError,
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';

import { FindUserReqDto, FindUserResDto } from '@/shared/api';

import { userApi } from './instance';

export const USER_QUERY_KEY = {
  GET_V1_USERS: () => ['v1', 'users'],
  GET_V1_USERS_ID: (id: FindUserReqDto) => ['v1', 'users', id],
};

const queries = {
  getApiV1Users: () => ({
    queryKey: USER_QUERY_KEY.GET_V1_USERS(),
    queryFn: () => userApi.getApiV1Users(),
  }),
  getApiV1UsersById: (id: FindUserReqDto) => ({
    queryKey: USER_QUERY_KEY.GET_V1_USERS_ID(id),
    queryFn: () => userApi.getApiV1UsersById(id),
  }),
};

// ---------------------- Query ------------------------------
/**
 * @tags User
 * @request GET:/api/v1/users */
export const useGetApiV1UsersQuery = <TData = void>(
  options?: Omit<UseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getApiV1Users(),
    ...options,
  });
};

/**
 * @tags User
 * @request GET:/api/v1/users/{id} */
export const useGetApiV1UsersByIdQuery = <TData = FindUserResDto>(
  id: FindUserReqDto,
  options?: Omit<UseQueryOptions<FindUserResDto, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getApiV1UsersById(id),
    ...options,
  });
};

// ------------------ Suspense Query --------------------------
/**
 * @tags User
 * @request GET:/api/v1/users */
export const useGetApiV1UsersSuspenseQuery = <TData = void>(
  options?: Omit<UseSuspenseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useSuspenseQuery({
    ...queries.getApiV1Users(),
    ...options,
  });
};

/**
 * @tags User
 * @request GET:/api/v1/users/{id} */
export const useGetApiV1UsersByIdSuspenseQuery = <TData = FindUserResDto>(
  id: FindUserReqDto,
  options?: Omit<
    UseSuspenseQueryOptions<FindUserResDto, DefaultError, TData>,
    'queryKey' | 'queryFn'
  >
) => {
  return useSuspenseQuery({
    ...queries.getApiV1UsersById(id),
    ...options,
  });
};
