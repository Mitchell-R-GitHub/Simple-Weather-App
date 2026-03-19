import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="container min-vh-100 min-vw-100 bg-dark">
        <App/>
      </div>
  </StrictMode>,
)
