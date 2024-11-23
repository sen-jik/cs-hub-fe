import { kyInstance } from '@/shared/api';

import { UserApi } from './index';

const userApi = new UserApi(kyInstance);

export { userApi };
