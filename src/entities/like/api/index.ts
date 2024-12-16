import { KyInstance, Options } from 'ky';

export class LikeApi {
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
   * @tags Like
   * @request POST:/api/v1/likes/{type}/{id}
   * @secure */
  postApiV1LikesByTypeById(type: string, id: number, kyInstance?: KyInstance, options?: Options) {
    const instance = kyInstance ?? this.instance;

    return instance
      .post<void>(`api/v1/likes/${type}/${id}`, {
        ...options,
      })
      .json();
  }
}
