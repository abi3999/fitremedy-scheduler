
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-fitness-red-700 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">Fitness App</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-fitness-red-200 transition-colors">Home</Link>
            <Link to="/workouts" className="hover:text-fitness-red-200 transition-colors">Workouts</Link>
            <Link to="/nutrition" className="hover:text-fitness-red-200 transition-colors">Nutrition</Link>
            <Link to="/remedies" className="hover:text-fitness-red-200 transition-colors">Remedies</Link>
          </div>
          <div className="md:hidden">
            <button className="p-2" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-fitness-red-600">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-fitness-red-200 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/workouts" className="hover:text-fitness-red-200 transition-colors" onClick={toggleMenu}>Workouts</Link>
              <Link to="/nutrition" className="hover:text-fitness-red-200 transition-colors" onClick={toggleMenu}>Nutrition</Link>
              <Link to="/remedies" className="hover:text-fitness-red-200 transition-colors" onClick={toggleMenu}>Remedies</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
