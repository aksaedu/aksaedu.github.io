import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { CheckIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Levels() {
  const { t } = useLang()
  const l = t.levels
  const [active, setActive] = useState(0)
  const current = l.items[active]

  return (
    <section id="levels" className="relative scroll-mt-16 bg-sky-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow={l.eyebrow} title={l.title} subtitle={l.subtitle} />

        <Reveal className="mt-14">
          <div role="tablist" aria-label={l.title} className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
            {l.items.map((it, i) => (
              <button
                key={it.key}
                role="tab"
                id={`tab-${it.key}`}
                aria-selected={i === active}
                aria-controls={`panel-${it.key}`}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  i === active
                    ? `bg-gradient-to-r ${it.accent} text-white shadow-lg`
                    : 'border border-sky-200 bg-white text-slate-600 hover:bg-sky-50 hover:text-brand-600'
                }`}
              >
                {it.key}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${current.key}`}
            aria-labelledby={`tab-${current.key}`}
            key={current.key}
            className="glass relative mx-auto mt-8 max-w-4xl animate-pop overflow-hidden rounded-3xl p-8 sm:p-10 shadow-lg shadow-sky-100"
          >
            <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${current.accent} opacity-10 blur-3xl`} aria-hidden="true" />
            <div className="relative grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <span className={`inline-block rounded-lg bg-gradient-to-r ${current.accent} px-3 py-1 font-mono text-xs font-bold text-white`}>
                  {current.key}
                </span>
                <h3 className="mt-4 text-3xl font-extrabold text-slate-800">{current.name}</h3>
                <p className="mt-2 text-slate-500">{current.focus}</p>
              </div>
              <ul className="space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
                    <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${current.accent}`}>
                      <CheckIcon className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="text-slate-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-24">
          <SectionHeader eyebrow={t.flow.eyebrow} title={t.flow.title} />
          <ol className="relative mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent md:block" aria-hidden="true" />
            {t.flow.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <li className="relative list-none text-center md:px-2">
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 font-mono text-sm font-bold text-white ring-8 ring-white shadow-md shadow-brand-500/20">
                    {i + 1}
                  </div>
                  <p className="mt-4 font-mono text-xs uppercase tracking-widest text-brand-500">{s.time}</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-800">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
