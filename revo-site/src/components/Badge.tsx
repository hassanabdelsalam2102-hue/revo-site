import type { PropsWithChildren } from 'react'
import clsx from './clsx'

export default function Badge({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm',
        className,
      )}
    >
      {children}
    </span>
  )
}
