export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  createdAt: string;
}

export type JobPayload = Omit<Job, 'id' | 'createdAt'>;

export const JOB_CATEGORIES = [
  'Sales',
  'Engineering',
  'Marketing',
  'Design',
  'Product',
  'Operations',
  'Finance',
  'Human Resources',
  'Customer Support',
] as const;
