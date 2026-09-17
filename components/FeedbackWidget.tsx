'use client';
import { useState, FormEvent } from 'react';
import { StarIcon } from '@/components/Icon';

// ── To activate: sign up free at formspree.io → create a form → paste the ID below ──
const FORMSPREE_ID = 'YOUR_FORM_ID';
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

const RATINGS = [
  { key: 'overall',       label: 'Overall rating'          },
  { key: 'customization', label: 'How customizable?'       },
  { key: 'simplicity',    label: 'Ease of use'             },
  { key: 'design',        label: 'Look & feel'             },
];

const WOULD_USE = ['Definitely', 'Probably', 'Maybe', 'No'] as const;

const FEATURES = [
  'Multi-pet switcher',
  'Adaptive daily routines',
  'Course library',
  'Clicker tool',
  'Community feed',
  'PawPoints rewards',
];

function Stars({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          className="p-0.5"
        >
          <StarIcon
            size={22}
            className={(hover || value) >= n ? 'text-amber-500' : 'text-stone-200'}
          />
        </button>
      ))}
    </div>
  );
}

export default function FeedbackWidget() {
  const [open,      setOpen]      = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [ratings,   setRatings]   = useState<Record<string, number>>({});
  const [wouldUse,  setWouldUse]  = useState('');
  const [bestFeature, setBestFeature] = useState('');
  const [comment,   setComment]   = useState('');
  const [instagram, setInstagram] = useState('');

  function setRating(key: string, val: number) {
    setRatings(prev => ({ ...prev, [key]: val }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        overall_rating:    ratings['overall']       ?? 0,
        customization:     ratings['customization'] ?? 0,
        ease_of_use:       ratings['simplicity']    ?? 0,
        look_and_feel:     ratings['design']        ?? 0,
        would_use:         wouldUse,
        favorite_feature:  bestFeature,
        comments:          comment,
        instagram:         instagram || '(not provided)',
        _subject:          'PawSteps App Feedback',
        _replyto:          instagram ? `${instagram} (Instagram)` : 'anonymous',
      };
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silently fail — still show thank you for demo
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  function close() {
    setOpen(false);
    setTimeout(() => setSubmitted(false), 500);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-[76px] right-3 z-40 flex items-center gap-1.5 rounded-full bg-amber-600 px-3.5 py-2 shadow-lg text-white text-[11px] font-bold active:bg-amber-700 transition-colors"
        aria-label="Leave feedback"
      >
        <StarIcon size={13} className="text-amber-200"/>
        Leave a Review
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/50"
          onClick={e => { if (e.target === e.currentTarget) close(); }}
        >
          <div className="w-full max-h-[92vh] overflow-y-auto rounded-t-3xl bg-white shadow-2xl">

            {submitted ? (
              /* ── Thank you state ── */
              <div className="flex flex-col items-center gap-4 px-6 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <span className="text-3xl">🐾</span>
                </div>
                <h2 className="text-xl font-extrabold text-amber-900">Thanks for the feedback!</h2>
                <p className="text-sm text-stone-500">Your responses help shape PawSteps before launch.</p>
                <button
                  onClick={close}
                  className="mt-2 rounded-2xl bg-amber-600 px-8 py-3 text-sm font-bold text-white active:bg-amber-700"
                >
                  Back to App
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Header */}
                <div className="flex items-center justify-between px-5 pt-5 pb-3">
                  <div>
                    <h2 className="text-base font-extrabold text-amber-900">Help shape PawSteps 🐾</h2>
                    <p className="text-[11px] text-stone-400">Quick 2-min survey — anonymous & optional</p>
                  </div>
                  <button type="button" onClick={close} className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-500 text-sm font-bold">✕</button>
                </div>

                <div className="px-5 pb-8 space-y-5">

                  {/* Star ratings */}
                  <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 space-y-3">
                    {RATINGS.map(({ key, label }) => (
                      <div key={key} className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold text-stone-700 flex-1">{label}</span>
                        <Stars value={ratings[key] ?? 0} onChange={v => setRating(key, v)}/>
                      </div>
                    ))}
                  </div>

                  {/* Would you use it? */}
                  <div>
                    <p className="mb-2 text-xs font-bold text-amber-900">Would you actually use PawSteps?</p>
                    <div className="flex gap-2">
                      {WOULD_USE.map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setWouldUse(opt)}
                          className={`flex-1 rounded-xl py-2.5 text-[11px] font-bold transition-colors ${
                            wouldUse === opt
                              ? 'bg-amber-600 text-white'
                              : 'bg-amber-100 text-amber-800 active:bg-amber-200'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Favorite feature */}
                  <div>
                    <p className="mb-2 text-xs font-bold text-amber-900">Which feature stands out most?</p>
                    <div className="flex flex-wrap gap-2">
                      {FEATURES.map(f => (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setBestFeature(prev => prev === f ? '' : f)}
                          className={`rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                            bestFeature === f
                              ? 'bg-amber-600 text-white'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <p className="mb-1.5 text-xs font-bold text-amber-900">Anything you&apos;d change or add?</p>
                    <textarea
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                      placeholder="I'd love to see…"
                      rows={3}
                      maxLength={500}
                      className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm text-stone-700 placeholder-stone-300 outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  {/* Instagram handle */}
                  <div>
                    <p className="mb-1.5 text-xs font-bold text-amber-900">Instagram handle <span className="font-normal text-stone-400">(optional — to DM you updates)</span></p>
                    <input
                      type="text"
                      value={instagram}
                      onChange={e => setInstagram(e.target.value)}
                      placeholder="@yourhandle"
                      maxLength={40}
                      className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm text-stone-700 placeholder-stone-300 outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full rounded-2xl py-4 text-sm font-bold text-white shadow-md transition-colors ${
                      loading ? 'bg-amber-400' : 'bg-amber-600 active:bg-amber-700'
                    }`}
                  >
                    {loading ? 'Sending…' : 'Send Feedback'}
                  </button>

                  <p className="text-center text-[10px] text-stone-400">Responses go to the PawSteps team. 100% anonymous if no handle provided.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
