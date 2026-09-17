import type { Metadata } from 'next';
import './globals.css';
import ConditionalNav from '@/components/ConditionalNav';
import FeedbackWidget from '@/components/FeedbackWidget';

export const metadata: Metadata = {
  title: 'PawSteps — Puppy Obedience & Tricks',
  description: 'Structured training courses and premium expert lessons for your puppy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-amber-100 md:flex md:items-center md:justify-center md:py-10">
        <div className="flex w-full flex-col overflow-hidden bg-amber-50 md:h-[844px] md:w-[390px] md:rounded-[48px] md:shadow-2xl">
          {/* Status Bar */}
          <div className="flex h-10 shrink-0 items-center justify-between bg-amber-50 px-5">
            <span className="text-sm font-semibold text-amber-900">9:41</span>
            <div className="flex items-center gap-1.5 text-amber-800">
              <span className="text-[11px] font-semibold">5G</span>
              <div className="flex items-end gap-px" style={{ height: '12px' }}>
                <div className="w-[3px] rounded-sm bg-amber-700" style={{ height: '40%' }} />
                <div className="w-[3px] rounded-sm bg-amber-700" style={{ height: '55%' }} />
                <div className="w-[3px] rounded-sm bg-amber-700" style={{ height: '75%' }} />
                <div className="w-[3px] rounded-sm bg-amber-700" style={{ height: '100%' }} />
              </div>
              <div className="flex items-center gap-px">
                <div className="flex h-[12px] w-[22px] items-center rounded-[3px] border border-amber-700 px-[2px]">
                  <div className="h-[7px] w-full rounded-[1px] bg-amber-700" />
                </div>
                <div className="h-[5px] w-[2px] rounded-r-[1px] bg-amber-500" />
              </div>
            </div>
          </div>
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
