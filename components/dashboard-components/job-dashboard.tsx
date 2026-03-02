'use client';

import { useState, useMemo } from 'react';
import useSWR from 'swr';
import { CreateJobDialog } from './create-job-dialog';
import { JobFilters } from './job-filter';
import { JobTable } from './job-table';
import { Skeleton } from '@/components/ui/skeleton';
import { BriefcaseIcon } from 'lucide-react';
import type { Job } from '@/lib/types';

import { getAllJobs } from '@/services/dashboard/dashboard-api';
import { showCreateToast, showErrorToast } from '@/lib/toast';

export function JobDashboard() {
  const { data, mutate, isLoading, error } = useSWR<{ data: Job[] }>('all-jobs', getAllJobs);

  // Safely extract the jobs array after checking if data exists
  const jobs = useMemo(() => data?.data || [], [data]);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('all');

  const uniqueLocations = useMemo(() => {
    if (!jobs) return [];
    return [...new Set(jobs.map((j) => j.location))].sort();
  }, [jobs]);

  const handleDelete = async (obj: { success: boolean; message: string }) => {
    // 1. Revalidate the SWR cache to get the fresh list from Prisma
    await mutate();

    // 2. Show the Shadcn Toast
    if (obj.success) {
      showCreateToast(obj.message);
    } else {
      // Show an error toast if the backend failed
      showErrorToast('Failed to delete job');
    }
  };

  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    return jobs.filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || job.category === category;
      const matchesLocation = location === 'all' || job.location === location;
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [jobs, search, category, location]);

  const hasActiveFilters = search !== '' || category !== 'all' || location !== 'all';

  function handleReset() {
    setSearch('');
    setCategory('all');
    setLocation('all');
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-card sticky top-0 z-30 border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary flex size-9 items-center justify-center rounded-lg">
              <BriefcaseIcon className="text-primary-foreground size-5" />
            </div>
            <div>
              <h1 className="text-foreground text-lg font-semibold leading-tight">
                Job Board Admin
              </h1>
              <p className="text-muted-foreground hidden text-sm sm:block">
                Manage your job postings
              </p>
            </div>
          </div>
          <CreateJobDialog onJobCreated={() => mutate()} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Stats Bar */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="bg-card flex items-center gap-3 rounded-lg border px-4 py-3">
              <div className="bg-primary/10 flex size-8 items-center justify-center rounded-md">
                <BriefcaseIcon className="text-primary size-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                  Total Jobs
                </p>
                <div className="text-foreground text-xl font-bold leading-none">
                  {isLoading ? <Skeleton className="mt-1 h-5 w-8" /> : (jobs?.length ?? 0)}
                </div>
              </div>
            </div>
            <div className="bg-card flex items-center gap-3 rounded-lg border px-4 py-3">
              <div className="bg-success/10 flex size-8 items-center justify-center rounded-md">
                <svg
                  className="text-success size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                  Showing
                </p>
                <div className="text-foreground text-xl font-bold leading-none">
                  {isLoading ? <Skeleton className="mt-1 h-5 w-8" /> : filteredJobs.length}
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6">
            <JobFilters
              search={search}
              onSearchChange={setSearch}
              category={category}
              onCategoryChange={setCategory}
              location={location}
              onLocationChange={setLocation}
              locations={uniqueLocations}
              onReset={handleReset}
              hasActiveFilters={hasActiveFilters}
            />
          </div>

          {/* Job Table */}
          {isLoading ? (
            <div className="flex flex-col gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-full rounded-lg" />
              ))}
            </div>
          ) : (
            <JobTable jobs={filteredJobs} onDelete={handleDelete} />
          )}
        </div>
      </main>
    </div>
  );
}
