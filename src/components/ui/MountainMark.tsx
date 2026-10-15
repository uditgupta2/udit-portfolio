export function MountainMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="37"
      height="30"
      viewBox="0 0 37 30"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 26 14 5l8 14 5-8 9 15H2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m10 12 4 2 3-3M24 16l3 2 2-3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="29" cy="4" r="2.5" fill="currentColor" />
    </svg>
  )
}
