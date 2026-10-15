import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/portfolio'
import { Tag } from '../ui/Tag'
import { ProductPreview } from './ProductPreview'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-reveal>
      <Link
        to={`/projects/${project.slug}`}
        className="project-art-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProductPreview kind={project.slug} />
      </Link>
      <div className="flex items-center justify-between gap-3 pt-6">
        <p className="eyebrow project-category">{project.category}</p>
        <span
          className={`project-status ${project.status === 'In development' ? 'in-progress' : ''}`}
        >
          <i />
          {project.status}
        </span>
      </div>
      <Link to={`/projects/${project.slug}`} className="project-title-link">
        <h3>{project.name}</h3>
        <span className="project-arrow">
          <ArrowUpRight size={20} />
        </span>
      </Link>
      <p className="project-summary">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <p className="preview-disclaimer">Illustrative interface concept</p>
    </article>
  )
}
