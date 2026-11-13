import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Features() {
  const { t } = useLang()
  const f = t.features
  return (
    <section id="features" className="relative scroll-mt-16 py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {f.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-md hover:shadow-sky-100">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-400/15 text-2xl ring-1 ring-sky-200" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
