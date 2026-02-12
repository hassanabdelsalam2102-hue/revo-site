import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { LinkButton } from '../components/LinkButton'

export default function NotFound() {
  return (
    <Section className="pt-10">
      <Reveal>
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-slate-600">That route doesn’t exist. Head back home.</p>
          <div className="mt-7">
            <LinkButton to="/">Back to Home</LinkButton>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
