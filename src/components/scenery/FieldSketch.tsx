import { useId } from 'react'

export function FieldSketch({ variant }: { variant: 'trail' | 'camera' }) {
  const id = useId().replaceAll(':', '')
  return (
    <svg viewBox="0 0 500 340" aria-hidden="true" className="field-sketch">
      <defs>
        <linearGradient id={`${id}-bg`} x2="0" y2="1">
          <stop stopColor={variant === 'trail' ? '#bfd2cb' : '#e8d7b9'} />
          <stop
            offset="1"
            stopColor={variant === 'trail' ? '#e4e7d9' : '#eee3cb'}
          />
        </linearGradient>
      </defs>
      <path d="M0 0h500v340H0z" fill={`url(#${id}-bg)`} />
      {variant === 'trail' ? (
        <>
          <circle cx="365" cy="80" r="30" fill="#f4e9c5" />
          <path d="m0 250 125-170 97 120 90-151 188 201v90H0" fill="#7e9a8d" />
          <path
            d="m125 80-58 80 39-13 19-31 25 43 30-10Zm187-31-62 104 35-21 27-41 29 52 23-17Z"
            fill="#e7ece3"
          />
          <path d="m0 297 180-133 92 123 106-107 122 102v58H0" fill="#587d69" />
          <path d="M0 315q120-90 248-6t252-23v54H0" fill="#244d3c" />
          <path
            d="M270 340q-70-42 13-63t-4-40"
            fill="none"
            stroke="#c6bc94"
            strokeWidth="8"
          />
          <path
            d="M42 314v-91m-25 45 25-46 25 46H17m-6 27 31-54 32 54H11m433 29v-90m-25 42 25-45 25 45h-50m-6 27 31-54 32 54h-63"
            fill="#193e30"
            stroke="#193e30"
            strokeWidth="3"
          />
        </>
      ) : (
        <>
          <path d="M0 275q100-50 208-20t292-1v86H0" fill="#b7b79b" />
          <path d="M0 310q120-57 250-14t250-9v53H0" fill="#6d816b" />
          <g transform="translate(122 80) rotate(-8 130 90)">
            <path
              d="M-17 123q-50 83 10 112t235-32"
              stroke="#685941"
              strokeWidth="10"
              fill="none"
            />
            <path d="m57 23 14-25h75l15 25" fill="#364e42" />
            <rect
              x="0"
              y="23"
              width="250"
              height="154"
              rx="15"
              fill="#2a4138"
            />
            <rect x="0" y="59" width="250" height="91" fill="#415b4c" />
            <circle cx="132" cy="99" r="65" fill="#b5b8a3" />
            <circle cx="132" cy="99" r="55" fill="#1c3530" />
            <circle cx="132" cy="99" r="42" fill="#385e57" />
            <circle cx="132" cy="99" r="28" fill="#172f2d" />
            <path
              d="M105 75a36 36 0 0 1 39-6"
              stroke="#a7c4ac"
              strokeWidth="4"
              fill="none"
            />
            <rect x="18" y="36" width="37" height="17" rx="4" fill="#c4c2a8" />
            <circle cx="221" cy="43" r="6" fill="#d49a62" />
            <rect x="200" y="13" width="25" height="10" rx="3" fill="#263e32" />
          </g>
          <path
            d="m35 54 6-14m-9 5 14 4m379 50 6-14m-10 5 14 4"
            stroke="#7b8b71"
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  )
}
