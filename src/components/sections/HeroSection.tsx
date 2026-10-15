import { Link } from 'react-router'
import { ArrowUpRight, ArrowDown, Download, MapPin } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { MountainScene } from '../scenery/MountainScene'

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <MountainScene />
      <div className="hero-copy shell relative z-10 text-center">
        <p className="hero-intro" data-hero-copy>
          <span /> HELLO, I’M UDIT GUPTA <span />
        </p>
        <h1 id="hero-title" data-hero-copy>
          Thoughtful code.
          <br />
          An explorer’s <em>spirit.</em>
        </h1>
        <p className="hero-description" data-hero-copy>
          I build intuitive web experiences and AI-powered products.
          <br className="hidden sm:block" /> Always curious. Always taking the
          next step.
        </p>
        <div
          className="hero-actions flex flex-wrap justify-center gap-3"
          data-hero-copy
        >
          <Link to="/#work" className="button button-primary">
            Explore my work <ArrowUpRight size={17} />
          </Link>
          <a className="button button-secondary" href={profile.resume} download>
            Download résumé <Download size={16} />
          </a>
        </div>
        <div className="hero-specialties" data-hero-copy>
          <span>React & TypeScript</span>
          <i />
          <span>Product engineering</span>
          <i />
          <span>AI integration</span>
        </div>
      </div>
      <div className="hero-bottom shell">
        <span className="flex items-center gap-2">
          <MapPin size={13} /> BHOPAL, INDIA
        </span>
        <Link to="/#about" className="scroll-cue">
          A LITTLE FURTHER DOWN <ArrowDown size={15} />
        </Link>
        <span className="hero-coordinate">23.2599° N · 77.4126° E</span>
      </div>
    </section>
  )
}
