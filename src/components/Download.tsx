import { useState } from 'react'
import { REPO_URL } from '../i18n/content'
import { useLang } from '../i18n/LanguageContext'
import { ArrowRight, CheckIcon, GithubIcon } from './Icons'
import Reveal from './Reveal'

const COMMANDS = [
  `git clone ${REPO_URL}.git`,
  'cp .env.example .env   # APP_MODE=local',
  'docker compose up -d',
]

export default function Download() {
  const { t } = useLang()
  const d = t.download
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COMMANDS.join('\n'))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="download" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-x-0 top-1/2 mx-auto h-96 max-w-3xl -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="glass overflow-hidden rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-sky-100">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-500">{d.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl">{d.title}</h2>
                <p className="mt-4 text-slate-500">{d.subtitle}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-7 py-3.5 font-bold text-white transition hover:bg-brand-600 shadow-md shadow-brand-500/25"
                  >
                    <GithubIcon className="h-5 w-5" />
                    {d.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`${REPO_URL}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-sky-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-600 transition hover:bg-sky-50"
                  >
                    {d.secondary}
                  </a>
                </div>
                <p className="mt-5 font-mono text-xs text-slate-400">{d.license}</p>
              </div>

              <div>
                <div className="overflow-hidden rounded-2xl border border-sky-200 bg-slate-800 shadow-md">
                  <div className="flex items-center justify-between border-b border-slate-700 px-4 py-2.5 bg-slate-900">
                    <span className="font-mono text-xs text-slate-400">terminal</span>
                    <button
                      type="button"
                      onClick={copy}
                      className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold text-slate-300 hover:bg-slate-700 transition"
                    >
                      {copied && <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />}
                      {copied ? d.copied : d.copy}
                    </button>
                  </div>
                  <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-200">
                    {COMMANDS.map((c, i) => (
                      <div key={c}>
                        <span className="select-none text-cyan-400">$ </span>
                        {c}
                        <span className="sr-only"> ({d.steps[i]})</span>
                      </div>
                    ))}
                  </pre>
                </div>
                <ol className="mt-4 space-y-1.5 text-sm text-slate-500">
                  {d.steps.map((s, i) => (
                    <li key={s} className="flex gap-2.5">
                      <span className="font-mono text-brand-500">{i + 1}.</span>
                      {s}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs italic text-slate-400">{d.note}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
