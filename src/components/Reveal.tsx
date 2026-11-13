import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../lib/useReveal'

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useReveal<HTMLDivElement>()
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {}
  return (
    <div ref={ref} style={style} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
