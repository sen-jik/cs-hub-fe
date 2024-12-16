import { kyInstance } from '@/shared/api';

import { CategoryApi } from './index';

const categoryApi = new CategoryApi(kyInstance);

export { categoryApi };
