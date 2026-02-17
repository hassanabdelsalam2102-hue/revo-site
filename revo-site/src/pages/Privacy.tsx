import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'
import { HighlightedButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import BubbleBackground from '../components/BubbleBackground'

export default function Privacy() {
  const navigate = useNavigate();
  return (
    <>
    <BubbleBackground>
      <Section className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-slate-400 sm:text-lg">
              This Privacy Policy explains how REVO collects, uses, and protects your information when you visit our website or use our services.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <HighlightedButton onClick={() => navigate('/contact')}>Book a Call</HighlightedButton>
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
              <div className="text-lg font-bold text-white">Summary</div>
              <p className="mt-2 text-sm text-slate-400">
                REVO is committed to protecting your privacy. We only collect information necessary to communicate with you, provide our services, and improve your experience. We do not sell your personal data.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">What we collect</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Information you voluntarily provide such as name, email address, phone number, company details, market, and any message submitted through our forms or scheduling tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Technical information such as IP address, browser type, and basic usage data collected through cookies or analytics tools if enabled.</span>
                </li>
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">How we use information</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>To respond to inquiries, schedule calls, and provide details about our services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>To operate, maintain, and improve our website, services, and client communications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>To comply with legal obligations and protect our business from misuse or fraud.</span>
                </li>
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Data sharing & protection</div>
              <p className="mt-2 text-sm text-slate-400">
                We may share information with trusted service providers (such as CRM, scheduling, communication, or analytics platforms) solely to operate our business. We do not sell or rent personal data. We take reasonable administrative and technical measures to protect your information, but no method of transmission over the internet is completely secure.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Your rights</div>
              <p className="mt-2 text-sm text-slate-400">
                You may request access to, correction of, or deletion of your personal information, or opt out of future communications at any time by contacting us. We will respond within a reasonable timeframe as required by applicable laws.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">International data processing</div>
              <p className="mt-2 text-sm text-slate-400">
                As a globally operated business, your information may be processed in countries outside your place of residence, including locations where our team or service providers operate.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Contact</div>
              <p className="mt-2 text-sm text-slate-400">
                If you have any questions about this Privacy Policy or how your data is handled, please contact us at{' '}
                <a className="font-semibold text-gray-100 hover:underline" href="mailto:mim@revoeg.com">
                  mim@revoeg.com
                </a>.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Last updated: February 2026
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>
    </BubbleBackground>
    </>
  )
}
