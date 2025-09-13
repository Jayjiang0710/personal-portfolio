export interface SideQuest {
  title: string
  desc: string // 卡片显示的简短描述
  imageSrc?: string
  designProcess?: string // 详情页的完整设计过程
  fullDescription?: string // 详情页的完整描述
}

export const sideQuests: SideQuest[] = [
  {
    title: '手搓（纯AI）一个个人网站',
    desc: '完全由AI辅助完成的个人作品集网站，展示了现代AI工具在网站开发中的应用。',
    imageSrc: '/sidequest/handcraft-website-cover.png',
    fullDescription: `
      <h3>项目背景</h3>
      <p>这个项目完全由<strong>AI辅助完成</strong>，展示了现代AI工具在网站开发中的应用。</p>
      
      <h3>开发过程</h3>
      <ul>
        <li><strong>需求分析</strong> - 明确网站功能和设计要求</li>
        <li><strong>技术选型</strong> - React + TypeScript + TailwindCSS</li>
        <li><strong>设计实现</strong> - 现代简约的UI设计</li>
        <li><strong>功能开发</strong> - 响应式布局、多语言支持</li>
      </ul>
      
      <h3>技术亮点</h3>
      <p>整个过程体现了AI与人类创意的结合，以及快速原型开发的可能性：</p>
      <ul>
        <li>🤖 <strong>AI协助编码</strong> - 提高开发效率</li>
        <li>🎨 <strong>设计优化</strong> - 现代化的用户界面</li>
        <li>⚡ <strong>快速迭代</strong> - 从零到上线仅用数小时</li>
      </ul>
      
      <p>这个项目展示了<em>AI工具在实际开发中的强大能力</em>。</p>
    `,
    designProcess: `
      <h3>技术实现</h3>
      <p>这个项目采用了现代化的前端技术栈：</p>
      <ul>
        <li><strong>React 18</strong> - 组件化开发</li>
        <li><strong>TypeScript</strong> - 类型安全</li>
        <li><strong>TailwindCSS</strong> - 原子化CSS</li>
        <li><strong>Vite</strong> - 快速构建工具</li>
      </ul>
      
      <h3>AI协作开发</h3>
      <p>整个开发过程体现了AI与人类创意的完美结合：</p>
      <ul>
        <li>🎯 <strong>需求分析</strong> - AI帮助梳理功能需求</li>
        <li>💻 <strong>代码生成</strong> - AI协助编写React组件</li>
        <li>🎨 <strong>样式优化</strong> - AI建议TailwindCSS类名</li>
        <li>🔧 <strong>问题解决</strong> - AI帮助调试和优化</li>
      </ul>
      
      <h3>项目成果</h3>
      <p>最终实现了一个功能完整、设计精美的个人作品集网站：</p>
      <ul>
        <li>📱 <strong>响应式设计</strong> - 适配各种设备</li>
        <li>🌍 <strong>多语言支持</strong> - 中英文切换</li>
        <li>⚡ <strong>性能优化</strong> - 快速加载</li>
        <li>🎯 <strong>用户体验</strong> - 流畅交互</li>
      </ul>
    `
  },
  {
    title: 'Road to 1000',
    desc: '“我要成为国际象棋高手”',
    imageSrc: '/sidequest/road-to-1000-cover.png',
    fullDescription: `
      <h3>项目背景</h3>
      <p><strong>Road to 1000</strong> 是一个关于个人成长和持续学习的长期项目。这个数字"1000"代表着一个里程碑，象征着在某个领域达到一定程度的专业水平。</p>
      
      <h3>核心理念</h3>
      <ul>
        <li><strong>持续学习</strong> - 每天进步一点点</li>
        <li><strong>记录成长</strong> - 记录每一个重要的学习时刻</li>
        <li><strong>目标导向</strong> - 设定明确的目标并为之努力</li>
        <li><strong>反思总结</strong> - 定期回顾和总结学习成果</li>
      </ul>
      
      <h3>项目意义</h3>
      <p>这个项目不仅仅是一个数字游戏，更是一个关于<em>坚持、成长和自我超越</em>的故事。</p>
    `,
    designProcess: `
      <h3>项目规划</h3>
      <p>Road to 1000 项目分为几个关键阶段：</p>
      <ul>
        <li><strong>目标设定</strong> - 明确1000代表什么，如何衡量</li>
        <li><strong>计划制定</strong> - 制定详细的学习计划和里程碑</li>
        <li><strong>执行跟踪</strong> - 记录每天的学习进度和成果</li>
        <li><strong>定期回顾</strong> - 每周、每月进行总结和调整</li>
      </ul>
      
      <h3>学习方法</h3>
      <p>采用系统化的学习方法：</p>
      <ul>
        <li>📚 <strong>理论学习</strong> - 阅读相关书籍和资料</li>
        <li>💻 <strong>实践应用</strong> - 通过项目实践巩固知识</li>
        <li>🤝 <strong>交流分享</strong> - 与他人交流学习心得</li>
        <li>📝 <strong>记录总结</strong> - 写博客、做笔记记录学习过程</li>
      </ul>
      
      <h3>预期成果</h3>
      <p>通过这个项目，期望达到：</p>
      <ul>
        <li>🎯 <strong>技能提升</strong> - 在目标领域达到专业水平</li>
        <li>📈 <strong>知识积累</strong> - 建立完整的知识体系</li>
        <li>🚀 <strong>个人成长</strong> - 培养持续学习的能力</li>
        <li>🌟 <strong>影响力</strong> - 通过分享帮助他人成长</li>
      </ul>
    `
  }
]
