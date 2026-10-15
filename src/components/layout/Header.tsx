import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight, Menu, Moon, Pause, Play, Sun, X } from 'lucide-react'
import { usePreferences } from '../../features/preferences/preferences'
import { MountainMark } from '../ui/MountainMark'

const navigation = [
  { label: 'About', hash: 'about' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Work', hash: 'work' },
  { label: 'Toolkit', hash: 'skills' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const { theme, toggleTheme, motionEnabled, reducedMotion, toggleMotion } =
    usePreferences()
  const location = useLocation()

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false)
          menuButton.current?.focus()
        }
      }}
    >
      <div className="shell flex h-22 items-center justify-between gap-4">
        <Link
          to="/"
          className="brand flex items-center gap-3"
          aria-label="Udit Gupta home"
          onClick={() => setOpen(false)}
        >
          <MountainMark />
          <span className="font-semibold tracking-tight">
            udit<span className="text-accent">.</span>
            <span className="brand-subtitle">ENGINEER & EXPLORER</span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.hash}
              className={`nav-link ${location.hash === `#${item.hash}` ? 'active' : ''}`}
              to={`/#${item.hash}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="icon-button motion-button"
            type="button"
            onClick={toggleMotion}
            disabled={reducedMotion}
            aria-label={
              reducedMotion
                ? 'Motion reduced by system preference'
                : motionEnabled
                  ? 'Pause animations'
                  : 'Resume animations'
            }
            title={
              reducedMotion
                ? 'Reduced motion is enabled on your device'
                : motionEnabled
                  ? 'Pause animations'
                  : 'Resume animations'
            }
          >
            {motionEnabled ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <Sun
              size={15}
              className={theme === 'light' ? 'theme-icon-selected' : ''}
            />
            <Moon
              size={15}
              className={theme === 'dark' ? 'theme-icon-selected' : ''}
            />
          </button>
          <Link to="/#contact" className="header-contact hidden sm:inline-flex">
            Let’s talk <ArrowUpRight size={15} />
          </Link>
          <button
            className="icon-button mobile-menu-toggle lg:hidden"
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-navigation lg:hidden"
        >
          {[
            ...navigation,
            { label: 'Beyond work', hash: 'beyond' },
            { label: 'Contact', hash: 'contact' },
          ].map((item) => (
            <Link
              key={item.hash}
              to={`/#${item.hash}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
