
import { Link } from 'react-router-dom'

const HomePage = () => {
  const handleGetStarted = () => {
    console.log('Get Started button clicked')
    // In a real app, this could start an onboarding flow or scroll to a specific section
    window.scrollTo({ top: document.getElementById('features')?.offsetTop || 0, behavior: 'smooth' })
  }

  const handleStartTracking = () => {
    console.log('Start Tracking button clicked')
    // In a real app, this would open a tracking interface or redirect to a tracking page
    alert('Tracking feature coming soon!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-fitness-red-700 to-fitness-red-500 text-white rounded-lg p-8 mb-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Fitness Journey</h1>
        <p className="text-xl mb-6">Your path to a healthier and stronger you starts here</p>
        <button 
          className="bg-white text-fitness-red-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
      
      <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-fitness-red-700 mb-4">Workouts</h2>
          <p className="text-gray-700 mb-4">Discover personalized workout routines that fit your lifestyle and goals.</p>
          <Link to="/workouts" className="text-fitness-red-600 font-semibold hover:text-fitness-red-800 transition-colors">
            Explore Workouts →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-fitness-red-700 mb-4">Nutrition</h2>
          <p className="text-gray-700 mb-4">Learn about balanced nutrition and find recipes that fuel your fitness journey.</p>
          <Link to="/nutrition" className="text-fitness-red-600 font-semibold hover:text-fitness-red-800 transition-colors">
            Explore Nutrition →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-fitness-red-700 mb-4">Remedies</h2>
          <p className="text-gray-700 mb-4">Natural solutions for common fitness problems and recovery techniques.</p>
          <Link to="/remedies" className="text-fitness-red-600 font-semibold hover:text-fitness-red-800 transition-colors">
            Explore Remedies →
          </Link>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-fitness-red-700 mb-6 text-center">Track Your Progress</h2>
        <p className="text-lg text-center mb-6">Monitor your fitness journey with our easy-to-use tracking tools</p>
        <div className="flex justify-center">
          <button 
            className="bg-fitness-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-fitness-red-700 transition-colors"
            onClick={handleStartTracking}
          >
            Start Tracking
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
