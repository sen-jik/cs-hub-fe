import ky from 'ky';

// import { useMswDevtoolsStore } from '@/features/msw';

import { BASE_URL } from './constants';
import { redirectToLogin } from './utils';

/**
 * @description 리프레시 요청의 Promise를 공유하기 위한 변수입니다.
 */
let refreshTokenPromise: Promise<unknown> | null = null;

const kyInstance = ky.create({
  prefixUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [],
    afterResponse: [
      async (request, options, response) => {
        if (response.ok) return response;
        if (response.url.includes('/auth')) {
          return response;
        }
        if (response.status !== 401) return response;

        if (!refreshTokenPromise) {
          refreshTokenPromise = ky
            .post(`${BASE_URL}/auth/refresh`, {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .finally(() => {
              refreshTokenPromise = null;
            });
        }

        try {
          await refreshTokenPromise;
          const url = request.url.startsWith(options.prefixUrl)
            ? request.url.replace(options.prefixUrl, '')
            : request.url;
          return await ky(url, {
            ...options,
            prefixUrl: undefined,
            headers: {
              ...options.headers,
            },
            hooks: {
              afterResponse: undefined,
            },
          });
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          redirectToLogin();
          return response;
        }
      },
    ],
  },
});

export { kyInstance };
