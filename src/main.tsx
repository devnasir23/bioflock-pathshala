import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App'
import './styles/global.css'

registerSW({
  immediate: true,
  onRegisteredSW(swUrl, registration) {
    if (import.meta.env.DEV) {
      console.info('[pwa] service worker registered:', swUrl)
    }
    // Check for updates periodically while the app is open
    if (registration) {
      setInterval(() => {
        void registration.update()
      }, 60 * 60 * 1000)
    }
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
