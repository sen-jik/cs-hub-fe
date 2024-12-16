import { kyInstance } from '@/shared/api';

import { LikeApi } from './index';

const likeApi = new LikeApi(kyInstance);

export { likeApi };
