import { KyInstance, Options } from 'ky';

export class PointApi {
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
   * @tags Point
   * @request GET:/api/v1/point */
  getApiV1Point(kyInstance?: KyInstance, options?: Options) {
    const instance = kyInstance ?? this.instance;

    return instance
      .get<void>(`api/v1/point`, {
        ...options,
      })
      .json();
  }
}
