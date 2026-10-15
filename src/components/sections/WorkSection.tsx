import { projects } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../projects/ProjectCard'

export function WorkSection() {
  return (
    <section id="work" className="work-section section-space">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            number="02"
            eyebrow="SELECTED WORK"
            title="A few meaningful milestones."
          />
          <p className="section-aside" data-reveal>
            Real products. Real ownership.
            <br />
            One learning journey.
          </p>
        </div>
        <div className="project-grid mt-12 grid gap-x-7 gap-y-12 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
