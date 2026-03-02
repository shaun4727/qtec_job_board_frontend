import { Job } from './types';

const initialJobs: Job[] = [
  {
    id: '1',
    title: 'Customer Success Manager',
    company: 'CloudSupport',
    location: 'San Francisco, CA',
    category: 'Sales',
    description:
      'Manage key enterprise accounts and ensure high retention rates. Strong communication skills are a must.',
    createdAt: new Date('2026-02-28').toISOString(),
  },
  {
    id: '2',
    title: 'Senior Frontend Engineer',
    company: 'TechVault',
    location: 'New York, NY',
    category: 'Engineering',
    description:
      'Build and maintain scalable frontend applications using React and TypeScript. 5+ years experience required.',
    createdAt: new Date('2026-02-27').toISOString(),
  },
  {
    id: '3',
    title: 'Product Designer',
    company: 'DesignCo',
    location: 'Austin, TX',
    category: 'Design',
    description:
      'Lead the design process for our flagship product. Strong Figma skills and user research experience needed.',
    createdAt: new Date('2026-02-26').toISOString(),
  },
  {
    id: '4',
    title: 'Marketing Manager',
    company: 'GrowthLabs',
    location: 'Remote',
    category: 'Marketing',
    description:
      'Develop and execute multi-channel marketing strategies. Experience with B2B SaaS marketing preferred.',
    createdAt: new Date('2026-02-25').toISOString(),
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'InfraStack',
    location: 'Seattle, WA',
    category: 'Engineering',
    description:
      'Manage CI/CD pipelines, cloud infrastructure, and monitoring systems. AWS and Kubernetes experience required.',
    createdAt: new Date('2026-02-24').toISOString(),
  },
];

// In-memory store for demo purposes
let jobs: Job[] = [...initialJobs];
let nextId = 6;

export function getJobs() {
  return [...jobs];
}

export function addJob(job: Omit<Job, 'id' | 'createdAt'>): Job {
  const newJob: Job = {
    ...job,
    id: String(nextId++),
    createdAt: new Date().toISOString(),
  };
  jobs.unshift(newJob);
  return newJob;
}

export function deleteJob(id: string): boolean {
  const index = jobs.findIndex((j) => j.id === id);
  if (index === -1) return false;
  jobs.splice(index, 1);
  return true;
}
