import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { answer, answerTopic, type BotReply } from '../lib/chatEngine'
import { ChatIcon, CloseIcon, SendIcon } from './Icons'

interface Msg {
  id: number
  role: 'user' | 'bot'
  text: string
  followups?: BotReply['followups']
}

let counter = 0
const nextId = () => ++counter

export default function Chatbot() {
  const { lang, t } = useLang()
  const c = t.chat
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const scroller = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timer = useRef<number | undefined>(undefined)

  // (re)seed greeting whenever language changes and conversation is untouched
  useEffect(() => {
    setMessages((prev) => {
      const untouched = prev.length === 0 || (prev.length === 1 && prev[0].role === 'bot')
      return untouched ? [{ id: nextId(), role: 'bot', text: c.greeting }] : prev
    })
  }, [c.greeting])

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.clearTimeout(timer.current)
    }
  }, [])

  const reply = useCallback((r: BotReply) => {
    setTyping(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { id: nextId(), role: 'bot', text: r.text, followups: r.followups }])
    }, 450 + Math.min(r.text.length, 400) * 1.5)
  }, [])

  const ask = useCallback(
    (q: string) => {
      const text = q.trim()
      if (!text || typing) return
      setMessages((m) => [...m, { id: nextId(), role: 'user', text }])
      setInput('')
      reply(answer(text, lang, c.fallback))
    },
    [typing, reply, lang, c.fallback],
  )

  const pickTopic = (topicId: string, label: string) => {
    if (typing) return
    setMessages((m) => [...m, { id: nextId(), role: 'user', text: label }])
    reply(answerTopic(topicId, lang) ?? answer(label, lang, c.fallback))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    ask(input)
  }

  const reset = () => {
    window.clearTimeout(timer.current)
    setTyping(false)
    setMessages([{ id: nextId(), role: 'bot', text: c.greeting }])
  }

  const showSuggestions = messages.length <= 1

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={c.open}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-xl shadow-brand-500/30 transition hover:scale-105 sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/50" aria-hidden="true" />
          <ChatIcon className="relative h-6 w-6" />
        </button>
      )}

      {open && (
        <section
          role="dialog"
          aria-label={c.title}
          className="fixed inset-x-3 bottom-3 z-50 flex h-[min(640px,calc(100dvh-1.5rem))] animate-pop flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-2xl shadow-sky-200/60 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[400px]"
        >
          <header className="flex items-center gap-3 bg-gradient-to-r from-brand-500 to-cyan-500 px-4 py-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25 text-lg" aria-hidden="true">🎓</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-white">{c.title}</p>
              <p className="truncate text-xs text-white/80">{c.subtitle}</p>
            </div>
            <button type="button" onClick={reset} className="rounded-lg px-2 py-1 text-xs font-semibold text-white/90 hover:bg-white/20">
              {c.clear}
            </button>
            <button type="button" onClick={() => setOpen(false)} aria-label={c.close} className="rounded-lg p-1.5 text-white hover:bg-white/20">
              <CloseIcon className="h-5 w-5" />
            </button>
          </header>

          <div ref={scroller} className="flex-1 space-y-4 overflow-y-auto px-4 py-4 bg-sky-50/30" aria-live="polite">
            {messages.map((m) => (
              <div key={m.id} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-br-md bg-brand-500 text-white shadow-sm shadow-brand-500/20'
                      : 'rounded-bl-md border border-sky-100 bg-white text-slate-700 shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
                {m.followups && m.followups.length > 0 && (
                  <div className="mt-2 flex max-w-[92%] flex-wrap gap-1.5">
                    {m.followups.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => pickTopic(f.id, f.label)}
                        className="rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-600 transition hover:bg-brand-50"
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-1.5 pl-1" role="status" aria-label={c.typing}>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 animate-bounce rounded-full bg-brand-300"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}

            {showSuggestions && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {c.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="border-t border-sky-100 p-3 bg-white">
            <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 py-1.5 pl-4 pr-1.5 focus-within:border-brand-400">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={c.placeholder}
                aria-label={c.placeholder}
                maxLength={300}
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label={c.send}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white transition enabled:hover:bg-brand-600 disabled:opacity-40"
              >
                <SendIcon className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-slate-400">{c.disclaimer}</p>
          </form>
        </section>
      )}
    </>
  )
}
