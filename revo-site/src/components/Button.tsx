import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import clsx from './clsx'

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost'
  }
>

export function Button({ className, variant = 'primary', children, ...props }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-400/60'
  const styles = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    ghost: 'bg-transparent text-slate-900 hover:bg-slate-100',
  }[variant]
  return (
    <button className={clsx(base, styles, className)} {...props}>
      {children}
    </button>
  )
}
