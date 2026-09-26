import Link from 'next/link';

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  suitableFor: string[];
  capacity: string;
  process: string[];
  faqs: FaqItem[];
};

export default function ServiceDetailPage({
  eyebrow,
  title,
  description,
  image,
  benefits,
  suitableFor,
  capacity,
  process,
  faqs,
}: ServiceDetailPageProps) {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
                View all services
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
                Book a consultation
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img src={image} alt={title} loading="lazy" className="h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Overview</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Designed for efficiency, savings and long-term reliability</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {description} Our engineering approach blends site-specific analysis, premium components, accurate sizing and certified installation to deliver dependable solar performance across varied operating conditions.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">System capacity</div>
            <div className="mt-4 text-3xl font-black text-slate-900">{capacity}</div>
            <div className="mt-3 text-sm text-slate-600">Typical range based on load profile, roof condition and project goals.</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">Benefits</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Why businesses and households choose this solution</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg text-amber-700">✓</div>
                <p className="text-lg font-semibold text-slate-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Suitable for</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900">Who this solution fits best</h2>
            <ul className="mt-6 space-y-3">
              {suitableFor.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Installation process</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900">A structured, quality-first approach</h2>
            <div className="mt-6 space-y-5">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-800">Step {index + 1}</p>
                    <p className="mt-1 text-slate-600">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">FAQs</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Common questions before installation</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-slate-600 leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-8 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Next step</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Ready to make your energy smarter?</h2>
          <p className="mt-4 max-w-2xl text-slate-300">Speak with Trividha Solar for a site feasibility assessment, engineering review and tailored proposal.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
              Request a callback
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800">
              Explore other solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
