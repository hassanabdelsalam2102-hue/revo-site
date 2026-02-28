import { useEffect, useState } from "react"
import { PopupModal } from "react-calendly"
import { HighlightedButton } from "./Button"

export default function ScheduleCall() {
  const [open, setOpen] = useState(false)
 const [mounted, setMounted] = useState(false)

 useEffect(() => {
    setMounted(true)
}, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-6 border rounded-2xl border-slate-200/30 bg-cta-from/10">
        <div>
          <h1 className="mb-2 text-lg font-bold">Schedule a Demo Call</h1>
          <p className="text-slate-300">
            Pick a time that works for you and let’s talk about your goals,
            challenges, and how we can help you scale.
          </p>
        </div>

        <HighlightedButton
          className="justify-center"
          onClick={() => setOpen(true)}
        >
          Book a Slot!
        </HighlightedButton>
      </div>

      {/* Calendly Popup */}
      {mounted && <PopupModal
        url="https://calendly.com/nour-revoeg/30min?background_color=111b3e&text_color=f3f4f6&primary_color=6d5ef6"
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.getElementById("root") as HTMLElement}
      />}
    </>
  )
}

