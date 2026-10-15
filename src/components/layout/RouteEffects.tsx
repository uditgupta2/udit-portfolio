import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { usePreferences } from '../../features/preferences/preferences'

export function RouteEffects() {
  const { pathname, hash } = useLocation()
  const { motionEnabled } = usePreferences()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const routeChanged = previousPath.current !== pathname
    previousPath.current = pathname
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: motionEnabled ? 'smooth' : 'instant' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
        if (routeChanged) {
          document
            .querySelector<HTMLElement>('main')
            ?.focus({ preventScroll: true })
        }
      }
    })
    return () => cancelAnimationFrame(frame)
    // Preferences should affect the next navigation, not reposition the current page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash])

  return null
}
