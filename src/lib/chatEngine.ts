import type { Lang } from '../i18n/content'
import { knowledge, smallTalk, topicLabels, type KBEntry } from './knowledge'

export interface BotReply {
  text: string
  followups: { id: string; label: string }[]
  matched: boolean
}

function normalize(s: string): string {
  return ' ' + s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9.+\-\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() + ' '
}

function score(entry: KBEntry, q: string): number {
  let total = 0
  for (const raw of entry.keywords) {
    const kw = raw.toLowerCase()
    const padded = kw.startsWith(' ') || kw.endsWith(' ')
    if (kw.length <= 3 && !padded) {
      // short tokens must match as whole words to avoid false hits
      if (q.includes(' ' + kw + ' ')) total += 2
    } else if (q.includes(kw)) {
      total += Math.min(8, 1 + kw.length / 3)
    }
  }
  return total
}

function followupsFor(entry: KBEntry, lang: Lang) {
  return (entry.next ?? [])
    .filter((id) => topicLabels[id])
    .map((id) => ({ id, label: topicLabels[id][lang] }))
}

/** Map follow-up topic ids to a canonical query entry id */
const topicToEntry: Record<string, string> = {
  features: 'features',
  offline: 'offline',
  download: 'download',
  privacy: 'privacy',
  stack: 'stack',
  license: 'license',
  levels: 'levels',
  iot: 'iot',
  ai: 'ai',
  hardware: 'hardware',
  pickup: 'pickup',
  sync: 'sync',
  roadmap: 'roadmap',
}

export function answerTopic(topicId: string, lang: Lang): BotReply | null {
  const entry = knowledge.find((e) => e.id === (topicToEntry[topicId] ?? topicId))
  if (!entry) return null
  return { text: entry.answer[lang], followups: followupsFor(entry, lang), matched: true }
}

export function answer(question: string, lang: Lang, fallback: string): BotReply {
  const q = normalize(question)

  let best: { entry: KBEntry; s: number } | null = null
  for (const entry of knowledge) {
    const s = score(entry, q)
    if (s > 0 && (!best || s > best.s)) best = { entry, s }
  }

  if (best && best.s >= 2) {
    return { text: best.entry.answer[lang], followups: followupsFor(best.entry, lang), matched: true }
  }

  for (const talk of smallTalk) {
    if (talk.keywords.some((k) => q.includes(' ' + k + ' ') || q.startsWith(' ' + k))) {
      return { text: talk.answer[lang], followups: [], matched: true }
    }
  }

  return {
    text: fallback,
    followups: [
      { id: 'features', label: topicLabels.features[lang] },
      { id: 'offline', label: topicLabels.offline[lang] },
      { id: 'download', label: topicLabels.download[lang] },
      { id: 'privacy', label: topicLabels.privacy[lang] },
    ],
    matched: false,
  }
}
