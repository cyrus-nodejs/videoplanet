import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { VideoProvider } from './context/videoContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VideoProvider>
    <App />
    </VideoProvider>
  </StrictMode>,
)
