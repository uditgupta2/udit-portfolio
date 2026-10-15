import { useEffect, useState, type ReactNode } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import {
  PreferencesContext,
  readPreference,
  writePreference,
  type Theme,
} from './preferences'

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const systemDark = useMediaQuery('(prefers-color-scheme: dark)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [choice, setChoice] = useState<Theme | null>(() => {
    const stored = readPreference('portfolio-theme')
    return stored === 'light' || stored === 'dark' ? stored : null
  })
  const [motionPaused, setMotionPaused] = useState(
    () => readPreference('portfolio-motion') === 'paused',
  )
  const theme = choice ?? (systemDark ? 'dark' : 'light')
  const motionEnabled = !motionPaused && !reducedMotion

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? 'on' : 'off'
  }, [motionEnabled])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    writePreference('portfolio-theme', next)
    setChoice(next)
  }

  function toggleMotion() {
    writePreference('portfolio-motion', motionPaused ? 'on' : 'paused')
    setMotionPaused(!motionPaused)
  }

  return (
    <PreferencesContext
      value={{
        theme,
        toggleTheme,
        motionEnabled,
        motionPaused,
        reducedMotion,
        toggleMotion,
      }}
    >
      {children}
    </PreferencesContext>
  )
}
