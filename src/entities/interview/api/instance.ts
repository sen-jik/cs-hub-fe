import { kyInstance } from '@/shared/api';

import { InterviewApi } from './index';

const interviewApi = new InterviewApi(kyInstance);

export { interviewApi };
