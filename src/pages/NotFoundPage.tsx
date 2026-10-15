import { Link } from 'react-router'
import { ArrowLeft, Compass } from 'lucide-react'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Trail not found')
  return (
    <main id="top" tabIndex={-1} className="shell not-found">
      <Compass size={46} strokeWidth={1} />
      <p className="eyebrow mt-7">404 / A LITTLE OFF THE TRAIL</p>
      <h1>This path ends here.</h1>
      <p>
        The page you’re looking for isn’t here. There’s plenty to explore back
        at the trailhead.
      </p>
      <Link to="/" className="button button-primary mt-8">
        <ArrowLeft size={17} /> Back to the portfolio
      </Link>
    </main>
  )
}
