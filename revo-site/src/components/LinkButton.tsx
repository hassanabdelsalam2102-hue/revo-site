import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import clsx from './clsx'

export function LinkButton({
  to,
  children,
  className,
  variant = 'primary',
}: PropsWithChildren<{ to: string; className?: string; variant?: 'primary' | 'secondary' | 'ghost' }>) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-400/60'
  const styles = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    ghost: 'bg-transparent text-slate-900 hover:bg-slate-100',
  }[variant]
  return (
    <Link to={to} className={clsx(base, styles, className)}>
      {children}
    </Link>
  )
}
