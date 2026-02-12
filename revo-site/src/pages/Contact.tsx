import { useEffect, useMemo, useState } from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'
import { Button } from '../components/Button'

type FormState = {
  name: string
  email: string
  phone: string
  market: string
  interest: 'Cold Calling Ops' | 'SMS Ops' | 'Hybrid Ops' | 'Not sure yet' | ''
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
    return `mailto:ops@revo.example?subject=${subject}&body=${body}`
  }, [form])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'idle' })

    if (!form.name.trim()) return setStatus({ type: 'error', msg: 'Please enter your name.' })
    if (!isEmail(form.email)) return setStatus({ type: 'error', msg: 'Please enter a valid email address.' })
    if (!form.market.trim()) return setStatus({ type: 'error', msg: 'Please enter your market.' })
    if (!form.interest) return setStatus({ type: 'error', msg: 'Please choose a service interest.' })
    if (!form.message.trim()) return setStatus({ type: 'error', msg: 'Please add a short message.' })

    setStatus({ type: 'success', msg: 'Saved locally. Use “Email instead” to send this message.' })
  }

  return (
    <>
      <Section tone="alt" className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Book a call.</h1>
            <p className="mt-4 text-slate-600 sm:text-lg">
              No backend needed — this form saves locally and shows a confirmation.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <Card>
                <div className="text-lg font-bold">Contact form</div>
                <p className="mt-2 text-sm text-slate-600">
                  Prefer email? We’ll prefill a message for you.
                </p>

                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-semibold text-slate-900">Name</span>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400/40"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="grid gap-1 text-sm">
                      <span className="font-semibold text-slate-900">Email</span>
                      <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400/40"
                        placeholder="you@email.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-semibold text-slate-900">Phone</span>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400/40"
                        placeholder="Optional, but helpful"
                      />
                    </label>

                    <label className="grid gap-1 text-sm">
                      <span className="font-semibold text-slate-900">Market</span>
                      <input
                        value={form.market}
                        onChange={(e) => setForm({ ...form, market: e.target.value })}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400/40"
                        placeholder="City / state"
                      />
                    </label>
                  </div>

                  <label className="grid gap-1 text-sm">
                    <span className="font-semibold text-slate-900">Service interest</span>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value as FormState['interest'] })}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400/40"
                    >
                      <option value="">Select one…</option>
                      <option value="Cold Calling Ops">Cold Calling Ops</option>
                      <option value="SMS Ops">SMS Ops</option>
                      <option value="Hybrid Ops">Hybrid Ops</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>

                  <label className="grid gap-1 text-sm">
                    <span className="font-semibold text-slate-900">Message</span>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="min-h-32 rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400/40"
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
                    <Button type="submit">Send</Button>
                    <a
                      href={mailto}
                      className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
                    >
                      Email instead
                    </a>
                  </div>

                  <p className="text-xs text-slate-500">
                    Email goes to <span className="font-semibold">ops@revo.example</span>. Update this later.
                  </p>
                </form>
              </Card>
            </Reveal>
          </div>

          <div className="grid gap-6">
            <Reveal>
              <Card>
                <div className="text-lg font-bold">Calendar</div>
                <p className="mt-2 text-sm text-slate-600">Add your scheduling widget here later.</p>
                <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
                  Calendly embed goes here. Replace this box with an iframe when ready.
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <div className="text-lg font-bold">What happens next</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
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

      <Section tone="alt">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">Want to see services first?</div>
              <p className="mt-2 text-slate-600">Browse scopes to make sure expectations are aligned.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton to="/services">See Services</LinkButton>
              <LinkButton to="/how-it-works" variant="secondary">
                How It Works
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
