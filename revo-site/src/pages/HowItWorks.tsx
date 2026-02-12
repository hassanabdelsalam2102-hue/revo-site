import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'

type Step = [title: string, items: string[]]
const steps: Step[] = [
  ['Align', ['We confirm your market, criteria, offer language, and what a “qualified lead” means.']],
  ['Setup', ['Scripts, workflows, tracking, and QA checks so execution is consistent from day one.']],
  ['Launch', ['Daily calling/texting with clear rules on list usage and messaging cadence.']],
  ['Optimize', ['Weekly snapshot reporting, insights, and practical improvements to conversion.']],
]

type Need = [title: string, items: string[]]
const needs: Need[] = [
  [
    'Speed to lead',
    [
      'Commit to responding to warm leads quickly',
      'Provide a simple “lead qualification” definition',
      'Confirm the best handoff method (call, text, CRM)',
    ],
  ],
  [
    'Follow-up + feedback',
    [
      'Tell us what lead quality looks like (good/bad examples)',
      'Share common objections you’re seeing on your side',
      'Confirm your offer language so scripts stay aligned',
    ],
  ],
]

export default function HowItWorks() {
  return (
    <>
      <Section tone="alt" className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">A managed workflow you can trust.</h1>
            <p className="mt-4 text-slate-600 sm:text-lg">
              Clear steps. Clean reporting. Calm optimization. Here’s what a typical launch + weekly loop looks like.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton to="/contact">Book a call</LinkButton>
              <LinkButton to="/services" variant="secondary">
                See services
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Step-by-step flow</h2>
            <p className="mt-3 text-slate-600">
              A simple sequence that keeps expectations aligned and execution consistent.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {steps.map(([title, items], idx) => (
            <Reveal key={`${String(title)}-${idx}`}>
              <Card>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">{title}</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {items.map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                            ✓
                          </span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Reveal>
            <Card>
              <div className="text-sm font-semibold text-slate-900">Weekly snapshot format (example)</div>
              <p className="mt-2 text-sm text-slate-600">
                A consistent format so you can scan quickly and stay confident in the process.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Topline metrics (contact rate, conversations, leads)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Objections + what’s changing next week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Notes on list quality + recommended segments</span>
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="alt">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What we need from you</h2>
            <p className="mt-3 text-slate-600">
              The system works best when follow-up is fast and feedback is clear.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {needs.map(([title, items], nIdx) => (
            <Reveal key={`${String(title)}-${nIdx}`}>
              <Card>
                <div className="text-lg font-bold">{title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {items.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                        ✓
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton to="/contact">Book a call</LinkButton>
          <LinkButton to="/results" variant="secondary">
            See results expectations
          </LinkButton>
        </div>
      </Section>
    </>
  )
}
