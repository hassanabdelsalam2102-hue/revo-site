import Section from '../components/Section'
import Badge from '../components/Badge'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'

// typed data shapes to avoid broad union inference (string | string[] etc.)
const heroBullets: string[] = [
  'Structured scripts and workflows',
  'Clear activity visibility',
  'Calm calibration in the first 30 days',
]

type Pillar = [string, string]
const pillars: Pillar[] = [
  ['Operations', 'We set the workflow and manage execution so outreach runs consistently week to week.'],
]

type ServiceCard = [title: string, chip: string, desc: string, bullets: string[], href: string]
const serviceCards: ServiceCard[] = [
  [
    'Call Ops',
    'Cold Calling',
    'A managed calling operation with scripts, daily execution oversight, QA, and weekly reporting.',
    ['Workflow + script support', 'QA notes + coaching feedback', 'Weekly snapshot reporting'],
    'services.html#cold-calling',
  ],
  [
    'SMS Ops',
    'Texting',
    'Managed SMS workflows with templates, inbox handling, quality checks, and weekly reporting.',
    ['Templates + sequences', 'Inbox management + qualification', 'Weekly optimization loop'],
    'services.html#sms',
  ],
  [
    'Hybrid Ops',
    'Call + SMS',
    'One managed system across both channels — faster learning, unified reporting, and better speed-to-lead.',
    ['Unified reporting', 'Shared insights + objections', 'Consistent weekly cadence'],
    'services.html#hybrid',
  ],
]

type FitColumn = [string, string[]]
const fitColumns: FitColumn[] = [
  [
    'Great fit if you…',
    [
      'Want a managed operation (not random reps)',
      'Have a defined market + acquisition criteria',
      'Can follow up quickly on warm leads',
      'Prefer calm weekly reporting and steady improvements',
      'Care about consistent tone and execution',
    ],
  ],
  [
    'Not a fit if you…',
    [
      'Expect instant deals in the first few days',
      'Don’t have time/capacity to follow up',
      'Want cheapest volume with no QA',
      'Change criteria/markets every week',
      'Don’t want visibility or feedback loops',
    ],
  ],
]

type LaunchStep = [string, string]
const launchSteps: LaunchStep[] = [
  ['Align', 'We confirm your market, criteria, offer language, and what a “qualified lead” means.'],
  ['Setup', 'Scripts, workflows, tracking, and QA checks so execution is consistent from day one.'],
  ['Launch', 'Daily calling/texting with clear rules on list usage and messaging cadence.'],
  ['Optimize', 'Weekly snapshot reporting, insights, and practical improvements to conversion.'],
]

type Faq = [string, string]
const faqs: Faq[] = [
  [
    'Do you provide the callers/texters?',
    'We manage the operation and can oversee dedicated reps as part of the engagement. The focus is consistent execution, QA, and reporting — not random coverage.',
  ],
  [
    'How quickly can we launch?',
    'Most launches start after onboarding and setup. Speed depends on list readiness, script alignment, and access to your tools (dialer/SMS/CRM).',
  ],
  [
    'What does “weekly snapshot” include?',
    'A simple recap of key KPIs, what we’re hearing in the market (objections), what we changed this week, and what we’ll test next.',
  ],
  [
    'What results should I expect?',
    'Early progress usually looks like improved contact rates, more real conversations, and clearer objections. Deals depend on market, list quality, offer strength, and follow-up.',
  ],
  [
    'Do you do acquisitions / close deals?',
    'No — we focus on lead generation ops. You (or your acquisitions team) handle underwriting, offers, negotiations, and closing.',
  ],
]

export default function Home() {
  return (
    <>
      <Section className="pt-8 sm:pt-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Structured execution</Badge>
                <Badge>Clear visibility</Badge>
                <Badge>Weekly reporting</Badge>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Outbound lead generation, run with structure.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                REVO manages your cold calling and SMS outreach end-to-end — from scripts and workflows to daily
                execution oversight. You get consistent activity, controlled processes, and clear visibility into what’s
                happening.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton to="/contact">Book a call</LinkButton>
                <LinkButton to="/services" variant="secondary">
                  See services
                </LinkButton>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                <LinkButton to="/contact" variant="ghost" className="px-0 py-0 hover:bg-transparent hover:underline">
                  Book a Call
                </LinkButton>
                <span aria-hidden="true">•</span>
                <LinkButton
                  to="/how-it-works"
                  variant="ghost"
                  className="px-0 py-0 hover:bg-transparent hover:underline"
                >
                  How it works
                </LinkButton>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Card className="p-0 overflow-hidden">
              <div className="bg-gradient-to-b from-slate-900 to-slate-700 p-8 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Weekly snapshot</div>
                <div className="mt-2 text-xl font-bold">Know what happened. Know what changes next.</div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  We keep the operation steady — then iterate calmly based on market feedback, objections, and list
                  performance.
                </p>
              </div>
              <div className="p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold">Activity</div>
                    <div className="mt-1 text-sm text-slate-600">Calls/texts completed, pace, cadence</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold">Quality</div>
                    <div className="mt-1 text-sm text-slate-600">Objections, talk tracks, lead reasons</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold">Insights</div>
                    <div className="mt-1 text-sm text-slate-600">What’s working + what changes next week</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold">Visibility</div>
                    <div className="mt-1 text-sm text-slate-600">Simple, consistent reporting format</div>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="alt">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Lead gen works better when it’s managed</h2>
            <p className="mt-3 text-slate-600">
              REVO is built around three pillars: Operations, Quality, and Clarity.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map(([title, desc], idx) => (
            <Reveal key={`${String(title)}-${idx}`}>
              <Card>
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Choose the channel — we’ll run the system</h2>
            <p className="mt-3 text-slate-600">Cold calling, SMS, or a hybrid approach with one reporting cadence.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {serviceCards.map(([title, chip, desc, bullets], idx) => (
            <Reveal key={`${String(title)}-${idx}`}>
              <Card>
                <div className="flex items-start justify-between gap-4">
                  <div className="text-lg font-bold">{title}</div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {chip}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                        ✓
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <LinkButton to="/services" variant="secondary" className="w-full">
                    Learn more
                  </LinkButton>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Fit matters (and protects results)</h2>
            <p className="mt-3 text-slate-600">REVO works best when the investor side is ready for follow-up.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {fitColumns.map(([title, items], idx) => (
            <Reveal key={`${String(title)}-${idx}`}>
              <Card>
                <div className="text-lg font-bold">{title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {items.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">
                        ✓
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">A simple 4-step launch</h2>
            <p className="mt-3 text-slate-600">Structured setup, consistent execution, weekly optimization.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {launchSteps.map(([title, desc], idx) => (
            <Reveal key={`${String(title)}-${idx}`}>
              <Card>
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-lg font-bold">{title}</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="band">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">Want outbound that feels controlled?</div>
              <p className="mt-2 text-white/80">Book a quick call. We’ll confirm fit and outline the first 30 days.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton to="/contact" className="bg-white text-slate-900 hover:bg-slate-100">
                Book a call
              </LinkButton>
              <LinkButton to="/how-it-works" variant="ghost" className="text-white hover:bg-white/10">
                How it works
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQ</h2>
            <p className="mt-3 text-slate-600">Clear answers so expectations stay aligned.</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3">
          {faqs.map(([q, a], idx) => (
            <Reveal key={`${String(q)}-${idx}`}>
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <div className="flex items-center justify-between gap-4">
                    <span>{q}</span>
                    <span className="text-slate-500 transition group-open:rotate-45">+</span>
                  </div>
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-slate-600">{a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
