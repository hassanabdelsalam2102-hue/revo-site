import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'
import { HighlightedButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import BubbleBackground from '../components/BubbleBackground'

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
      'Share examples of converted leads vs. bad leads to calibrate our approach',
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
  const navigate  = useNavigate();
  return (
    <>
    <BubbleBackground>
      <Section className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">A managed workflow you can trust.</h1>
            <p className="mt-4 text-slate-300 sm:text-lg">
              Clear steps. Clean reporting. Calm optimization. Here’s what a typical launch + weekly loop looks like.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <HighlightedButton onClick={() => navigate('/contact')}>Book a call</HighlightedButton>
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
            <p className="mt-3 text-slate-300">
              A simple sequence that keeps expectations aligned and execution consistent.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 mt-10 md:grid-cols-2">
          {steps.map(([title, items], idx) => (
            <Reveal key={`${String(title)}-${idx}`}>
              <Card>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{title}</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
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
              <div className="text-sm font-semibold text-white">Weekly snapshot format (example)</div>
              <p className="mt-2 text-sm text-slate-300">
                A consistent format so you can scan quickly and stay confident in the process.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Topline metrics (contact rate, conversations, leads)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Objections + what’s changing next week (provided on a meeting)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Notes on list quality + recommended segments (provided on a meeting)</span>
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section >
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What we need from you</h2>
            <p className="mt-3 text-slate-300">
              The system works best when follow-up is fast and feedback is clear.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 mt-10 md:grid-cols-2">
          {needs.map(([title, items], nIdx) => (
            <Reveal key={`${String(title)}-${nIdx}`}>
              <Card>
                <div className="text-lg font-bold text-white">{title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
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

        <div className="flex flex-wrap gap-3 mt-10">
          <HighlightedButton onClick={() => navigate('/contact')}>Book a call</HighlightedButton>
          <LinkButton to="/results" variant="secondary">
            See results expectations
          </LinkButton>
        </div>
      </Section>
    </BubbleBackground>
    </>
  )
}
