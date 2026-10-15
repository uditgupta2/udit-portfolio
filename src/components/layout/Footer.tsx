import { Link } from 'react-router'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { MountainMark } from '../ui/MountainMark'

export function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="footer-contours" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-10 py-20 md:grid-cols-[1.3fr_1fr] md:items-end lg:py-24">
          <div>
            <p className="eyebrow text-footer-muted">
              <span className="status-dot" />
              THE NEXT CHAPTER
            </p>
            <h2 className="mt-7 text-5xl leading-[1.12] sm:text-6xl">
              Good things start
              <br />
              with a <em>conversation.</em>
            </h2>
            <p className="mt-6 max-w-sm text-footer-muted leading-relaxed">
              Have a product in mind, an interesting opportunity, or a trail
              recommendation? I’d love to hear it.
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={19} />
              <span>{profile.email}</span>
              <ArrowUpRight size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="font-bold text-lg w-5" aria-hidden="true">
                in
              </span>
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={18} />
            </a>
            <a href={profile.phoneHref}>
              <Phone size={19} />
              <span>{profile.phone}</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="footer-bottom flex flex-wrap items-center justify-between gap-5 py-7 text-xs">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Udit Gupta home"
          >
            <MountainMark className="w-7" />
            <span>© {new Date().getFullYear()} Udit Gupta</span>
          </Link>
          <p>Made with intention. Inspired by the outdoors.</p>
          <Link to="/#top" className="flex items-center gap-2">
            Back to the trailhead <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
