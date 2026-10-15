import { MapPin, Download, Sparkles } from 'lucide-react'
import { profile, experienceHighlights } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-space shell">
      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <div>
          <SectionHeading
            number="03"
            eyebrow="THE JOURNEY SO FAR"
            title="Growing with every challenge."
          />
          <div className="employer-card" data-reveal>
            <span className="eyebrow">DEC 2022 — PRESENT</span>
            <h3>Software Development Engineer</h3>
            <p>CaseFox Legal Billing Software</p>
            <span className="mt-4 flex items-center gap-2 text-xs text-muted">
              <MapPin size={13} /> Bhopal, Madhya Pradesh, India
            </span>
          </div>
          <a className="text-link mt-7" href={profile.resume} download>
            Get the full résumé <Download size={15} />
          </a>
        </div>
        <div className="journey-list">
          <div className="journey-track" aria-hidden="true">
            <div className="journey-progress" />
          </div>
          {experienceHighlights.map((item, i) => (
            <article className="journey-item" key={item.title} data-reveal>
              <span className="journey-point" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="workflow-note" data-reveal>
        <Sparkles size={23} />
        <div>
          <h3>A thoughtful partnership with AI.</h3>
          <p>
            I use AI development agents with Markdown guidance to support
            implementation and write and run Vitest tests. Clear context,
            reusable patterns, and human review keep the work grounded.
          </p>
        </div>
        <span className="workflow-label">MY CURRENT WORKFLOW</span>
      </div>
    </section>
  )
}
