import { useParams, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  const { s } = useI18n()

  // 从URL参数中解析项目信息
  const decodedProjectId = projectId ? decodeURIComponent(projectId) : ''
  
  // 查找项目（从projects和sideQuest中查找）
  const allProjects = [
    ...s.projects.items.map(item => ({ ...item, type: 'project' as const })),
    ...s.sideQuest.blocks.map(item => ({ 
      title: item.title, 
      description: item.desc, 
      fullDescription: (item as any).fullDescription,
      imageSrc: item.imageSrc, 
      imageAlt: item.title,
      designProcess: item.designProcess,
      type: 'sidequest' as const 
    }))
  ]
  
  const project = allProjects.find(p => p.title === decodedProjectId)

  if (!project) {
    return (
      <div className="container-px mx-auto max-w-4xl pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-4">{s.notFound.title}</h1>
          <p className="text-neutral-700 mb-8">{s.notFound.message}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors duration-200"
          >
            {s.notFound.back}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container-px mx-auto max-w-4xl pt-16 pb-24">
      {/* 返回按钮 */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {s.modal.close}
      </button>

      {/* 项目图片 */}
      {project.imageSrc && (
        <div className="relative rounded-2xl mb-8 overflow-hidden">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="w-full h-auto max-h-96 object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      )}

      {/* 项目内容 */}
      <div className="space-y-8">
        {/* 标题 */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium mb-4">
            {project.type === 'project' ? s.projects.title : s.sideQuest.title}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            {project.title}
          </h1>
        </div>

        {/* 描述 */}
        <div>
          <h2 className="text-xl font-semibold text-neutral-800 mb-4">
            {s.modal.description}
          </h2>
          <div 
            className="prose prose-lg max-w-none text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: (project as any).fullDescription || project.description }}
          />
        </div>

        {/* 设计过程 */}
        {project.designProcess && (
          <div 
            className="prose prose-lg max-w-none text-neutral-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.designProcess }}
          />
        )}

        {/* 底部操作 */}
        <div className="pt-8 border-t border-neutral-200">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors duration-200"
          >
            {s.modal.close}
          </button>
        </div>
      </div>
    </div>
  )
}
