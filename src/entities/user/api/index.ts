import { KyInstance, Options } from 'ky';

import { FindUserReqDto, FindUserResDto } from '@/shared/api';

export class UserApi {
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
   * @tags User
   * @request GET:/api/v1/users */
  getApiV1Users(kyInstance?: KyInstance, options?: Options) {
    const instance = kyInstance ?? this.instance;

    return instance
      .get<void>(`api/v1/users`, {
        ...options,
      })
      .json();
  }

  /**
   * @tags User
   * @request GET:/api/v1/users/{id} */
  getApiV1UsersById(id: FindUserReqDto, kyInstance?: KyInstance, options?: Options) {
    const instance = kyInstance ?? this.instance;

    return instance
      .get<FindUserResDto>(`api/v1/users/${id}`, {
        ...options,
      })
      .json();
  }
}
