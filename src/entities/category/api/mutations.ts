import { DefaultError, useMutation, UseMutationOptions } from '@tanstack/react-query';

import { CreateSubCategoryReqDto } from '@/shared/api';

import { categoryApi } from './instance';

export const CATEGORY_MUTATION_KEY = {
  POST_API_V1_CATEGORIES: ['api', 'v1', 'categories'],
};

const mutations = {
  postApiV1Categories: () => ({
    mutationFn: (variables: TPostApiV1CategoriesVariables) => {
      const { body } = variables;
      return categoryApi.postApiV1Categories(body);
    },
    mutationKey: CATEGORY_MUTATION_KEY.POST_API_V1_CATEGORIES,
  }),
};

/**
 * @tags Category
 * @request POST:/api/v1/categories
 * @secure */
export const usePostApiV1CategoriesMutation = (
  options?: Omit<
    UseMutationOptions<void, DefaultError, TPostApiV1CategoriesVariables>,
    'mutationFn' | 'mutationKey'
  >
) => {
  return useMutation({
    ...mutations.postApiV1Categories(),
    ...options,
  });
};

type TPostApiV1CategoriesVariables = { body: CreateSubCategoryReqDto };
