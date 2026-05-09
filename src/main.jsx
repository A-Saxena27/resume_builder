import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ResumeProvider } from './context/ResumeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <ResumeProvider>
          <App />
        </ResumeProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
