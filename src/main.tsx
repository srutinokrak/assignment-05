import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <div className='max-w-11/12 mx-auto'>
     <App />
   </div>
    <ToastContainer/>
  </StrictMode>,
)
