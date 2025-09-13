import { NavLink, Outlet } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const LINKEDIN_URL = 'https://www.linkedin.com/in/wenze-jiang-97829a226/'

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-full text-sm transition-colors ${
          isActive ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:text-neutral-900'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default function RootLayout() {
  const { s, lang, setLang } = useI18n()
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-neutral-100">
        <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 lg:h-20">
          <NavLink to="/" className="font-semibold tracking-tight text-neutral-900">WJ</NavLink>
          <div className="hidden sm:flex items-center gap-2">
            <NavItem to="/" label={s.nav.home} />
            <NavItem to="/projects" label={s.nav.projects} />
            <NavItem to="/side-quest" label={s.nav.sideQuest} />
            <NavItem to="/about" label={s.nav.about} />
            <NavItem to="/contact" label={s.nav.contact} />
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="chip hover:bg-neutral-200"
            aria-label={s.nav.linkedin}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.968v5.695h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.562 2.84-1.562 3.038 0 3.6 2.001 3.6 4.604v5.591z"/>
            </svg>
            <span className="hidden sm:inline">{s.nav.linkedin}</span>
          </a>
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="ml-2 sm:ml-4 chip hover:bg-neutral-200"
            aria-label="Switch Language"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-100">
        <div className="container-px mx-auto max-w-7xl py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{s.footer.copyright(new Date().getFullYear())}</p>
          <div className="flex items-center gap-4">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn-link">{s.nav.linkedin}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}


