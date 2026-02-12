import type { PropsWithChildren } from 'react'
import Container from './Container'
import clsx from './clsx'

export default function Section({
  children,
  className,
  tone = 'plain',
}: PropsWithChildren<{ className?: string; tone?: 'plain' | 'alt' | 'band' }>) {
  const bg =
    tone === 'alt' ? 'bg-white' : tone === 'band' ? 'bg-slate-900 text-white' : 'bg-slate-50'
  return (
    <section className={clsx(bg, className)}>
      <Container className="py-14 sm:py-16">{children}</Container>
    </section>
  )
}
