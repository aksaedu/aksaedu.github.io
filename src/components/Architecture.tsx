import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function Diagram({ mode }: { mode: number }) {
  const cloud = mode >= 1
  const localOnly = mode === 0
  const cloudOnly = mode === 2
  return (
    <svg viewBox="0 0 560 330" className="h-auto w-full" role="img" aria-label="Deployment diagram">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10z" fill="#0ea5e9" />
        </marker>
      </defs>

      {/* devices */}
      <g opacity={cloudOnly ? 0.35 : 1}>
        <rect x="16" y="120" width="140" height="90" rx="14" fill="#f0f9ff" stroke="#bae6fd" />
        <text x="86" y="148" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="700">IoT / RFID</text>
        <text x="86" y="170" textAnchor="middle" fill="#64748b" fontSize="11">ESP32 · Kiosk · POS</text>
        <text x="86" y="190" textAnchor="middle" fill="#64748b" fontSize="11">Whitelist + log</text>
        <path d="M156 165h66" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arr)" strokeDasharray="5 4">
          <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.2s" repeatCount="indefinite" />
        </path>
        <text x="189" y="156" textAnchor="middle" fill="#0ea5e9" fontSize="10" fontFamily="monospace">MQTT</text>
      </g>

      {/* local server */}
      <g opacity={cloudOnly ? 0.35 : 1}>
        <rect x="224" y="60" width="190" height="210" rx="16" fill="#f8faff" stroke="#0ea5e9" strokeWidth="2" />
        <text x="319" y="86" textAnchor="middle" fill="#0284c7" fontSize="12" fontWeight="700">LOCAL SERVER</text>
        {['Next.js UI', 'FastAPI + AI', 'PostgreSQL', 'Mosquitto'].map((s, i) => (
          <g key={s}>
            <rect x="244" y={98 + i * 40} width="150" height="30" rx="8" fill="#e0f2fe" stroke="#bae6fd" />
            <text x="319" y={118 + i * 40} textAnchor="middle" fill="#0f172a" fontSize="12">{s}</text>
          </g>
        ))}
      </g>

      {/* cloud */}
      <g opacity={cloud ? 1 : 0.18}>
        <path d="M414 165h50" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arr)" strokeDasharray="5 4">
          {cloud && <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.2s" repeatCount="indefinite" />}
        </path>
        <text x="439" y="156" textAnchor="middle" fill="#0ea5e9" fontSize="10" fontFamily="monospace">sync</text>
        <rect x="466" y="120" width="82" height="90" rx="14" fill="#f0f9ff" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="507" y="154" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="700">Cloud /</text>
        <text x="507" y="170" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="700">Central</text>
        <text x="507" y="190" textAnchor="middle" fill="#64748b" fontSize="10">Backup · Remote</text>
      </g>

      {/* users */}
      <g>
        <rect x="224" y="288" width="190" height="30" rx="15" fill="#e0f2fe" stroke="#bae6fd" />
        <text x="319" y="308" textAnchor="middle" fill="#334155" fontSize="11">
          {localOnly ? 'Browser / PWA · LAN' : cloudOnly ? 'Browser / PWA · Internet' : 'Browser / PWA · LAN + Internet'}
        </text>
        <path d="M319 288V272" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arr)" />
      </g>
    </svg>
  )
}

export default function Architecture() {
  const { t } = useLang()
  const a = t.arch
  const [mode, setMode] = useState(1)

  return (
    <section id="architecture" className="relative scroll-mt-16 py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-5 sm:p-8 shadow-md shadow-sky-100">
              <Diagram mode={mode} />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div role="radiogroup" aria-label={a.title} className="space-y-3">
              {a.modes.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  role="radio"
                  aria-checked={mode === i}
                  onClick={() => setMode(i)}
                  className={`w-full rounded-2xl border p-5 text-left transition ${
                    mode === i ? 'border-brand-400/60 bg-brand-50 shadow-sm' : 'border-sky-100 bg-white hover:bg-sky-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${mode === i ? 'border-brand-400' : 'border-slate-300'}`}>
                      {mode === i && <span className="h-2 w-2 rounded-full bg-brand-400" />}
                    </span>
                    <span className="font-bold text-slate-800">{m.name}</span>
                  </div>
                  <p className="mt-2 pl-8 text-sm text-slate-500">{m.desc}</p>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-5 text-xl font-bold text-slate-800">{a.stackTitle}</h3>
            <div className="overflow-hidden rounded-2xl border border-sky-100 shadow-sm">
              <table className="w-full text-sm">
                <tbody>
                  {a.stack.map((s, i) => (
                    <tr key={s.layer} className={i % 2 ? 'bg-sky-50/50' : 'bg-white'}>
                      <th scope="row" className="w-32 px-5 py-3.5 text-left font-mono text-xs font-semibold uppercase tracking-wider text-brand-500">
                        {s.layer}
                      </th>
                      <td className="px-5 py-3.5 text-slate-700">{s.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="mb-5 text-xl font-bold text-slate-800">{a.offline.title}</h3>
            <ul className="space-y-3">
              {a.offline.rows.map((r) => (
                <li key={r.cond} className="rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
                  <p className="text-sm font-bold text-brand-500">{r.cond}</p>
                  <p className="mt-1 text-sm text-slate-600">{r.result}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
