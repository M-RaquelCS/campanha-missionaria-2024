import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/landing'
import Schedule from './pages/schedule'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  )
}
