import { Camera, Compass, Mountain, ArrowRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { FieldSketch } from '../scenery/FieldSketch'

export function BeyondSection() {
  return (
    <section id="beyond" className="section-space shell beyond-section">
      <div className="grid items-center gap-14 md:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <SectionHeading
            number="05"
            eyebrow="AWAY FROM THE KEYBOARD"
            title="There’s a world beyond the screen."
          />
          <p className="mt-7 text-muted leading-relaxed">
            Travelling and photography give my curiosity a different kind of
            playground. New places, little details, and a fresh perspective to
            bring back to everything I build.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm">
            <span className="flex items-center gap-2">
              <Compass size={17} className="text-accent" /> Travelling
            </span>
            <span className="flex items-center gap-2">
              <Camera size={17} className="text-accent" /> Photography
            </span>
          </div>
        </div>
        <div className="field-journal" data-reveal>
          <figure className="journal-card journal-trail">
            <FieldSketch variant="trail" />
            <figcaption>
              <span>01 / Take the scenic route.</span>
              <Mountain size={14} />
            </figcaption>
          </figure>
          <figure className="journal-card journal-camera">
            <FieldSketch variant="camera" />
            <figcaption>
              <span>02 / Notice the little things.</span>
              <Camera size={14} />
            </figcaption>
          </figure>
          <span className="journal-note">
            a little room for wonder <ArrowRight size={23} />
          </span>
        </div>
      </div>
    </section>
  )
}
