import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Privacy() {
  const { t } = useLang()
  const p = t.privacy
  return (
    <section id="privacy" className="relative scroll-mt-16 bg-sky-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {p.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80}>
              <article className="h-full rounded-2xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-md hover:shadow-sky-100 transition">
                <div className="text-3xl" aria-hidden="true">{it.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{it.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center text-sm leading-relaxed text-amber-700">
            {p.license}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
