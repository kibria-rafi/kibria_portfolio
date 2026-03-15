/*
  App.jsx — Root component
  Sets up:
  - React Router for navigation
  - Loading screen on initial render
  - Global scroll-to-top on route changes
*/

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoadingScreen from './components/LoadingScreen'

function App() {
  // Show loading screen for ~2.5 seconds on first load
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      {/* Loading screen renders on top until dismissed */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes can be added here, e.g.: */}
        {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
      </Routes>
    </Router>
  )
}

export default App
