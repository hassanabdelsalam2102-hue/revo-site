import { useEffect, useMemo, useState } from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'
import { HighlightedButton } from '../components/Button'
import BubbleBackground from '../components/BubbleBackground'
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import MyApp from '../components/Calendar'

type FormState = {
  name: string
  email: string
  phone: string
  market: string
  interest: string
  message: string
}

const STORAGE_KEY = 'revo_contact_form_v1'

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  market: '',
  interest: '',
  message: '',
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<{ type: 'idle' | 'error' | 'success'; msg?: string }>({ type: 'idle' })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as Partial<FormState>
      setForm((f) => ({ ...f, ...parsed }))
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form))
    } catch {
      // ignore
    }
  }, [form])

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('REVO — Inquiry')
    const body = encodeURIComponent(
      [
        `Name: ${form.name || ''}`,
        `Email: ${form.email || ''}`,
        `Phone: ${form.phone || ''}`,
        `Market: ${form.market || ''}`,
        `Service interest: ${form.interest || ''}`,
        '',
        form.message || '',
      ].join('\n'),
    )
    return `mailto:info@revoeg.com?subject=${subject}&body=${body}`
  }, [form])

  const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus({ type: 'idle' })

  // validation
  if (!form.name.trim()) return setStatus({ type: 'error', msg: 'Please enter your name.' })
  if (!isEmail(form.email)) return setStatus({ type: 'error', msg: 'Please enter a valid email address.' })
  if (!form.market.trim()) return setStatus({ type: 'error', msg: 'Please enter your market.' })
  if (!form.interest) return setStatus({ type: 'error', msg: 'Please choose a service interest.' })
  if (!form.message.trim()) return setStatus({ type: 'error', msg: 'Please add a short message.' })

  try {
    await fetch("https://hook.eu1.make.com/fqpikvmjaq8f0525pe4yau36tb27o6aw", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: form.name,
    email: form.email,
    phone: form.phone,
    market: form.market,
    interest: form.interest,
    message: form.message,
    date: new Date().toISOString(),
  }),
})


    setStatus({ type: 'success', msg: 'Sent! Looking forward to connecting with you.' })
    setForm(initial)
    localStorage.removeItem(STORAGE_KEY)

  } catch (error) {
    setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' })
  }
}


  return (
    <>
    <BubbleBackground>
      <Section className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Book a call.</h1>
            <p className="mt-4 text-slate-300 sm:text-lg">
              We’ll walk through your goals, market, and how we can help. No hard sell — just a conversation.
              All you need is fill the form below.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <Card>
                <div className="text-lg font-bold text-white">Contact form</div>
                <p className="mt-2 text-sm text-slate-300">
                  Prefer email? We’ll prefill a message for you.
                </p>

                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-semibold text-white">Name</span>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="px-3 py-2 border outline-none bg-cta-to/15 text-slate-300 rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-400/40"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="grid gap-1 text-sm">
                      <span className="font-semibold text-white">Email</span>
                      <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="px-3 py-2 border outline-none bg-cta-to/15 text-slate-300 rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-400/40"
                        placeholder="you@email.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-semibold text-white">Phone</span>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="px-3 py-2 border outline-none bg-cta-to/15 text-slate-300 rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-400/40"
                        placeholder="Optional, but helpful"
                      />
                    </label>

                    <label className="grid gap-1 text-sm">
                      <span className="font-semibold text-white">Market</span>
                      <input
                        value={form.market}
                        onChange={(e) => setForm({ ...form, market: e.target.value })}
                        className="px-3 py-2 border outline-none bg-cta-to/15 text-slate-300 rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-400/40"
                        placeholder="City / state"
                      />
                    </label>
                  </div>

                  <label className="grid gap-1 text-sm">
                    <span className="font-semibold text-white">Service interest</span>
                    <Dropdown
                    options={[
                      { value: "", label: "Select one…" },
                      { value: "Cold Calling Ops", label: "Cold Calling Ops" },
                      { value: "SMS Ops", label: "SMS Ops" },
                      { value: "Hybrid Ops", label: "Hybrid Ops" },
                      { value: "Not sure yet", label: "Not sure yet" },
                    ]}
                    value={form.interest}
                    onChange={(opt) =>
                      setForm({ ...form, interest: opt.value })
                    }
                    placeholder="Select one…"
                    className="dropdown"
                    controlClassName="dropdown-control"
                    menuClassName="dropdown-menu"
                    arrowClassName="dropdown-arrow"
                  />
                  </label>

                  <label className="grid gap-1 text-sm">
                    <span className="font-semibold text-white">Message</span>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="px-3 py-2 border outline-none bg-cta-to/15 text-slate-300 min-h-32 rounded-xl border-slate-200 focus:ring-2 focus:ring-slate-400/40"
                      placeholder="A quick note on your criteria, market, and goals…"
                    />
                  </label>

                  {status.type !== 'idle' && (
                    <div
                      className={
                        status.type === 'success'
                          ? 'rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800'
                          : 'rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800'
                      }
                    >
                      {status.msg}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <HighlightedButton type="submit">Send</HighlightedButton>
                    <a
                      href={mailto}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200"
                    >
                      Email instead
                    </a>
                  </div>

                  <p className="text-xs text-slate-500">
                    Email goes to <span className="font-semibold">info@revoeg.com</span>
                  </p>
                </form>
              </Card>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal>
              <MyApp />
            </Reveal>
            <Reveal>
              <Card>
                <div className="text-lg font-bold text-white">What happens next</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                      ✓
                    </span>
                    <span>Fit check + scope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                      ✓
                    </span>
                    <span>Timeline + first 30-day plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                      ✓
                    </span>
                    <span>Next steps if aligned</span>
                  </li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section >
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">Want to see services first?</div>
              <p className="mt-2 text-slate-300">Browse scopes to make sure expectations are aligned.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton to="/services" variant="primary">See Services</LinkButton>
              <LinkButton to="/how-it-works" variant="secondary">
                How It Works
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>
        </BubbleBackground>
    </>
  )
}
