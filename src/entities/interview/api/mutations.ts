import { DefaultError, useMutation, UseMutationOptions } from '@tanstack/react-query';

import { CreateInterviewReqDto } from '@/shared/api';

import { interviewApi } from './instance';

export const INTERVIEW_MUTATION_KEY = {
  POST_API_V1_INTERVIEWS: ['api', 'v1', 'interviews'],
};

const mutations = {
  postApiV1Interviews: () => ({
    mutationFn: (variables: TPostApiV1InterviewsVariables) => {
      const { body } = variables;
      return interviewApi.postApiV1Interviews(body);
    },
    mutationKey: INTERVIEW_MUTATION_KEY.POST_API_V1_INTERVIEWS,
  }),
};

/**
 * @tags Interview
 * @request POST:/api/v1/interviews
 * @secure */
export const usePostApiV1InterviewsMutation = (
  options?: Omit<
    UseMutationOptions<void, DefaultError, TPostApiV1InterviewsVariables>,
    'mutationFn' | 'mutationKey'
  >
) => {
  return useMutation({
    ...mutations.postApiV1Interviews(),
    ...options,
  });
};

type TPostApiV1InterviewsVariables = { body: CreateInterviewReqDto };
