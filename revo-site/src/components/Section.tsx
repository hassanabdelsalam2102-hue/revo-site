import type { PropsWithChildren } from 'react'
import Container from './Container'
import clsx from './clsx'

export default function Section({
  children,
  className,
  tone = 'grad',
}: PropsWithChildren<{ className?: string; tone?: 'grad' | 'grad1' | 'band' }>) {
  const bg =
    tone === 'grad1' ? 'text-white' : tone === 'band' ? 'bg-slate-900 text-white' : 'text-white'
  return (
    <section className={clsx(bg, className)}>
      <Container className="py-3 sm:py-5">{children}</Container>
    </section>
  )
}
