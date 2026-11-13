import Reveal from './Reveal'

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-500">
        <span className="h-px w-6 bg-brand-400/60" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
