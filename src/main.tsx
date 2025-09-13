import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './shared/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import SideQuest from './pages/SideQuest'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import { I18nProvider } from './i18n/I18nProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'side-quest', element: <SideQuest /> },
      { path: 'contact', element: <Contact /> },
      { path: 'project/:projectId', element: <ProjectDetail /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </React.StrictMode>
)


