import {
  DefaultError,
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';

import { FindAllInterviewResDto, FindInterviewInfoWithLikeResDto } from '@/shared/api';

import { interviewApi } from './instance';

export const INTERVIEW_QUERY_KEY = {
  GET_V1_INTERVIEWS: () => ['v1', 'interviews'],
  GET_V1_INTERVIEWS_ID: (id: number) => ['v1', 'interviews', id],
};

const queries = {
  getApiV1Interviews: () => ({
    queryKey: INTERVIEW_QUERY_KEY.GET_V1_INTERVIEWS(),
    queryFn: () => interviewApi.getApiV1Interviews(),
  }),
  getApiV1InterviewsById: (id: number) => ({
    queryKey: INTERVIEW_QUERY_KEY.GET_V1_INTERVIEWS_ID(id),
    queryFn: () => interviewApi.getApiV1InterviewsById(id),
  }),
};

// ---------------------- Query ------------------------------
/**
 * @tags Interview
 * @request GET:/api/v1/interviews */
export const useGetApiV1InterviewsQuery = <TData = FindAllInterviewResDto>(
  options?: Omit<
    UseQueryOptions<FindAllInterviewResDto, DefaultError, TData>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery({
    ...queries.getApiV1Interviews(),
    ...options,
  });
};

/**
 * @tags Interview
 * @request GET:/api/v1/interviews/{id} */
export const useGetApiV1InterviewsByIdQuery = <TData = FindInterviewInfoWithLikeResDto>(
  id: number,
  options?: Omit<
    UseQueryOptions<FindInterviewInfoWithLikeResDto, DefaultError, TData>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery({
    ...queries.getApiV1InterviewsById(id),
    ...options,
  });
};

// ------------------ Suspense Query --------------------------
/**
 * @tags Interview
 * @request GET:/api/v1/interviews */
export const useGetApiV1InterviewsSuspenseQuery = <TData = FindAllInterviewResDto>(
  options?: Omit<
    UseSuspenseQueryOptions<FindAllInterviewResDto, DefaultError, TData>,
    'queryKey' | 'queryFn'
  >
) => {
  return useSuspenseQuery({
    ...queries.getApiV1Interviews(),
    ...options,
  });
};

/**
 * @tags Interview
 * @request GET:/api/v1/interviews/{id} */
export const useGetApiV1InterviewsByIdSuspenseQuery = <TData = FindInterviewInfoWithLikeResDto>(
  id: number,
  options?: Omit<
    UseSuspenseQueryOptions<FindInterviewInfoWithLikeResDto, DefaultError, TData>,
    'queryKey' | 'queryFn'
  >
) => {
  return useSuspenseQuery({
    ...queries.getApiV1InterviewsById(id),
    ...options,
  });
};
