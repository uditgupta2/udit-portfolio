import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark'
export type Preferences = {
  theme: Theme
  toggleTheme: () => void
  motionEnabled: boolean
  motionPaused: boolean
  reducedMotion: boolean
  toggleMotion: () => void
}

export const PreferencesContext = createContext<Preferences | null>(null)

export function usePreferences() {
  const preferences = useContext(PreferencesContext)
  if (!preferences) throw new Error('PreferencesProvider is required')
  return preferences
}

export function readPreference(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* Preferences still work when storage is unavailable. */
  }
}
