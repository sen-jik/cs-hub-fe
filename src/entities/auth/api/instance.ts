import { kyInstance } from '@/shared/api';

import { AuthApi } from './index';

const authApi = new AuthApi(kyInstance);

export { authApi };
