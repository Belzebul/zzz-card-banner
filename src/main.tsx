import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DiscSetForm from './StatsView'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < DiscSetForm />
  </StrictMode>,
)
