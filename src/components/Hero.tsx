import { REPO_URL } from '../i18n/content'
import { useLang } from '../i18n/LanguageContext'
import { ArrowRight, GithubIcon } from './Icons'

function Mockup() {
  const { lang } = useLang()
  const id = lang === 'id'
  const rows = [
    { name: 'Alya R.', lvl: 'SD', t: '06:52', ok: true },
    { name: 'Bima P.', lvl: 'TK', t: '06:55', ok: true },
    { name: 'Citra W.', lvl: 'SMK', t: '—', ok: false },
  ]
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-cyan-400/15 to-sky-300/20 blur-3xl" aria-hidden="true" />
      <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-sky-200/60">
        <div className="flex items-center gap-2 border-b border-sky-100 px-4 py-3 bg-white/60">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 rounded-md bg-sky-100 px-3 py-1 font-mono text-[11px] text-sky-500">http://aksaedu.sch.local</span>
          <span className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            LAN
          </span>
        </div>

        <div className="grid gap-4 p-5 bg-white/50">
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: '98.2%', l: id ? 'Kehadiran' : 'Attendance' },
              { v: '1,248', l: id ? 'Siswa' : 'Students' },
              { v: '12', l: id ? 'Perangkat IoT' : 'IoT devices' },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-sky-100 bg-white p-3 shadow-sm">
                <div className="text-xl font-extrabold text-brand-600">{s.v}</div>
                <div className="text-[11px] text-slate-400">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-3">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">{id ? 'Gerbang · tap kartu' : 'Gate · card taps'}</span>
              <span className="font-mono text-cyan-500">MQTT</span>
            </div>
            <ul className="space-y-1.5">
              {rows.map((r) => (
                <li key={r.name} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-sm shadow-sm">
                  <span className="flex items-center gap-2.5">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${r.ok ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                      {r.lvl}
                    </span>
                    <span className="text-slate-700">{r.name}</span>
                  </span>
                  <span className={`font-mono text-xs ${r.ok ? 'text-emerald-600' : 'text-amber-600'}`}>{r.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
            <span className="mt-0.5 text-lg" aria-hidden="true">📲</span>
            <p className="text-xs leading-relaxed text-emerald-700">
              {id ? 'Ananda Alya telah tiba di sekolah pukul 06:52 WIB.' : 'Alya has arrived at school at 06:52 AM.'}
            </p>
          </div>
        </div>
      </div>

      <div className="glass absolute -bottom-5 -left-3 hidden animate-float rounded-xl px-4 py-3 shadow-lg shadow-sky-200/50 sm:block">
        <div className="text-[11px] text-slate-400">{id ? 'Internet terputus' : 'Internet offline'}</div>
        <div className="text-sm font-bold text-emerald-600">{id ? 'Tetap berjalan ✓' : 'Still running ✓'}</div>
      </div>
      <div className="glass absolute -right-3 -top-4 hidden animate-float rounded-xl px-4 py-3 shadow-lg shadow-sky-200/50 [animation-delay:-3s] sm:block">
        <div className="text-[11px] text-slate-400">AI · Edge</div>
        <div className="text-sm font-bold text-brand-500">Face → vector</div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36 bg-gradient-to-b from-sky-50 to-white">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32">
        <div>
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-600">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {t.hero.badge}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
            {t.hero.title1} <span className="text-gradient">{t.hero.titleGradient}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">{t.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-brand-500/40 hover:brightness-110"
            >
              <GithubIcon className="h-5 w-5" />
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-7 py-3.5 font-semibold text-brand-600 transition hover:border-brand-300 hover:bg-sky-50 shadow-sm"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2.5">
            {t.hero.chips.map((c) => (
              <li key={c} className="rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <Mockup />
      </div>

      <div className="relative border-y border-sky-100 bg-sky-50/50">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-3xl font-extrabold text-brand-600 sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-slate-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
