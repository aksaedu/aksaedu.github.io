# AKSA EDU — Landing Page

React 19 + TypeScript + Vite + Tailwind CSS v4. Bilingual (Bahasa Indonesia / English US) with a built-in chatbot.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview
```

## Where things live

- `src/i18n/content.ts` — all page copy in `id` and `en`, plus `REPO_URL` (download link).
- `src/lib/knowledge.ts` — chatbot knowledge base (keywords + bilingual answers), derived from the project docs.
- `src/lib/chatEngine.ts` — keyword-scoring matcher. Runs fully in the browser, no API key needed.
- `src/components/` — Navbar, Hero, Features, Levels, Architecture, Privacy, Faq, Download, Footer, Chatbot.

## Customizing

- Change the repository link: edit `REPO_URL` in `src/i18n/content.ts`.
- Add a chatbot topic: append an entry to `knowledge` in `src/lib/knowledge.ts`.
- Want an LLM-backed chatbot later: keep `answer()` as the offline fallback and call your own FastAPI/Ollama endpoint first.
