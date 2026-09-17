import type { Metadata, Viewport } from 'next';
import './globals.css';
import ConditionalNav from '@/components/ConditionalNav';
import FeedbackWidget from '@/components/FeedbackWidget';

export const metadata: Metadata = {
  title: 'PawSteps — Puppy Obedience & Tricks',
  description: 'Structured training courses and premium expert lessons for your puppy.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-dvh overflow-hidden bg-amber-100 md:h-auto md:min-h-dvh md:flex md:items-center md:justify-center md:py-10">
        <div className="flex h-dvh w-full flex-col overflow-hidden bg-amber-50 md:h-[844px] md:w-[390px] md:rounded-[48px] md:shadow-2xl">
          <main className="flex-1 overflow-y-auto flex flex-col">
            {children}
          </main>
          <FeedbackWidget />
          <ConditionalNav />
        </div>
      </body>
    </html>
  );
}
