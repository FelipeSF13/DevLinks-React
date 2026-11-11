import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Fonte Inter auto-hospedada. Os pesos importados são provisórios e serão
// confirmados contra o Style Guide do Figma nas próximas fases.
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
