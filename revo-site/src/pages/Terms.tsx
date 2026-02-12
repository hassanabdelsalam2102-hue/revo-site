import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'

export default function Terms() {
  return (
    <>
      <Section tone="alt" className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-slate-600 sm:text-lg">Placeholder page — replace with your official terms.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton to="/contact">Book a Call</LinkButton>
              <LinkButton to="/" variant="secondary">
                Back to Home
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-6">
          <Reveal>
            <Card>
              <div className="text-lg font-bold">Overview</div>
              <p className="mt-2 text-sm text-slate-600">
                These terms describe how REVO provides managed lead generation operations. This is placeholder content.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold">Services</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>We provide managed operations for cold calling and/or SMS outreach.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>We do not provide legal advice, data purchasing, or acquisitions/closing.</span>
                </li>
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold">Results</div>
              <p className="mt-2 text-sm text-slate-600">
                Results vary. No guarantees are provided. Performance depends on market, list quality, follow-up speed, and other factors.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold">Contact</div>
              <p className="mt-2 text-sm text-slate-600">
                Questions? Email: <a className="font-semibold text-slate-900 hover:underline" href="mailto:ops@revo.example">ops@revo.example</a>
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
