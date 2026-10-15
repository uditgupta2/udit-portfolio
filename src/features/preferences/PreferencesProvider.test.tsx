import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { PreferencesProvider } from './PreferencesProvider'
import { usePreferences } from './preferences'

function Probe() {
  const { theme, toggleTheme, motionEnabled, toggleMotion } = usePreferences()
  return (
    <>
      <output aria-label="Theme">{theme}</output>
      <output aria-label="Motion">{motionEnabled ? 'on' : 'off'}</output>
      <button onClick={toggleTheme}>Change theme</button>
      <button onClick={toggleMotion}>Change motion</button>
    </>
  )
}

const media = new Map<
  string,
  { matches: boolean; listeners: Set<() => void> }
>()
function setMedia(query: string, matches: boolean) {
  const entry = media.get(query) ?? {
    matches,
    listeners: new Set<() => void>(),
  }
  entry.matches = matches
  media.set(query, entry)
  entry.listeners.forEach((listener) => listener())
}

beforeEach(() => {
  media.clear()
  vi.stubGlobal('matchMedia', (query: string) => {
    if (!media.has(query))
      media.set(query, { matches: false, listeners: new Set() })
    const entry = media.get(query)!
    return {
      get matches() {
        return entry.matches
      },
      media: query,
      addEventListener: (_: string, callback: () => void) =>
        entry.listeners.add(callback),
      removeEventListener: (_: string, callback: () => void) =>
        entry.listeners.delete(callback),
    }
  })
})

function renderPreferences() {
  return render(
    <PreferencesProvider>
      <Probe />
    </PreferencesProvider>,
  )
}

describe('visitor preferences', () => {
  it('follows system appearance until the visitor chooses a theme', async () => {
    renderPreferences()
    act(() => setMedia('(prefers-color-scheme: dark)', true))
    expect(screen.getByLabelText('Theme')).toHaveTextContent('dark')
    await userEvent.click(screen.getByRole('button', { name: 'Change theme' }))
    expect(localStorage.getItem('portfolio-theme')).toBe('light')
    act(() => setMedia('(prefers-color-scheme: dark)', false))
    act(() => setMedia('(prefers-color-scheme: dark)', true))
    expect(screen.getByLabelText('Theme')).toHaveTextContent('light')
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
  })

  it('restores the visitor’s saved theme ahead of system preference', () => {
    localStorage.setItem('portfolio-theme', 'dark')
    renderPreferences()
    expect(screen.getByLabelText('Theme')).toHaveTextContent('dark')
  })

  it('ignores an invalid saved theme', () => {
    localStorage.setItem('portfolio-theme', 'unexpected')
    setMedia('(prefers-color-scheme: dark)', true)
    renderPreferences()
    expect(screen.getByLabelText('Theme')).toHaveTextContent('dark')
  })

  it('persists pause and resume without changing the theme', async () => {
    const view = renderPreferences()
    await userEvent.click(screen.getByRole('button', { name: 'Change motion' }))
    expect(screen.getByLabelText('Motion')).toHaveTextContent('off')
    expect(localStorage.getItem('portfolio-motion')).toBe('paused')
    view.unmount()
    renderPreferences()
    expect(screen.getByLabelText('Motion')).toHaveTextContent('off')
    await userEvent.click(screen.getByRole('button', { name: 'Change motion' }))
    expect(screen.getByLabelText('Motion')).toHaveTextContent('on')
    expect(screen.getByLabelText('Theme')).toHaveTextContent('light')
  })

  it('always respects reduced motion, including live system changes', async () => {
    renderPreferences()
    act(() => setMedia('(prefers-reduced-motion: reduce)', true))
    expect(screen.getByLabelText('Motion')).toHaveTextContent('off')
    await userEvent.click(screen.getByRole('button', { name: 'Change motion' }))
    await userEvent.click(screen.getByRole('button', { name: 'Change motion' }))
    expect(screen.getByLabelText('Motion')).toHaveTextContent('off')
    act(() => setMedia('(prefers-reduced-motion: reduce)', false))
    expect(screen.getByLabelText('Motion')).toHaveTextContent('on')
  })

  it('keeps controls working when storage is blocked', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Blocked')
    })
    renderPreferences()
    await userEvent.click(screen.getByRole('button', { name: 'Change theme' }))
    expect(screen.getByLabelText('Theme')).toHaveTextContent('dark')
    await userEvent.click(screen.getByRole('button', { name: 'Change motion' }))
    expect(screen.getByLabelText('Motion')).toHaveTextContent('off')
  })
})
