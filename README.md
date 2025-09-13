# 江汶泽的个人作品集网站

一个现代化的个人作品集网站，使用 React + TypeScript + TailwindCSS 构建。

## ✨ 特性

- 🎨 现代化设计，响应式布局
- 🌐 中英文双语支持
- 📱 移动端和桌面端完美适配
- ⚡ 基于 Vite 的快速构建
- 🎯 项目详情页面，支持独立URL
- 🔄 热更新开发体验

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 🖥️ 本地部署

### 方案一：Python服务器 (最简单)
```bash
# 构建项目
npm run build

# 启动Python服务器
cd dist && python3 -m http.server 8000
```
访问：http://localhost:8000

### 方案二：Node.js服务器
```bash
# 构建项目
npm run build

# 使用serve启动
npx serve dist -p 3000
```
访问：http://localhost:3000

### 方案三：Docker部署
```bash
# 构建并启动Docker容器
docker-compose up -d

# 或者直接使用Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```
访问：http://localhost:3000

### 方案四：Nginx部署
```bash
# 构建项目
npm run build

# 复制到Nginx目录
sudo cp -r dist/* /usr/share/nginx/html/

# 复制配置文件
sudo cp nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```
访问：http://localhost

## 📁 项目结构

```
src/
├── components/          # 可复用组件
├── i18n/               # 国际化配置
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页
│   ├── About.tsx       # 关于页面
│   ├── Projects.tsx    # 项目列表
│   ├── SideQuest.tsx   # Side Quest
│   ├── Contact.tsx     # 联系页面
│   └── ProjectDetail.tsx # 项目详情页
├── shared/             # 共享组件
└── main.tsx           # 应用入口

public/                 # 静态资源
├── projects/          # 项目图片
├── sidequest/         # Side Quest图片
├── logos/             # 公司logo
└── favicon.svg        # 网站图标
```

## 🌐 部署选项

### 1. Vercel (推荐)
- 免费、快速、自动部署
- 支持 Git 集成
- 自动 HTTPS

### 2. Netlify
- 免费计划
- 拖拽部署
- 自动构建

### 3. GitHub Pages
- 免费托管
- 需要配置构建脚本

### 4. 自建服务器
- 完全控制
- 需要配置 Nginx/Apache

## 🔧 部署步骤

### Vercel 部署 (推荐)

1. **推送代码到 GitHub**
```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

2. **连接 Vercel**
- 访问 [vercel.com](https://vercel.com)
- 使用 GitHub 账号登录
- 导入你的仓库
- 自动部署完成

### 自定义域名

1. **购买域名**
   - 推荐：阿里云、腾讯云、GoDaddy
   - 价格：约 50-100 元/年

2. **配置 DNS**
   - 添加 A 记录指向 Vercel 服务器
   - 或使用 CNAME 记录

3. **在 Vercel 中添加域名**
   - 项目设置 → Domains
   - 添加你的域名

## 📝 自定义内容

### 更新个人信息
编辑 `src/i18n/I18nProvider.tsx` 文件中的内容：

```typescript
// 中文内容
const zh: Strings = {
  meta: {
    title: '你的名字 · 职位',
    description: '你的描述',
  },
  // ... 其他内容
}
```

### 添加项目
在 `src/i18n/I18nProvider.tsx` 的 `projects.items` 数组中添加：

```typescript
{
  title: '项目标题',
  description: '项目描述',
  imageSrc: '/projects/项目图片.png',
  imageAlt: '图片描述',
  designProcess: '设计过程描述'
}
```

### 更换图片
将图片文件放在 `public/` 目录下，然后更新代码中的路径。

## 🎨 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: TailwindCSS
- **路由**: React Router
- **国际化**: 自定义 i18n 方案

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**江汶泽** - 产品设计师
- 📧 邮箱：jiangwenze2003@163.com
- 🔗 LinkedIn：[江汶泽](https://www.linkedin.com/in/wenze-jiang-97829a226/)
