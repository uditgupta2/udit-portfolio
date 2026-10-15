import { skillGroups } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section section-space">
      <div className="shell">
        <SectionHeading
          number="04"
          eyebrow="MY TOOLKIT"
          title="The right tools for the terrain."
          description="A practical toolkit shaped by production work—from the interface to the infrastructure behind it."
        />
        <div className="skill-groups mt-10">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title} data-reveal>
              <div>
                <span className="skill-index">0{index + 1} /</span>
                <h3>{group.title}</h3>
                <p>{group.note}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2.5">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
