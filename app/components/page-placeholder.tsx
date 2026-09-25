import Link from 'next/link';

export default function PagePlaceholder({
  title,
  description,
  ctaLabel = 'Back to home',
  ctaHref = '/',
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.06)] md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Trividha Solar</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
        <Link
          href={ctaHref}
          className="mt-8 inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          {ctaLabel}
        </Link>
      </div>
    </main>
  );
}
