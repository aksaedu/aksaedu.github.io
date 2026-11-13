import { REPO_URL } from '../i18n/content'
import { useLang } from '../i18n/LanguageContext'
import { GithubIcon } from './Icons'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-sky-100 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5 font-extrabold text-brand-600">
            <img src="/logo.png" alt="AKSA EDU logo" className="h-8 w-auto" />
            AKSA EDU
          </div>
          <p className="mt-3 text-sm text-slate-500">{t.footer.tagline}</p>
        </div>
        <div className="text-sm text-slate-400 md:text-right">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-slate-600 hover:text-brand-600 transition"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/aksaedu
          </a>
          <p className="mt-3">{t.footer.rights}</p>
          <p className="mt-1 max-w-sm md:ml-auto">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
