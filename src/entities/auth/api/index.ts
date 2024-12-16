import { KyInstance, Options } from 'ky';

import { AuthControllerGetKakaoInfoQueryParams } from '@/shared/api';

export class AuthApi {
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
   * @tags Auth
   * @request GET:/api/v1/auth/kakao/login */
  getApiV1AuthKakaoLogin(kyInstance?: KyInstance, options?: Options) {
    const instance = kyInstance ?? this.instance;

    return instance
      .get<void>(`api/v1/auth/kakao/login`, {
        ...options,
      })
      .json();
  }

  /**
   * @tags Auth
   * @request GET:/api/v1/auth/kakao/callback */
  getApiV1AuthKakaoCallback(
    params: AuthControllerGetKakaoInfoQueryParams,
    kyInstance?: KyInstance,
    options?: Omit<Options, 'searchParams'>
  ) {
    const instance = kyInstance ?? this.instance;
    const urlSearchParams = AuthApi.createSearchParams(params);

    return instance
      .get<void>(`api/v1/auth/kakao/callback`, {
        searchParams: urlSearchParams,
        ...options,
      })
      .json();
  }
}
