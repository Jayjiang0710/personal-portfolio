# 🌐 公网部署指南

让你的个人网站可以被全世界访问！

## 🚀 快速部署方案

### 方案一：Vercel (推荐) - 免费、简单、快速

#### 步骤1：创建GitHub仓库
1. 访问 [GitHub.com](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名：`personal-portfolio` 或 `wenze-portfolio`
4. 选择 "Public" 或 "Private"
5. 点击 "Create repository"

#### 步骤2：推送代码到GitHub
```bash
# 添加远程仓库 (替换为你的GitHub用户名和仓库名)
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送代码
git push -u origin main
```

#### 步骤3：部署到Vercel
1. 访问 [Vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择你的GitHub仓库
5. 点击 "Deploy"

**完成！** 你的网站会有一个类似 `https://你的项目名.vercel.app` 的URL

---

### 方案二：Netlify - 免费、拖拽部署

#### 步骤1：构建项目
```bash
npm run build
```

#### 步骤2：拖拽部署
1. 访问 [Netlify.com](https://netlify.com)
2. 注册/登录账号
3. 将 `dist` 文件夹拖拽到部署区域
4. 自动部署完成

**完成！** 获得一个 `https://随机名称.netlify.app` 的URL

---

### 方案三：GitHub Pages - 免费、适合开发者

#### 步骤1：配置GitHub Actions
创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### 步骤2：启用GitHub Pages
1. 在GitHub仓库设置中找到 "Pages"
2. Source选择 "GitHub Actions"
3. 推送代码后自动部署

---

## 🎯 自定义域名

### 购买域名
- **推荐平台：**
  - 阿里云：`wanwang.aliyun.com`
  - 腾讯云：`dnspod.cloud.tencent.com`
  - GoDaddy：`godaddy.com`
- **价格：** 50-100元/年
- **建议域名：**
  - `wenzejiang.com`
  - `wenze.design`
  - `wenze-portfolio.com`

### 配置域名

#### Vercel配置：
1. 在Vercel项目设置中找到 "Domains"
2. 添加你的域名
3. 按照提示配置DNS记录

#### DNS配置示例：
```
类型: CNAME
名称: @
值: cname.vercel-dns.com
```

---

## 📊 各方案对比

| 方案 | 费用 | 难度 | 功能 | 推荐度 |
|------|------|------|------|--------|
| Vercel | 免费 | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Netlify | 免费 | ⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| GitHub Pages | 免费 | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 阿里云/腾讯云 | 付费 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |

---

## 🔧 高级配置

### 环境变量配置
在Vercel/Netlify中设置：
```
NODE_ENV=production
```

### 性能优化
- 启用gzip压缩
- 配置CDN
- 图片优化

### SEO优化
- 添加sitemap.xml
- 配置robots.txt
- 添加meta标签

---

## 🚨 注意事项

### 安全考虑
- 不要在代码中暴露敏感信息
- 使用环境变量存储密钥
- 定期更新依赖包

### 备份策略
- 定期备份代码到GitHub
- 保存重要的配置文件
- 记录部署步骤

### 监控和维护
- 设置网站监控
- 定期检查性能
- 更新内容和技术栈

---

## 📞 获取帮助

如果遇到问题：
1. 查看官方文档
2. 在GitHub Issues中搜索
3. 在Stack Overflow提问
4. 联系技术支持

---

**立即开始：** 选择Vercel方案，5分钟内让你的网站上线！
