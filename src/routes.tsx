import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/landing'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/cronograma" element={<Schedule />} /> */}
    </Routes>
  )
}
