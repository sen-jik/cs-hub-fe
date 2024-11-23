import {
  DefaultError,
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';

import { FindUserReqDtoDto, FindUserResDtoDto } from '@/shared/api';

import { userApi } from './instance';

export const USER_QUERY_KEY = {
  GET_USERS: () => ['users'],
  GET_USERS_ID: (id: FindUserReqDtoDto) => ['users', id],
};

const queries = {
  getUsers: () => ({
    queryKey: USER_QUERY_KEY.GET_USERS(),
    queryFn: () => userApi.getUsers(),
  }),
  getUsersById: (id: FindUserReqDtoDto) => ({
    queryKey: USER_QUERY_KEY.GET_USERS_ID(id),
    queryFn: () => userApi.getUsersById(id),
  }),
};

// ---------------------- Query ------------------------------
/**
 * @tags User
 * @request GET:/users */
export const useGetUsersQuery = <TData = void>(
  options?: Omit<UseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getUsers(),
    ...options,
  });
};

/**
 * @tags User
 * @request GET:/users/{id} */
export const useGetUsersByIdQuery = <TData = FindUserResDtoDto>(
  id: FindUserReqDtoDto,
  options?: Omit<UseQueryOptions<FindUserResDtoDto, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getUsersById(id),
    ...options,
  });
};

// ------------------ Suspense Query --------------------------
/**
 * @tags User
 * @request GET:/users */
export const useGetUsersSuspenseQuery = <TData = void>(
  options?: Omit<UseSuspenseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useSuspenseQuery({
    ...queries.getUsers(),
    ...options,
  });
};

/**
 * @tags User
 * @request GET:/users/{id} */
export const useGetUsersByIdSuspenseQuery = <TData = FindUserResDtoDto>(
  id: FindUserReqDtoDto,
  options?: Omit<
    UseSuspenseQueryOptions<FindUserResDtoDto, DefaultError, TData>,
    'queryKey' | 'queryFn'
  >
) => {
  return useSuspenseQuery({
    ...queries.getUsersById(id),
    ...options,
  });
};
