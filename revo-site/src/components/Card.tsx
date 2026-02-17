import type { PropsWithChildren } from 'react'
import clsx from './clsx'

export default function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx('rounded-2xl border border-slate-200/30 bg-cta-from/10 text-slate-300 p-6 shadow-sm', className)}>{children}</div>
  )
}
