// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

// 确保根元素存在
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found. Check your index.html');
}

// 创建 root 并渲染
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);