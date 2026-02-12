import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'

type Expectation = [title: string, items: string[]]
const expectations: Expectation[] = [
  [
    'More conversations',
    [
      'Scripts stabilize, reps get consistent, and you start seeing real talk tracks emerge.',
      'Clearer objections',
      'Better opener performance',
      'Consistent qualification',
    ],
  ],
  [
    'Contact rate clarity',
    ['We learn fast whether the list and timing are working for your market.', 'Best time blocks', 'Segment performance', 'Suppression/refinements'],
  ],
  [
    'Objections map',
    ['We track objections and update talk tracks so conversion improves steadily.', 'Top objections ranked', 'Rebuttals tested', 'Messaging aligned'],
  ],
]
const quotes = [
  '“Placeholder quote — describe a measurable improvement and how communication felt.” Investor Name • City, State • (Replace later)',
  '“Placeholder quote — mention weekly reporting clarity and consistent execution.” Investor Name • City, State • (Replace later)',
  '“Placeholder quote — highlight professionalism, QA, and steady optimization.” Investor Name • City, State • (Replace later)',
]
type Metric = [title: string, items: string[]]
const metrics: Metric[] = [
  ['Topline activity', ['Dials / texts sent', 'Reach / contact rate', 'Conversation volume']],
  ['Quality signals', ['Objections (ranked)', 'Lead qualification rate', 'Bad lead reasons (tracked)']],
  ['Conversion', ['Leads delivered', 'Speed-to-lead (your follow-up)', 'Downstream feedback loop']],
  [
    'Want a predictable weekly loop?',
    ['We’ll walk through fit, scope, and what “success signals” look like in your market.'],
  ],
]

export default function Results() {
  return (
    <>
      <Section tone="alt" className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Proof starts with predictable signals.</h1>
            <p className="mt-4 text-slate-600 sm:text-lg">
              Early wins look like clearer data, more real conversations, and a calmer weekly optimization loop — not
              magic overnight deals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton to="/contact">Book a call</LinkButton>
              <LinkButton to="/services" variant="secondary">
                Explore services
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What to expect in the first 2–4 weeks</h2>
            <p className="mt-3 text-slate-600">
              We focus on building a repeatable system and quickly learning what the market is telling you.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {expectations.map(([title, items], idx) => (
            <Reveal key={`${String(title)}-${idx}`}>
              <Card>
                <div className="text-lg font-bold">{title}</div>
                <p className="mt-2 text-sm text-slate-600">{items[0]}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {items.slice(1).map((t) => (
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

      <Section tone="alt">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Case studies (coming soon)</h2>
            <p className="mt-3 text-slate-600">
              We’ll add specific market breakdowns as soon as we have enough comparable runs to publish responsibly.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal>
            <Card>
              <div className="text-sm font-semibold text-slate-900">Case Study #1: Market + strategy</div>
              <p className="mt-2 text-sm text-slate-600">
                Placeholder — add the market, list type, approach, and what changed the conversion rate.
              </p>
            </Card>
          </Reveal>
          <Reveal>
            <Card>
              <div className="text-sm font-semibold text-slate-900">Case Study #2: Objections + optimization</div>
              <p className="mt-2 text-sm text-slate-600">
                Placeholder — highlight the top objections, the tested rebuttals, and the weekly loop improvements.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Testimonials (placeholders)</h2>
            <p className="mt-3 text-slate-600">Swap these with real quotes once you’re ready.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <Reveal key={q}>
              <Card>
                <blockquote className="text-sm leading-relaxed text-slate-700">{q}</blockquote>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How we measure performance</h2>
            <p className="mt-3 text-slate-600">
              A simple scoreboard: activity, quality signals, and conversion — plus the feedback loop.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {metrics.map(([title, items], mIdx) => (
            <Reveal key={`${String(title)}-${mIdx}`}>
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
          <LinkButton to="/how-it-works" variant="secondary">
            See the workflow
          </LinkButton>
        </div>
      </Section>
    </>
  )
}
