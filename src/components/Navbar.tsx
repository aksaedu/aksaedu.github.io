import { useEffect, useState } from 'react'
import { REPO_URL, type Lang } from '../i18n/content'
import { useLang } from '../i18n/LanguageContext'
import { CloseIcon, GithubIcon, GlobeIcon, MenuIcon } from './Icons'

function LangSwitch() {
  const { lang, setLang, t } = useLang()
  const opts: { code: Lang; label: string }[] = [
    { code: 'id', label: 'ID' },
    { code: 'en', label: 'EN' },
  ]
  return (
    <div role="group" aria-label={t.langLabel} className="flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 p-1">
      <GlobeIcon className="ml-1.5 h-4 w-4 text-sky-400" />
      {opts.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
            lang === o.code ? 'bg-brand-500 text-white shadow shadow-brand-500/30' : 'text-sky-500 hover:text-brand-600'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#features', label: t.nav.features },
    { href: '#levels', label: t.nav.levels },
    { href: '#architecture', label: t.nav.architecture },
    { href: '#privacy', label: t.nav.privacy },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-sky-100 bg-white/90 backdrop-blur-xl shadow-sm shadow-sky-100' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-extrabold tracking-tight text-brand-600">
          <img src="/logo.png" alt="AKSA EDU logo" className="h-8 w-auto" />
          <span>
            AKSA EDU
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-brand-600">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-600 sm:inline-flex shadow-md shadow-brand-500/25"
          >
            <GithubIcon className="h-4 w-4" />
            {t.nav.download}
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 hover:bg-sky-50 lg:hidden"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-sky-100 bg-white px-5 pb-5 pt-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-600 hover:bg-sky-50 hover:text-brand-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 font-bold text-white hover:bg-brand-600"
              >
                <GithubIcon className="h-5 w-5" />
                {t.nav.download}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
