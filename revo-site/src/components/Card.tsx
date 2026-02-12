import type { PropsWithChildren } from 'react'
import clsx from './clsx'

export default function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx('rounded-2xl border border-slate-200 bg-white p-6 shadow-sm', className)}>{children}</div>
  )
}
