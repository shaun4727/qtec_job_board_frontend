'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2Icon, MapPinIcon, BuildingIcon } from 'lucide-react';
import type { Job } from '@/lib/types';
import { deleteJobApi } from '@/services/dashboard/dashboard-api';

interface JobTableProps {
  jobs: Job[];
  onDelete: (obj: { success: boolean; message: string }) => void;
}

const categoryColors: Record<string, string> = {
  Sales: 'bg-primary/10 text-primary border-primary/20',
  Engineering: 'bg-success/10 text-success border-success/20',
  Marketing: 'bg-chart-5/20 text-chart-5 border-chart-5/20',
  Design: 'bg-chart-4/20 text-chart-4 border-chart-4/20',
  Product: 'bg-chart-2/20 text-chart-2 border-chart-2/20',
  Operations: 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20',
  Finance: 'bg-chart-1/20 text-chart-1 border-chart-1/20',
  'Human Resources': 'bg-chart-3/20 text-chart-3 border-chart-3/20',
  'Customer Support': 'bg-primary/10 text-primary border-primary/20',
};

export function JobTable({ jobs, onDelete }: JobTableProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const jobToDelete = jobs.find((j) => j.id === deleteId);

  async function handleConfirmDelete(e: React.MouseEvent) {
    e.preventDefault();
    if (!deleteId) return;
    setDeleting(true);
    try {
      const res = await deleteJobApi(deleteId);

      if (res.success) {
        onDelete({ success: true, message: res.message });
      } else {
        onDelete({ success: true, message: 'Job deletion failed!' });
      }
    } finally {
      setDeleting(false);
      setDeleteId(null);
    }
  }

  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16">
        <div className="bg-muted mb-4 flex size-12 items-center justify-center rounded-full">
          <BuildingIcon className="text-muted-foreground size-6" />
        </div>
        <p className="text-foreground font-medium">No jobs found</p>
        <p className="text-muted-foreground mt-1 text-sm">
          Create a new job or adjust your filters.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[280px]">Job Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date Posted</TableHead>
              <TableHead className="w-[80px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>
                  <div>
                    <p className="text-foreground font-medium">{job.title}</p>
                    <p className="text-muted-foreground mt-0.5 line-clamp-1 text-xs">
                      {job.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-foreground">{job.company}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <MapPinIcon className="text-muted-foreground size-3.5" />
                    <span className="text-muted-foreground text-sm">{job.location}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={categoryColors[job.category] || ''}>
                    {job.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground text-sm">
                    {new Date(job.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDeleteId(job.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2Icon className="size-4" />
                    <span className="sr-only">Delete {job.title}</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {jobs.map((job) => (
          <div key={job.id} className="bg-card flex flex-col gap-3 rounded-lg border p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-foreground truncate font-medium">{job.title}</p>
                <p className="text-muted-foreground mt-0.5 text-sm">{job.company}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDeleteId(job.id)}
                className="text-muted-foreground hover:text-destructive -mt-1 -mr-2 shrink-0"
              >
                <Trash2Icon className="size-4" />
                <span className="sr-only">Delete {job.title}</span>
              </Button>
            </div>
            <p className="text-muted-foreground line-clamp-2 text-sm">{job.description}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={categoryColors[job.category] || ''}>
                {job.category}
              </Badge>
              <div className="flex items-center gap-1">
                <MapPinIcon className="text-muted-foreground size-3" />
                <span className="text-muted-foreground text-xs">{job.location}</span>
              </div>
              <span className="text-muted-foreground text-xs">
                {new Date(job.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Job Posting</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{' '}
              <strong className="text-foreground">{jobToDelete?.title}</strong> at{' '}
              <strong className="text-foreground">{jobToDelete?.company}</strong>? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              disabled={deleting}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              {deleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
