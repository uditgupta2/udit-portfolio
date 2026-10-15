import { useRef } from 'react'
import { Code2, Compass, Mountain } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { usePreferences } from '../features/preferences/preferences'
import { usePageTitle } from '../hooks/usePageTitle'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { WorkSection } from '../components/sections/WorkSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { BeyondSection } from '../components/sections/BeyondSection'

export function HomePage() {
  const ref = useRef<HTMLElement>(null)
  const { motionEnabled } = usePreferences()
  usePageTitle('Frontend engineer & explorer')

  useGSAP(
    () => {
      if (!motionEnabled) return
      gsap.from('[data-hero-copy]', {
        y: 18,
        opacity: 0,
        duration: 0.85,
        stagger: 0.09,
        ease: 'power2.out',
      })
      gsap.utils
        .toArray<HTMLElement>('[data-reveal]', ref.current)
        .forEach((element) => {
          gsap.from(element, {
            y: 24,
            opacity: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 94%', once: true },
          })
        })
      gsap.from('.journey-progress', {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: '.journey-list',
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 0.5,
        },
      })
    },
    { scope: ref, dependencies: [motionEnabled], revertOnUpdate: true },
  )

  return (
    <main ref={ref} id="top" tabIndex={-1}>
      <HeroSection />

      <div className="intro-strip">
        <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <span>
            <Code2 size={17} /> Engineer by profession.
          </span>
          <span>
            <Compass size={17} /> Explorer by nature.
          </span>
          <span>
            <Mountain size={17} /> Building since 2022.
          </span>
        </div>
      </div>

      <AboutSection />

      <WorkSection />

      <ExperienceSection />

      <SkillsSection />

      <BeyondSection />
    </main>
  )
}
