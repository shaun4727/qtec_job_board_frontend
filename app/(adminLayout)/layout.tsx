import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Board Admin',
  description: 'Create, filter, and manage job postings',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 min-h-screen transition-[margin-left] duration-300 ml-(--sidebar-width)">
      <Toaster position="bottom-right" />
      {children}
    </main>
  );
}
