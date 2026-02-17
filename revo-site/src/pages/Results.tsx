import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'
import { HighlightedButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import BubbleBackground from '../components/BubbleBackground'

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
  const navigate= useNavigate();
  return (
    <>
    <BubbleBackground>
      <Section className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Proof starts with predictable signals.</h1>
            <p className="mt-4 text-slate-300 sm:text-lg">
              Early wins look like clearer data, more real conversations, and a calmer weekly optimization loop — not
              magic overnight deals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <HighlightedButton onClick={() => navigate('/contact')}>Book a Call</HighlightedButton>
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
            <p className="mt-3 text-slate-300">
              We focus on building a repeatable system and quickly learning what the market is telling you.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {expectations.map(([title, items], idx) => (
            <Reveal key={`${String(title)}-${idx}`}>
              <Card>
                <div className="text-lg font-bold text-white">{title}</div>
                <p className="mt-2 text-sm text-slate-300">{items[0]}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
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


      <Section tone="grad1">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How we measure performance</h2>
            <p className="mt-3 text-slate-300">
              A simple scoreboard: activity, quality signals, and conversion — plus the feedback loop.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {metrics.map(([title, items], mIdx) => (
            <Reveal key={`${String(title)}-${mIdx}`}>
              <Card className="h-full flex flex-col">
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

        <div className="mt-10 flex flex-wrap gap-3">
          <HighlightedButton onClick={() => navigate('/contact')}>Book a Call</HighlightedButton>
          <LinkButton to="/how-it-works" variant="secondary">
            See the workflow
          </LinkButton>
        </div>
      </Section>
    </BubbleBackground>
    </>
  )
}
