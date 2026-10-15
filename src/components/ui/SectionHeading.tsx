type Props = {
  number: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ number, eyebrow, title, description }: Props) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">
        <span className="section-number">{number}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && (
        <p className="mt-5 max-w-xl text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
