import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { Analytics } from '@vercel/analytics/react'

export function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Router />
    </BrowserRouter>
  )
}
