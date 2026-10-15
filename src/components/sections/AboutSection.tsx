import { Link } from 'react-router'
import { ArrowDownRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="section-space shell">
      <div className="grid gap-12 md:grid-cols-[1.05fr_1fr] lg:gap-24">
        <SectionHeading
          number="01"
          eyebrow="AT THE TRAILHEAD"
          title="Curiosity is my compass."
        />
        <div className="about-copy" data-reveal>
          <p className="text-xl leading-relaxed">
            I’m Udit, a frontend engineer who enjoys turning complex problems
            into experiences that feel simple.
          </p>
          <p>
            I work at the intersection of engineering and product
            thinking—building scalable React applications, shaping reusable UI
            systems, and bringing useful AI capabilities into everyday
            workflows.
          </p>
          <p>
            From stabilizing my first production application to helping take a
            product from idea to launch, I like owning the details and seeing
            the bigger picture.
          </p>
          <Link to="/#experience" className="text-link mt-6">
            A little about my journey <ArrowDownRight size={18} />
          </Link>
        </div>
      </div>
      <div className="about-facts" data-reveal>
        <div>
          <strong>
            3.5<span>+</span>
          </strong>
          <p>Years building products</p>
        </div>
        <div>
          <strong>03</strong>
          <p>Product journeys</p>
        </div>
        <div>
          <strong>02</strong>
          <p>Products in production</p>
        </div>
        <div className="education-fact">
          <span className="eyebrow">THE FOUNDATION</span>
          <p>Bachelor of Technology</p>
          <p>Lakshmi Narain College of Technology, Bhopal</p>
          <span>2017 — 2021</span>
        </div>
      </div>
    </section>
  )
}
