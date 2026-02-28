import Section from '../components/Section'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'
import { HighlightedButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import BubbleBackground from '../components/BubbleBackground'

export default function Terms() {
  const navigate = useNavigate();
  return (
    <>
    <BubbleBackground>
      <Section className="pt-10">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-slate-400 sm:text-lg">
              These Terms of Service govern your access to and use of REVO’s website and services. By engaging with us, you agree to these terms.
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
              <div className="text-lg font-bold text-white">Overview</div>
              <p className="mt-2 text-sm text-slate-400">
                REVO provides managed outreach and operational support services for businesses. These Terms outline the conditions under which our services are offered and your responsibilities when working with us.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Services</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>We provide managed operations including cold calling, SMS outreach, and related workflow support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>We do not provide legal, financial, or compliance advice, and we do not guarantee business outcomes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs">✓</span>
                  <span>Clients are responsible for ensuring their lead lists and outreach practices comply with all applicable laws and regulations.</span>
                </li>
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Client responsibilities</div>
              <p className="mt-2 text-sm text-slate-400">
                By using our services, you agree to provide accurate information, maintain lawful marketing practices, and use our services only for legitimate business purposes. You are responsible for obtaining any required consent before contacting leads.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Payments & termination</div>
              <p className="mt-2 text-sm text-slate-400">
                Fees, billing terms, and service scope will be outlined in your service agreement or proposal. We reserve the right to suspend or terminate services if terms are violated, payments are overdue, or services are misused.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Results disclaimer</div>
              <p className="mt-2 text-sm text-slate-400">
                We do not guarantee specific results, revenue, or deal flow. Performance may vary based on market conditions, data quality, messaging, follow-up processes, and other external factors beyond our control.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Limitation of liability</div>
              <p className="mt-2 text-sm text-slate-400">
                To the fullest extent permitted by law, REVO shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Services are provided on an “as-is” basis.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Changes to these terms</div>
              <p className="mt-2 text-sm text-slate-400">
                We may update these Terms from time to time. Continued use of our services after updates constitutes acceptance of the revised terms.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Contact</div>
              <p className="mt-2 text-sm text-slate-400">
                If you have questions about these Terms, contact us at{' '}
                <a className="font-semibold text-gray-100 hover:underline" href="mailto:info@revoeg.com">
                  info@revoeg.com
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
