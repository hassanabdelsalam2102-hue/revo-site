import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'

type Block = [string, string[]]
type Service = [id: string, title: string, blocks: Block[]]

const services: Service[] = [
  [
    'cold-calling',
    'Cold Calling Ops',
    [
      [
        'What’s included',
        [
          'Script development support + iterations',
          'List rules + calling workflow setup (DNC logic/filters handled in your tools)',
          'Caller management and daily execution oversight',
          'QA checks + coaching notes',
          'Weekly snapshot reporting (metrics + insights + next steps)',
        ],
      ],
      [
        'What’s not included (scope control)',
        [
          'Buying lists or data (we can advise, you purchase)',
          'CRM builds beyond basic pipeline alignment',
          'Acquisitions / underwriting / offers / closing',
          'Guaranteed deal volume',
        ],
      ],
      ['Best for', ['Investors who want a consistent calling engine and clean weekly visibility.'] as string[]],
      [
        'Typical first 30 days',
        [
          'Week 1: baseline metrics + script calibration',
          'Week 2: objections map + list rule tuning',
          'Week 3–4: stable execution + first optimizations',
        ],
      ],
      ['Primary outcome', ['More real conversations, clearer objections, and a repeatable weekly loop.'] as string[]],
    ],
  ],
  [
    'sms',
    'SMS Ops',
    [
      [
        'What’s included',
        [
          'Message templates + sequences (custom to your offer language)',
          'Inbox management and lead qualification',
          'List segmentation rules and suppression logic',
          'Quality checks for tone + consistency',
          'Weekly snapshot reporting + optimization loop',
        ],
      ],
      [
        'What’s not included (scope control)',
        [
          'Buying data (we can advise, you purchase)',
          'Legal compliance services (you maintain compliance in your tools)',
          'Acquisitions / underwriting / offers / closing',
          'Guaranteed response rates',
        ],
      ],
      ['Best for', ['Investors who want consistent follow-up and a scalable conversation channel.'] as string[]],
      [
        'Typical first 30 days',
        [
          'Week 1: templates + tone calibration',
          'Week 2: segmentation + baseline response metrics',
          'Week 3–4: cadence refinements + list tuning',
        ],
      ],
      ['Primary outcome', ['More qualified replies and faster feedback on list quality and offers.'] as string[]],
    ],
  ],
  [
    'hybrid',
    'Hybrid Ops',
    [
      [
        'What’s included',
        [
          'Unified scripts + message templates aligned to your criteria',
          'Call execution + SMS execution under one workflow',
          'Shared objections + insights across both channels',
          'QA + coaching notes across reps',
          'Weekly snapshot reporting (combined KPIs + next actions)',
        ],
      ],
      [
        'What’s not included (scope control)',
        [
          'Data purchasing (you buy, we advise)',
          'Full CRM buildouts / complex automations',
          'Acquisitions / underwriting / offers / closing',
          'Guaranteed deal volume',
        ],
      ],
      ['Best for', ['Investors who want speed-to-lead and want one managed operator for outreach.'] as string[]],
      [
        'Typical first 30 days',
        [
          'Week 1: setup + baseline in both channels',
          'Week 2: align follow-up and qualification rules',
          'Week 3–4: optimize list segments + cadence',
        ],
      ],
      ['Primary outcome', ['Faster learning and improved conversion through a tighter feedback loop.'] as string[]],
    ],
  ],
]

const compare: string[][] = [
  ['Feature', 'Cold Calling Ops', 'SMS Ops', 'Hybrid Ops'],
  ['Managed execution', 'Yes', 'Yes', 'Yes (both)'],
  ['QA / coaching notes', 'Yes', 'Yes (tone + consistency)', 'Yes'],
  ['Weekly snapshot reporting', 'Yes', 'Yes', 'Unified'],
  ['Best for speed-to-lead', 'Good', 'Good', 'Best'],
  ['Best for conversation volume', 'High', 'High', 'Highest'],
  ['Setup complexity', 'Medium', 'Medium', 'Higher'],
]

function scrollToHash(hash: string) {
  const id = hash.replace('#', '')
  if (!id) return
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // small delay so layout is ready
      setTimeout(() => scrollToHash(location.hash), 50)
    }
  }, [location.hash])

  return (
    <>
      <Section tone="alt" className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Choose the operation you want managed.</h1>
            <p className="mt-4 text-slate-600 sm:text-lg">
              Clear scope. Clean reporting. Consistent execution. Pick the channel — we’ll run the system.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton to="/contact">Book a call</LinkButton>
              <LinkButton to="/how-it-works" variant="secondary">
                How it works
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>

      {services.map(([id, title, blocks]) => (
        <Section key={id}>
          <div id={id} className="scroll-mt-24" />
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
                <p className="mt-2 text-slate-600">
                  Structured management with a weekly snapshot — so you can stay confident in the process.
                </p>
              </div>
              <div className="flex gap-3">
                <LinkButton to="/contact" variant="secondary">
                  Check fit
                </LinkButton>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blocks.map(([label, items], bIdx) => (
              <Reveal key={`${String(label)}-${bIdx}`}>
                <Card>
                  <div className="text-sm font-semibold text-slate-900">{label}</div>
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
        </Section>
      ))}

      <Section tone="alt">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Compare services</h2>
            <p className="mt-3 text-slate-600">A quick view of scope and what each operation is best at.</p>
          </div>
        </Reveal>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[720px] w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {compare[0].map((h) => (
                    <th key={h} className="px-5 py-4 font-semibold text-slate-900">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.slice(1).map((r, idx) => (
                  <tr key={idx} className="border-t border-slate-200">
                    <td className="px-5 py-4 font-semibold text-slate-900">{r[0]}</td>
                    <td className="px-5 py-4 text-slate-700">{r[1]}</td>
                    <td className="px-5 py-4 text-slate-700">{r[2]}</td>
                    <td className="px-5 py-4 text-slate-700">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton to="/contact">Book a call</LinkButton>
          <LinkButton to="/results" variant="secondary">
            See what to expect
          </LinkButton>
        </div>
      </Section>
    </>
  )
}
