import { useI18n } from '../i18n/I18nProvider'

export default function About() {
  const { s } = useI18n()
  return (
    <section className="container-px mx-auto max-w-3xl pt-16 pb-24">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">{s.about.title}</h1>
      <p className="mt-4 text-neutral-700 leading-relaxed">{s.about.p}</p>
      <div className="mt-10 grid gap-6">
        <div className="card p-6">
          <div className="flex items-start gap-4">
            <img
              src="/ucl-logo.png"
              alt="UCL"
              className="w-20 h-10 object-contain"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement
                if (!img.src.endsWith('/ucl-logo.svg')) img.src = '/ucl-logo.svg'
              }}
            />
            <div className="flex-1">
              <h2 className="text-xl font-medium text-neutral-900">{s.about.bioTitle}</h2>
              <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">
                {s.about.bioBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-medium text-neutral-900">{s.about.experienceTitle ?? s.about.philosophyTitle}</h2>
          {s.about.experienceItems ? (
            <ul className="mt-3 space-y-3">
              {s.about.experienceItems.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-neutral-700">
                  {item.logoSrc ? (
                    <img src={item.logoSrc} alt={item.logoAlt ?? ''} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  ) : null}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-neutral-700 leading-relaxed">{s.about.philosophyText}</p>
          )}
        </div>
      </div>
    </section>
  )
}


