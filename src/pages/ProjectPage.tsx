import { Link, useParams } from 'react-router'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  Layers,
  Sparkles,
} from 'lucide-react'
import { projects } from '../data/portfolio'
import { ProductPreview } from '../components/projects/ProductPreview'
import { Tag } from '../components/ui/Tag'
import { usePageTitle } from '../hooks/usePageTitle'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  usePageTitle(project ? `${project.name} — project story` : 'Trail not found')
  if (!project) return <NotFoundPage />
  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <main id="top" tabIndex={-1} className="project-page">
      <section className="shell project-intro">
        <Link to="/#work" className="text-link">
          <ArrowLeft size={15} /> Back to selected work
        </Link>
        <div className="mt-12 flex flex-wrap items-center gap-5">
          <p className="eyebrow">
            PROJECT {project.number} / {project.category}
          </p>
          <span
            className={`project-status ${project.status === 'In development' ? 'in-progress' : ''}`}
          >
            <i />
            {project.status}
          </span>
        </div>
        <h1>
          {project.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="project-headline">{project.headline}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {project.website && (
          <a
            href={project.website}
            className="text-link mt-7"
            target="_blank"
            rel="noreferrer"
          >
            Visit {project.name} <ArrowUpRight size={16} />
          </a>
        )}
      </section>
      <div className="shell">
        <div className="project-feature-art">
          <ProductPreview kind={project.slug} />
        </div>
        <p className="preview-disclaimer text-center">
          Illustrative interface concept · not a production screenshot
        </p>
      </div>
      <section className="shell project-overview grid gap-10 md:grid-cols-[.6fr_1.4fr]">
        <div>
          <p className="eyebrow">MY ROLE</p>
          <p className="mt-4 text-lg leading-relaxed">{project.role}</p>
        </div>
        <div>
          <p className="eyebrow">THE CONTEXT</p>
          <p className="mt-4 text-xl leading-relaxed">{project.introduction}</p>
        </div>
      </section>
      <section className="contribution-section">
        <div className="shell">
          <p className="eyebrow">OWNERSHIP & CONTRIBUTIONS</p>
          <h2 className="mt-5">Where I made a difference.</h2>
          <div className="contributions-grid">
            {project.contributions.map((item, i) => (
              <article key={item.title}>
                <span className="contribution-number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {project.slug === 'mattersuite' && (
        <section className="shell ai-flow-section">
          <p className="eyebrow">AN INTELLIGENT DOCUMENT WORKFLOW</p>
          <h2 className="mt-5">From information to insight.</h2>
          <div className="ai-flow">
            {[
              {
                icon: FileText,
                title: 'Document input',
                text: 'Extract useful text',
              },
              {
                icon: Layers,
                title: 'Relevant context',
                text: 'Retrieve and ground',
              },
              {
                icon: Sparkles,
                title: 'AI assistance',
                text: 'Summarize and draft',
              },
              { icon: Check, title: 'Human review', text: 'Review the output' },
            ].map(({ icon: Icon, title, text }, index) => (
              <div key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
                {index < 3 && <ArrowRight className="flow-arrow" size={20} />}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-5">
            Conceptual overview of the document workflow.
          </p>
        </section>
      )}
      <section className="shell project-outcome">
        <p className="eyebrow">
          {project.status === 'In development'
            ? 'WHERE THINGS STAND'
            : 'THE OUTCOME'}
        </p>
        <h2 className="mt-5">
          {project.status === 'In development'
            ? 'The next chapter is taking shape.'
            : 'Built, shipped, and learned from.'}
        </h2>
        <p>{project.outcome}</p>
        <Link to="/#experience" className="text-link mt-7">
          Explore my wider engineering experience <ArrowUpRight size={16} />
        </Link>
      </section>
      <div className="shell next-project">
        <span className="eyebrow">NEXT ON THE TRAIL</span>
        <Link to={`/projects/${next.slug}`}>
          <span>{next.name}</span>
          <ArrowRight size={32} />
        </Link>
      </div>
    </main>
  )
}
