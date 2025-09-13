import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

type Project = {
  title: string
  description: string
  imageAlt: string
  imageSrc?: string
  designProcess?: string
}

export default function Projects() {
  const { s } = useI18n()
  const navigate = useNavigate()
  const projects: Project[] = s.projects.items

  const handleProjectClick = (project: Project) => {
    const encodedTitle = encodeURIComponent(project.title)
    navigate(`/project/${encodedTitle}`)
  }

  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-16 pb-24">
        <header className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">{s.projects.title}</h1>
          <p className="mt-4 text-neutral-700">{s.projects.p}</p>
        </header>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-7">
          {projects.map((p) => (
            <li 
              key={p.title} 
              className="card overflow-hidden group transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-card cursor-pointer"
              onClick={() => handleProjectClick(p)}
            >
              <div className="relative">
                {('imageSrc' in p && p.imageSrc) ? (
                  <img src={p.imageSrc!} alt={p.imageAlt} className="aspect-[4/3] w-full object-cover" />
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-white to-neutral-100" />
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-100/20" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-neutral-700 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 inline-flex items-center text-neutral-900 group-hover:gap-2 transition-all">
                  <span className="text-sm font-medium">{s.projects.viewDetails}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13 5l7 7-7 7M5 12h14"/></svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}


