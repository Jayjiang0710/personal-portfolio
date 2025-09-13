import { useI18n } from '../i18n/I18nProvider'
type ContactItem = { label: string; value: string; href: string; kind: 'email' | 'phone' | 'link' }

export default function Contact() {
  const { s } = useI18n()
  const contacts: ContactItem[] = [
    { label: s.contact.emailCN, value: 'jiangwenze2003@163.com', href: 'mailto:jiangwenze2003@163.com', kind: 'email' },
    { label: s.contact.emailOS, value: 'jiangwenze2003@outlook.com', href: 'mailto:jiangwenze2003@outlook.com', kind: 'email' },
    { label: s.contact.phone, value: '+44 7412069414', href: 'tel:+447412069414', kind: 'phone' },
    { label: s.nav.linkedin, value: 'linkedin.com/in/wenze-jiang-97829a226', href: 'https://www.linkedin.com/in/wenze-jiang-97829a226/', kind: 'link' },
  ]
  return (
    <section className="container-px mx-auto max-w-3xl pt-16 pb-24">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">{s.contact.title}</h1>
      <p className="mt-4 text-neutral-700 leading-relaxed">{s.contact.p}</p>
      <ul className="mt-8 grid gap-4">
        {contacts.map((c) => (
          <li key={c.label} className="card p-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">{c.label}</p>
              <p className="mt-1 font-medium text-neutral-900">{c.value}</p>
            </div>
            <a className="btn-link" href={c.href} target={c.kind === 'link' ? '_blank' : undefined} rel={c.kind === 'link' ? 'noreferrer' : undefined}>
              {c.kind === 'phone' ? s.contact.actions.call : c.kind === 'link' ? s.contact.actions.open : s.contact.actions.email}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}


