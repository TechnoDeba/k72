import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './common/stairs.jsx'
import NAvContext from './context/NAvContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stairs>
  <NAvContext>
    <App />
  </NAvContext>
    </Stairs>
    </BrowserRouter>
  </StrictMode>,
)
