import { KyInstance, Options } from 'ky';

import { CreateSubCategoryReqDto } from '@/shared/api';

export class CategoryApi {
  private readonly instance: KyInstance;

  constructor(instance: KyInstance) {
    this.instance = instance;
  }

  static createSearchParams(
    params?: Record<string, string | number | boolean | Array<string | number | boolean>>
  ): URLSearchParams {
    const urlSearchParams = new URLSearchParams();

    if (params) {
      Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .forEach(([key, value]) => {
          const values = Array.isArray(value) ? value : [value];
          values.forEach((v) => urlSearchParams.append(key, v.toString()));
        });
    }

    return urlSearchParams;
  }

  /**
   * @tags Category
   * @request POST:/api/v1/categories
   * @secure */
  postApiV1Categories(
    data: CreateSubCategoryReqDto,
    kyInstance?: KyInstance,
    options?: Omit<Options, 'json'>
  ) {
    const instance = kyInstance ?? this.instance;

    return instance
      .post<void>(`api/v1/categories`, {
        json: data,
        ...options,
      })
      .json();
  }
}
