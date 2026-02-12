import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'

export default function Privacy() {
  return (
    <>
      <Section tone="alt" className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-slate-600 sm:text-lg">Placeholder page — replace with your official policy.</p>
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
              <div className="text-lg font-bold">Summary</div>
              <p className="mt-2 text-sm text-slate-600">
                REVO respects your privacy. This placeholder explains the general structure of a privacy policy.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold">What we collect</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Information you submit via the contact form (name, email, phone, market, message).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Basic site analytics only if you add them later (this site ships with none).</span>
                </li>
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold">How we use information</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>To respond to inquiries and provide service information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>To improve our operations and client communication.</span>
                </li>
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold">Contact</div>
              <p className="mt-2 text-sm text-slate-600">
                If you have questions, email: <a className="font-semibold text-slate-900 hover:underline" href="mailto:ops@revo.example">ops@revo.example</a>
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
