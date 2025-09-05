// src/index.js
import React from 'react'
import { createRoot } from 'react-dom/client' // ✅ React 18 新 API
import App from './components/App'
import './index.css'

// 获取根元素
const container = document.getElementById('root')

// 创建 root
const root = createRoot(container)

// 渲染应用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)