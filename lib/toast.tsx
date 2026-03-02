import { toast } from 'sonner';
import { CheckCircle2Icon, Trash2Icon, PlusCircleIcon, AlertCircleIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ToastOptions {
  title: string;
  description?: string;
  icon?: ReactNode;
  duration?: number;
}

export function showSuccessToast({ title, description, icon, duration = 4000 }: ToastOptions) {
  toast.custom(
    (id) => (
      <div
        className="bg-card text-card-foreground flex w-[360px] items-start gap-3 rounded-lg border p-4 shadow-lg"
        role="status"
        aria-live="polite"
      >
        <div className="bg-success/10 flex size-9 shrink-0 items-center justify-center rounded-full">
          {icon || <CheckCircle2Icon className="text-success size-5" />}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <p className="text-foreground text-sm font-semibold">{title}</p>
          {description && (
            <p className="text-muted-foreground text-sm leading-snug">{description}</p>
          )}
        </div>
        <button
          onClick={() => toast.dismiss(id)}
          className="text-muted-foreground hover:text-foreground -mt-0.5 -mr-1 shrink-0 p-1 transition-colors"
          aria-label="Dismiss notification"
        >
          <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    ),
    { duration }
  );
}

export function showDeleteToast(jobTitle: string) {
  showSuccessToast({
    title: 'Job deleted',
    description: `"${jobTitle}" has been permanently removed.`,
    icon: <Trash2Icon className="text-destructive size-5" />,
  });
}

export function showCreateToast(jobTitle: string) {
  showSuccessToast({
    title: 'Job created',
    description: `"${jobTitle}" has been published successfully.`,
    icon: <PlusCircleIcon className="text-success size-5" />,
  });
}

export function showErrorToast(message: string) {
  toast.custom(
    (id) => (
      <div
        className="bg-card text-card-foreground flex w-[360px] items-start gap-3 rounded-lg border border-destructive/20 p-4 shadow-lg"
        role="alert"
        aria-live="assertive"
      >
        <div className="bg-destructive/10 flex size-9 shrink-0 items-center justify-center rounded-full">
          <AlertCircleIcon className="text-destructive size-5" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <p className="text-foreground text-sm font-semibold">Something went wrong</p>
          <p className="text-muted-foreground text-sm leading-snug">{message}</p>
        </div>
        <button
          onClick={() => toast.dismiss(id)}
          className="text-muted-foreground hover:text-foreground -mt-0.5 -mr-1 shrink-0 p-1 transition-colors"
          aria-label="Dismiss notification"
        >
          <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    ),
    { duration: 5000 }
  );
}
