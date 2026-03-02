'use server';

import { JobPayload } from '@/lib/types';

export const getAllJobs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/jobs`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const deleteJobApi = async (jobId: string): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/jobs/${jobId}`, {
      method: 'DELETE',
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const createJobApi = async (
  jobData: JobPayload
): Promise<{ success: boolean; message: string; statusCode: number; error?: any }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData),
    });

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'An unexpected error occurred',
      statusCode: 500,
      error: error,
    };
  }
};
