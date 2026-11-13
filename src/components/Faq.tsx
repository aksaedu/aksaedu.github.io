import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { ChevronDown } from './Icons'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16 py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <Reveal className="mt-12 space-y-3">
          {t.faq.items.map((it, i) => {
            const isOpen = open === i
            return (
              <div key={it.q} className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-800 hover:bg-sky-50 transition"
                  >
                    {it.q}
                    <ChevronDown className={`h-5 w-5 shrink-0 text-brand-400 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  role="region"
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{it.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
