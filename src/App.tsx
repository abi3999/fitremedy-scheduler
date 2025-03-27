
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import WorkoutsPage from './pages/WorkoutsPage'
import NutritionPage from './pages/NutritionPage'
import RemediesPage from './pages/RemediesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/remedies" element={<RemediesPage />} />
      </Route>
    </Routes>
  )
}

export default App
