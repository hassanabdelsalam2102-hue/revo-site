import { useEffect, useState } from "react"
import clsx from "./clsx"

export default function BubbleBackground({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 65
      const y = (e.clientY / window.innerHeight - 0.5) * 65
      setPos({ x, y })
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div className={clsx("relative min-h-screen bg-[#090f1e]", className)}>
      {/* fixed interactive layer */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <span className="bubble bubble-purple left-[10%] top-[20%] w-72 h-72"></span>
        <span className="bubble bubble-teal left-[40%] top-[50%] w-96 h-96 delay-2000"></span>
        <span className="bubble bubble-blue left-[70%] top-[30%] w-80 h-80 delay-4000"></span>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
