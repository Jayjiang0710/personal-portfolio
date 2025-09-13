import { useI18n } from '../i18n/I18nProvider'

export default function Home() {
  const { s } = useI18n()
  return (
    <section className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      
      {/* 代码装饰元素 */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-32 border border-neutral-200/50 rounded-lg bg-white/30 backdrop-blur-sm">
            <div className="p-3">
              <div className="flex gap-1 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-neutral-200/50 rounded w-16" />
                <div className="h-2 bg-neutral-200/50 rounded w-20" />
                <div className="h-2 bg-neutral-200/50 rounded w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl pt-24 lg:pt-28 pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* 动态标题 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 animate-pulse" />
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-neutral-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {s.home.h1.line1}
                </span>
                <br className="hidden sm:block" />
                <span className="text-neutral-900">
                  {s.home.h1.line2}
                </span>
              </h1>
            </div>
            
            {/* 描述文字 */}
            <p className="mt-8 text-lg text-neutral-700 max-w-2xl leading-relaxed">
              {s.home.p}
            </p>
            
            {/* 按钮组 */}
            <div className="mt-10 flex items-center gap-6">
              <a 
                href="/projects" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">{s.home.ctaProjects}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a 
                href="/about" 
                className="group px-8 py-4 text-neutral-700 font-medium hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
              >
                {s.home.ctaAbout}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* 右侧卡片 */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* 装饰性边框 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative card p-8 lg:p-10 transition-all duration-500 will-change-transform hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/20">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 grid place-items-center relative">
                  {/* 背景装饰 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30" />
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-xl" />
                  
                  <div className="text-center relative z-10">
                    <div className="mx-auto w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                      <img 
                        src="/profile-photo.png" 
                        alt="江汶泽的个人照片" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.log('图片加载失败:', e.currentTarget.src);
                          // 如果图片加载失败，显示默认头像
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                        onLoad={() => {
                          console.log('图片加载成功');
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 text-white grid place-items-center hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 lg:w-16 lg:h-16">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="mt-6 text-neutral-700 font-medium">{s.home.cardCaption}</p>
                    
                    {/* 小装饰 */}
                    <div className="mt-4 flex justify-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


