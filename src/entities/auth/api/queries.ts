import {
  DefaultError,
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';

import { AuthControllerGetKakaoInfoQueryParams } from '@/shared/api';

import { authApi } from './instance';

export const AUTH_QUERY_KEY = {
  GET_AUTH_KAKAO_LOGIN: () => ['auth', 'kakao', 'login'],
  GET_AUTH_KAKAO_CALLBACK: (params: AuthControllerGetKakaoInfoQueryParams) => [
    'auth',
    'kakao',
    'callback',
    params,
  ],
};

const queries = {
  getAuthKakaoLogin: () => ({
    queryKey: AUTH_QUERY_KEY.GET_AUTH_KAKAO_LOGIN(),
    queryFn: () => authApi.getAuthKakaoLogin(),
  }),
  getAuthKakaoCallback: (params: AuthControllerGetKakaoInfoQueryParams) => ({
    queryKey: AUTH_QUERY_KEY.GET_AUTH_KAKAO_CALLBACK(params),
    queryFn: () => authApi.getAuthKakaoCallback(params),
  }),
};

// ---------------------- Query ------------------------------
/**
 * @tags Auth
 * @request GET:/auth/kakao/login */
export const useGetAuthKakaoLoginQuery = <TData = void>(
  options?: Omit<UseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getAuthKakaoLogin(),
    ...options,
  });
};

/**
 * @tags Auth
 * @request GET:/auth/kakao/callback */
export const useGetAuthKakaoCallbackQuery = <TData = void>(
  params: AuthControllerGetKakaoInfoQueryParams,
  options?: Omit<UseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getAuthKakaoCallback(params),
    ...options,
  });
};

// ------------------ Suspense Query --------------------------
/**
 * @tags Auth
 * @request GET:/auth/kakao/login */
export const useGetAuthKakaoLoginSuspenseQuery = <TData = void>(
  options?: Omit<UseSuspenseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useSuspenseQuery({
    ...queries.getAuthKakaoLogin(),
    ...options,
  });
};

/**
 * @tags Auth
 * @request GET:/auth/kakao/callback */
export const useGetAuthKakaoCallbackSuspenseQuery = <TData = void>(
  params: AuthControllerGetKakaoInfoQueryParams,
  options?: Omit<UseSuspenseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useSuspenseQuery({
    ...queries.getAuthKakaoCallback(params),
    ...options,
  });
};
