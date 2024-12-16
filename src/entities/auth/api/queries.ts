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
  GET_V1_AUTH_KAKAO_LOGIN: () => ['v1', 'auth', 'kakao', 'login'],
  GET_V1_AUTH_KAKAO_CALLBACK: (params: AuthControllerGetKakaoInfoQueryParams) => [
    'v1',
    'auth',
    'kakao',
    'callback',
    params,
  ],
};

const queries = {
  getApiV1AuthKakaoLogin: () => ({
    queryKey: AUTH_QUERY_KEY.GET_V1_AUTH_KAKAO_LOGIN(),
    queryFn: () => authApi.getApiV1AuthKakaoLogin(),
  }),
  getApiV1AuthKakaoCallback: (params: AuthControllerGetKakaoInfoQueryParams) => ({
    queryKey: AUTH_QUERY_KEY.GET_V1_AUTH_KAKAO_CALLBACK(params),
    queryFn: () => authApi.getApiV1AuthKakaoCallback(params),
  }),
};

// ---------------------- Query ------------------------------
/**
 * @tags Auth
 * @request GET:/api/v1/auth/kakao/login */
export const useGetApiV1AuthKakaoLoginQuery = <TData = void>(
  options?: Omit<UseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getApiV1AuthKakaoLogin(),
    ...options,
  });
};

/**
 * @tags Auth
 * @request GET:/api/v1/auth/kakao/callback */
export const useGetApiV1AuthKakaoCallbackQuery = <TData = void>(
  params: AuthControllerGetKakaoInfoQueryParams,
  options?: Omit<UseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    ...queries.getApiV1AuthKakaoCallback(params),
    ...options,
  });
};

// ------------------ Suspense Query --------------------------
/**
 * @tags Auth
 * @request GET:/api/v1/auth/kakao/login */
export const useGetApiV1AuthKakaoLoginSuspenseQuery = <TData = void>(
  options?: Omit<UseSuspenseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useSuspenseQuery({
    ...queries.getApiV1AuthKakaoLogin(),
    ...options,
  });
};

/**
 * @tags Auth
 * @request GET:/api/v1/auth/kakao/callback */
export const useGetApiV1AuthKakaoCallbackSuspenseQuery = <TData = void>(
  params: AuthControllerGetKakaoInfoQueryParams,
  options?: Omit<UseSuspenseQueryOptions<void, DefaultError, TData>, 'queryKey' | 'queryFn'>
) => {
  return useSuspenseQuery({
    ...queries.getApiV1AuthKakaoCallback(params),
    ...options,
  });
};
