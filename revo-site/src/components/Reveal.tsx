import type { PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'
import clsx from './clsx'

export default function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
            break
          }
        }
      },
      { root: null, threshold: 0.15 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={clsx('reveal', visible && 'is-visible', className)}>
      {children}
    </div>
  )
}
