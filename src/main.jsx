import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeaderLogoBar from './components/HeaderLogoBar.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ContextPlayer from './contexts/ContextPlayer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextPlayer>
      <App />
    </ContextPlayer>
  </BrowserRouter>,
)
