import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Lang } from './content'

interface LanguageCtx {
  lang: Lang
  t: Content
  setLang: (l: Lang) => void
}

const Ctx = createContext<LanguageCtx | null>(null)
const STORAGE_KEY = 'AKSAEDU-lang'

function detectInitial(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'id' || saved === 'en') return saved
  } catch {
    /* storage unavailable */
  }
  return 'id'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'id' ? 'id' : 'en-US'
    document.title = content[lang].meta.title
  }, [lang])

  const value = useMemo(() => ({ lang, t: content[lang], setLang }), [lang, setLang])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLang(): LanguageCtx {
  const v = useContext(Ctx)
  if (!v) throw new Error('useLang must be used inside LanguageProvider')
  return v
}
