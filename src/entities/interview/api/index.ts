import { KyInstance, Options } from 'ky';

import {
  CreateInterviewReqDto,
  FindAllInterviewResDto,
  FindInterviewInfoWithLikeResDto,
} from '@/shared/api';

export class InterviewApi {
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
   * @tags Interview
   * @request POST:/api/v1/interviews
   * @secure */
  postApiV1Interviews(
    data: CreateInterviewReqDto,
    kyInstance?: KyInstance,
    options?: Omit<Options, 'json'>
  ) {
    const instance = kyInstance ?? this.instance;

    return instance
      .post<void>(`api/v1/interviews`, {
        json: data,
        ...options,
      })
      .json();
  }

  /**
   * @tags Interview
   * @request GET:/api/v1/interviews */
  getApiV1Interviews(kyInstance?: KyInstance, options?: Options) {
    const instance = kyInstance ?? this.instance;

    return instance
      .get<FindAllInterviewResDto>(`api/v1/interviews`, {
        ...options,
      })
      .json();
  }

  /**
   * @tags Interview
   * @request GET:/api/v1/interviews/{id} */
  getApiV1InterviewsById(id: number, kyInstance?: KyInstance, options?: Options) {
    const instance = kyInstance ?? this.instance;

    return instance
      .get<FindInterviewInfoWithLikeResDto>(`api/v1/interviews/${id}`, {
        ...options,
      })
      .json();
  }
}
