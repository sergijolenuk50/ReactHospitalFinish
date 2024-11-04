import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { DoctorsProvider } from './context/Doctor.context'

createRoot(document.getElementById('root')).render(
  <DoctorsProvider>

  <BrowserRouter>
  {/* <StrictMode> */}
  <App />
  {/* </StrictMode> */}
</BrowserRouter>
  </DoctorsProvider>
)
