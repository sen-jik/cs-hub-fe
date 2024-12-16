import { DefaultError, useMutation, UseMutationOptions } from '@tanstack/react-query';

import { likeApi } from './instance';

export const LIKE_MUTATION_KEY = {
  POST_API_V1_LIKES_TYPE_ID: ['api', 'v1', 'likes', 'type', 'id'],
};

const mutations = {
  postApiV1LikesByTypeById: () => ({
    mutationFn: (variables: TPostApiV1LikesByTypeByIdVariables) => {
      const { type, id } = variables;
      return likeApi.postApiV1LikesByTypeById(type, id);
    },
    mutationKey: LIKE_MUTATION_KEY.POST_API_V1_LIKES_TYPE_ID,
  }),
};

/**
 * @tags Like
 * @request POST:/api/v1/likes/{type}/{id}
 * @secure */
export const usePostApiV1LikesByTypeByIdMutation = (
  options?: Omit<
    UseMutationOptions<void, DefaultError, TPostApiV1LikesByTypeByIdVariables>,
    'mutationFn' | 'mutationKey'
  >
) => {
  return useMutation({
    ...mutations.postApiV1LikesByTypeById(),
    ...options,
  });
};

type TPostApiV1LikesByTypeByIdVariables = { type: string; id: number };
