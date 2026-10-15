import { useEffect, useId, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePreferences } from '../../features/preferences/preferences'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const stars = Array.from({ length: 48 }, (_, index) => ({
  x: (index * 173 + 53) % 1440,
  y: (index * 97 + 17) % 390,
  radius: index % 4 === 0 ? 1.8 : 1,
}))

export function MountainScene() {
  const id = useId().replaceAll(':', '')
  const ref = useRef<HTMLDivElement>(null)
  const { motionEnabled } = usePreferences()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useGSAP(
    () => {
      if (!motionEnabled) return
      const media = gsap.matchMedia()
      media.add('(min-width: 768px)', () => {
        gsap.to('[data-ridge="far"]', {
          y: 65,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
        gsap.to('[data-ridge="near"]', {
          y: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
      })
      return () => media.revert()
    },
    { scope: ref, dependencies: [motionEnabled], revertOnUpdate: true },
  )

  return (
    <div
      className="mountain-scene"
      ref={ref}
      data-visible={visible}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMax slice"
        className="landscape"
      >
        <defs>
          <linearGradient id={`${id}-sky`} x2="0" y2="1">
            <stop stopColor="var(--sky-top)" />
            <stop offset="1" stopColor="var(--sky-bottom)" />
          </linearGradient>
          <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0.6" y2="1">
            <stop stopColor="var(--river-light)" />
            <stop offset="1" stopColor="var(--river)" />
          </linearGradient>
          <linearGradient id={`${id}-snow`} x2="0.7" y2="1">
            <stop stopColor="var(--snow)" />
            <stop offset="1" stopColor="var(--snow-shadow)" />
          </linearGradient>
          <radialGradient id={`${id}-glow`}>
            <stop stopColor="var(--sun)" stopOpacity=".25" />
            <stop offset="1" stopColor="var(--sun)" stopOpacity="0" />
          </radialGradient>
          <path
            id={`${id}-pine`}
            d="M0 0-9 20h4l-10 17h6l-12 20h17v10h8V57h17L9 37h6L5 20h4Z"
          />
          <clipPath id={`${id}-river-clip`}>
            <path d="M751 565c-45 37-75 41-60 68s128 29 108 61-143 26-149 58 108 49 84 79h185c-5-38-117-43-124-70s123-40 100-76-144-27-151-53 40-42 32-67Z" />
          </clipPath>
        </defs>
        <path fill={`url(#${id}-sky)`} d="M0 0h1440v820H0z" />
        <g
          className="topo-lines"
          fill="none"
          stroke="var(--contour)"
          strokeWidth=".7"
          opacity=".4"
        >
          <path d="M-110 160C110-55 201 98 101 213S-29 360 122 412M-130 180C115-28 163 111 77 222S-38 348 100 443M-150 202C95 2 136 129 50 238S-54 342 71 473M-170 225C73 23 108 148 24 254S-75 342 45 501" />
          <path d="M1280-60c-180 100-13 158 114 134s219 124 77 219M1300-30c-159 82-17 128 96 111s179 105 61 187M1320 0c-130 64-19 97 74 89s145 86 46 158" />
        </g>
        <g className="day-celestial">
          <circle cx="1150" cy="210" r="130" fill={`url(#${id}-glow)`} />
          <circle cx="1150" cy="210" r="43" fill="var(--sun)" />
        </g>
        <g className="night-celestial">
          <circle cx="1150" cy="210" r="95" fill={`url(#${id}-glow)`} />
          <path
            d="M1164 170a42 42 0 1 0 26 65 38 38 0 0 1-26-65Z"
            fill="#f5eccf"
          />
          {stars.map((star, i) => (
            <circle
              className="star"
              key={i}
              cx={star.x}
              cy={star.y}
              r={star.radius}
              fill="#e8eee9"
              style={{ animationDelay: `${i % 7}s` }}
            />
          ))}
        </g>
        <g
          className="clouds"
          fill="none"
          stroke="var(--cloud)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".45"
        >
          <path d="M150 290h80m14 0h50m710 57h62m12 0h98M1200 120h75" />
          <path d="M170 297h42m820 57h80" strokeWidth="1" />
        </g>
        <g data-ridge="far">
          <path
            d="M-80 545 71 434l58 30 136-118 80 77 88-33 106 89 100-96 78 52 110-115 95 101 65-40 121 87 92-116 104 91 137-60 100 188v161H-80Z"
            fill="var(--ridge-far)"
          />
          <path
            d="m128 464 137-118 80 77-56-22-22 18-22-26-44 47-21-7Zm511-81 78 52 110-115 95 101-66-31-29-27-33 46-23-7-54 53Zm421 85 92-116 104 91-75-38-29-20-31 54-20-8Z"
            fill="var(--snow-shadow)"
            opacity=".65"
          />
          <path
            d="M-70 620 93 498l66 40 151-146 103 112 64-44 165 153 106-83 195-204 155 187 69-60 150 145 118-35 90 86v190H-70Z"
            fill="var(--ridge-main)"
          />
          <path
            d="m159 538 151-146 103 112-53-26-27 7-24-39-31 57-27-17-42 45Zm589-8 195-204 155 187-82-46-28-5-44-73-30 55-26-5-38 67-32-2-22 34Z"
            fill={`url(#${id}-snow)`}
          />
          <path
            d="m310 392 8 70 31 67 64-25-80-19-24-39-31 57-16 61-59 34ZM943 326l3 110 49 75 103 2-82-46-28-5-44-73-30 55-26-5-8 42-40 25-32-2-25 45Z"
            fill="var(--mountain-facet)"
            opacity=".48"
          />
          <path
            d="m93 498 30 110 83-27 104-189-151 146Zm384-38 19 101 89 45 57 7Zm690-7-2 126 152 19Z"
            fill="var(--mountain-facet)"
            opacity=".32"
          />
          <path
            d="m941 450-41 77-15 58m-585-95-40 65-31 33m767-73 48 58"
            fill="none"
            stroke="var(--snow-shadow)"
            strokeWidth="2"
            opacity=".55"
          />
        </g>
        <g data-ridge="near">
          <path
            d="M-40 593c120-86 149-54 255-4s195-55 294-6 164 25 238-8 129-49 238-5 220-53 328-20 136 51 168 70v230H-40Z"
            fill="var(--ridge-near)"
          />
          <path
            d="M-30 670c116-94 213-32 314-54s158 22 252 10 124-41 204-39 137 28 228 24 207-68 294-29 132 59 211 59v203H-30Z"
            fill="var(--valley)"
          />
          <path
            d="M751 565c-45 37-75 41-60 68s128 29 108 61-143 26-149 58 108 49 84 79h185c-5-38-117-43-124-70s123-40 100-76-144-27-151-53 40-42 32-67Z"
            fill={`url(#${id}-water)`}
          />
          <g
            clipPath={`url(#${id}-river-clip)`}
            className="water-ripples"
            fill="none"
            stroke="var(--water-glint)"
            strokeLinecap="round"
            opacity=".5"
          >
            <path
              d="M690 604h70m-72 11h30m1 44h100m-68 13h104m-176 50h131m-116 13h55m-13 61h156m-137 12h72"
              strokeWidth="2"
            />
            <path d="M721 642h50m-62 119h120m-141-19h46m14-44h78" />
          </g>
          <g fill="var(--forest-back)">
            {Array.from({ length: 24 }, (_, i) => (
              <use
                key={i}
                href={`#${id}-pine`}
                transform={`translate(${i < 12 ? 50 + i * 51 : 965 + (i - 12) * 43} ${575 + ((i * 13) % 48)}) scale(${0.35 + (i % 3) * 0.13})`}
              />
            ))}
          </g>
          <path
            d="M-40 752c91-59 202-11 292-39s184-13 251 25 133 54 171 110H-40Zm1480-77c-155-57-227 62-371 36s-179 55-220 137h591Z"
            fill="var(--foreground)"
          />
          <path
            d="M1151 741c-20-17-17-33-3-45s23-20 12-35"
            fill="none"
            stroke="var(--trail-color)"
            strokeWidth="3"
            strokeDasharray="5 6"
            opacity=".65"
          />
          <g fill="var(--forest-front)">
            <use
              href={`#${id}-pine`}
              transform="translate(84 579) scale(2.8)"
            />
            <use
              href={`#${id}-pine`}
              transform="translate(158 636) scale(2.1)"
            />
            <use
              href={`#${id}-pine`}
              transform="translate(26 652) scale(2.2)"
            />
            <use
              href={`#${id}-pine`}
              transform="translate(1323 560) scale(3.2)"
            />
            <use
              href={`#${id}-pine`}
              transform="translate(1397 635) scale(2.6)"
            />
            <use
              href={`#${id}-pine`}
              transform="translate(1253 647) scale(1.8)"
            />
          </g>
          <g transform="translate(1160 643)" fill="var(--hiker)">
            <circle cy="-14" r="4" />
            <path d="m-5-8 9-1 2 19-8 1Z" />
            <path
              d="m-2 9-4 17m9-17 6 16m-6-30 8 10 7 2"
              fill="none"
              stroke="var(--hiker)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="m17 4 2 24" stroke="var(--hiker)" strokeWidth="1.5" />
            <rect
              x="-10"
              y="-7"
              width="6"
              height="14"
              rx="2"
              fill="var(--accent)"
            />
          </g>
          <path
            d="m320 779 29-12 19 21Zm734-43 24-10 22 16Z"
            fill="var(--forest-front)"
            opacity=".75"
          />
        </g>
      </svg>
    </div>
  )
}
