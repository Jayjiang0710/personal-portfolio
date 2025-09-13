import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { sideQuests } from '../data/sideQuests'

export type Lang = 'en' | 'zh'

type ProjectItem = { title: string; description: string; imageAlt: string; imageSrc?: string; designProcess?: string }

type Strings = {
  meta: { title: string; description: string }
  nav: { home: string; projects: string; sideQuest: string; about: string; contact: string; linkedin: string }
  footer: { copyright: (year: number) => string }
  home: {
    badge: string
    h1: { line1: string; line2: string }
    p: string
    ctaProjects: string
    ctaAbout: string
    cardCaption: string
  }
  about: {
    title: string
    p: string
    bioTitle: string
    bioBullets: string[]
    philosophyTitle: string
    philosophyText: string
    experienceTitle?: string
    experienceItems?: { text: string; logoSrc?: string; logoAlt?: string }[]
  }
  projects: {
    title: string
    p: string
    viewDetails: string
    items: ProjectItem[]
  }
  sideQuest: {
    title: string
    p: string
    blocks: { title: string; desc: string; imageSrc?: string; designProcess?: string }[]
  }
  contact: {
    title: string
    p: string
    emailCN: string
    emailOS: string
    phone: string
    actions: { email: string; call: string; open: string }
  }
  modal: {
    description: string
    designProcess: string
    close: string
  }
  notFound: {
    title: string
    message: string
    back: string
  }
}

const en: Strings = {
  meta: {
    title: 'Wenze Jiang · Product Designer',
    description: 'Portfolio of Wenze Jiang, Product Designer. Clean, minimal, and elegant design.',
  },
  nav: { home: 'Home', projects: 'Projects', sideQuest: 'Side Quest', about: 'About', contact: 'Contact', linkedin: 'LinkedIn' },
  footer: { copyright: (y) => `© ${y} Wenze Jiang · All rights reserved` },
  home: {
    badge: 'Product Designer · Experience Strategy · Systems Thinking',
    h1: { line1: 'Designing elegant systems', line2: 'that solve real problems' },
    p: 'I craft end-to-end, human-centered experiences. My focus is on information architecture, interaction patterns, and scalable design systems that bring clarity and delight.',
    ctaProjects: 'View Projects',
    ctaAbout: 'About Me',
    cardCaption: 'Depth in systems, simplicity on the surface',
  },
  about: {
    title: 'About',
    p: 'Hi, I’m Wenze Jiang — a product designer with experience across web, iOS, Android and B2B platforms. I care about usability and coherence in complex systems. I believe design connects people to value, and that clear models and system thinking help teams deliver better outcomes.',
    bioTitle: 'Education',
    bioBullets: [
      'University College London (UCL) · Mechanical Engineering | Integrated MEng (Sep 2021 – Jun 2025)',
      'Current GPA: 3.7/4.0 (First Class Honours)',
      'Relevant coursework: Fluid Mechanics, Thermodynamics, Materials, Engineering Dynamics, Applied Programming for Data Science, Manufacturing and Design, Solid Mechanics & Structures, Biomedical Engineering Applications',
    ],
    philosophyTitle: 'Design Philosophy',
    philosophyText: 'Good design makes complexity feel understandable and controllable. I aim for systems that are coherent and humane—structured by strong models and made delightful through thoughtful details and seamless interactions.',
    experienceTitle: 'Work Experience',
    experienceItems: [
      { text: 'Mercedes-Benz Beijing — AD Internship', logoSrc: '/logos/mercedes.png', logoAlt: 'Mercedes-Benz' },
      { text: 'BeiGene Guangzhou — QA Internship', logoSrc: '/logos/beigene.png', logoAlt: 'BeiGene' },
      { text: 'Apple Shanghai', logoSrc: '/logos/apple.png', logoAlt: 'Apple' },
    ],
  },
  projects: {
    title: 'Selected Projects',
    p: 'A small selection of recent work. Each case covers the context, framing, key decisions, and outcomes. Reach out if you’d like to see full details.',
    viewDetails: 'View details',
    items: [
      { title: 'Patient-specific Hemodynamic Indices as Predictors of Lumen Remodeling in SFA Post-revascularization', description: 'Computational hemodynamics and data analysis to investigate patient-specific predictors for post-operative lumen remodeling in the superficial femoral artery (SFA).', imageAlt: 'SFA hemodynamics study cover', imageSrc: '/projects/sfa-hemodynamics-cover.png', designProcess: 'This project employed a multi-stage research methodology. First, patient-specific 3D vascular models were constructed from medical imaging data, followed by computational fluid dynamics analysis using specialized software, and finally machine learning algorithms were used to identify key predictive factors. The entire process emphasized data-driven approaches and clinical applicability.' },
      { title: 'Apple Design Challenge - iPod Battery Door Design', description: 'A case study focusing on assembly and space utilization.', imageAlt: 'Apple Design Challenge cover', imageSrc: '/projects/apple-design-challenge-cover.png', designProcess: 'The design process began with user needs analysis, focusing on product assembly and space utilization efficiency. Through multiple prototype iterations, the battery door opening mechanism and internal space layout were optimized to ensure optimal functionality and user experience within limited space constraints.' },
    ],
  },
  sideQuest: {
    title: 'Side Quest',
    p: 'A space for explorations and small experiments.',
    blocks: [
      { title: 'Handcraft (Pure AI) a Personal Website', desc: '"Python 30 Days Introduction"', imageSrc: '/sidequest/handcraft-website-cover.png', designProcess: 'This project was completed entirely with AI assistance, demonstrating the application of modern AI tools in website development. From requirements analysis to design implementation, the entire process showcases the combination of AI and human creativity, as well as the possibility of rapid prototyping.' },
    ],
  },
  contact: {
    title: 'Contact',
    p: 'I’d love to connect. For collaboration or opportunities, feel free to reach out via email or phone.',
    emailCN: 'Email (China)',
    emailOS: 'Email (Overseas)',
    phone: 'Phone',
    actions: { email: 'Email', call: 'Call', open: 'Open' },
  },
  modal: {
    description: 'Project Description',
    designProcess: 'Design Process',
    close: 'Close',
  },
  notFound: {
    title: 'Project Not Found',
    message: 'Sorry, the project you are looking for could not be found.',
    back: 'Go Back',
  },
}

const zh: Strings = {
  meta: {
    title: '江汶泽 · 产品设计师',
    description: '我的个人作品集。干净、极简且优雅的设计。',
  },
  nav: { home: '首页', projects: '项目', sideQuest: 'Side Quest', about: '关于', contact: '联系', linkedin: '领英' },
  footer: { copyright: (y) => `© ${y} 江汶泽 · 保留所有权利` },
  home: {
    badge: '产品设计师 · 体验策略 · 系统思维',
    h1: { line1: '你好，', line2: '我是 江汶泽' },
    p: '我专注于以用户为中心的端到端体验设计，聚焦信息架构、交互模式与可扩展的设计系统，让复杂变得清晰而愉悦。',
    ctaProjects: '查看项目',
    ctaAbout: '关于我',
    cardCaption: '“先空着吧。”',
  },
  about: {
    title: '关于',
    p: '你好，我是江汶泽，一名产品设计师。我关注复杂系统下的可用性与一致性，相信设计连接人与价值，清晰的模型与系统思维能帮助团队达成更好的结果。',
    bioTitle: '教育',
    bioBullets: [
      '伦敦大学学院（UCL） 机械工程硕士（2021.09 - 2025.06）',
      '一等荣誉学位 First Class Honours',
      '相关课程：流体力学、热力学、材料学、工程动力学、数据科学应用编程、工业生产和设计、固体与结构力学、生物医疗工程应用',
    ],
    philosophyTitle: '设计哲学',
    philosophyText: '好的设计让复杂变得可感知、可掌控。我追求在强模型支撑下的人性化系统，以细腻的细节与连贯的交互带来愉悦体验。',
    experienceTitle: '工作经历',
    experienceItems: [
      { text: '梅赛德斯-奔驰北京 · 智能驾驶实习生', logoSrc: '/logos/mercedes.png', logoAlt: 'Mercedes-Benz' },
      { text: '百济神州广州 · QA 实习生', logoSrc: '/logos/beigene.png', logoAlt: 'BeiGene' },
      { text: 'Apple Shanghai', logoSrc: '/logos/apple.png', logoAlt: 'Apple' },
    ],
  },
  projects: {
    title: '精选项目',
    p: '以下是部分近期工作片段。每个案例包含背景、定位、关键决策与结果回顾。如需完整细节，欢迎联系我。',
    viewDetails: '查看详情',
    items: projects,
  },
  sideQuest: {
    title: 'Side Quest',
    p: '这里是探索与小实验的空间。',
    blocks: sideQuests,
  },
  contact: {
    title: '联系',
    p: '很高兴与你交流。合作或机会相关，欢迎通过邮箱或电话与我联系。',
    emailCN: '邮箱（中国）',
    emailOS: '邮箱（海外）',
    phone: '电话',
    actions: { email: '发送邮件', call: '拨打电话', open: '打开' },
  },
  modal: {
    description: '项目描述',
    designProcess: '设计过程',
    close: '关闭',
  },
  notFound: {
    title: '项目未找到',
    message: '抱歉，找不到您要查看的项目。',
    back: '返回上一页',
  },
}

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  s: Strings
}

const I18nContext = createContext<Ctx | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('lang') as Lang | null : null
    if (saved === 'en' || saved === 'zh') return saved
    const nav = typeof navigator !== 'undefined' ? navigator.language : 'en'
    return nav.startsWith('zh') ? 'zh' : 'en'
  })

  const s = useMemo(() => (lang === 'zh' ? zh : en), [lang])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
      document.title = s.meta.title
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', s.meta.description)
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', lang)
    }
  }, [lang, s])

  const value = useMemo<Ctx>(() => ({ lang, setLang, s }), [lang, s])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


