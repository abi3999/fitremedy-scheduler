
const WorkoutsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-fitness-red-700 mb-6">Workout Programs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {workouts.map((workout, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-fitness-red-200 flex items-center justify-center">
              <span className="text-fitness-red-700 font-bold text-lg">[Workout Image]</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-fitness-red-700 mb-2">{workout.title}</h2>
              <p className="text-gray-600 mb-2">{workout.duration} • {workout.level}</p>
              <p className="text-gray-700 mb-4">{workout.description}</p>
              <button className="bg-fitness-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-fitness-red-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-fitness-red-50 rounded-lg p-6 border border-fitness-red-200">
        <h2 className="text-2xl font-bold text-fitness-red-700 mb-4">Custom Workout Plan</h2>
        <p className="text-gray-700 mb-4">Need a personalized workout plan? Let us help you create a program tailored to your specific goals and needs.</p>
        <button className="bg-fitness-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-fitness-red-700 transition-colors">
          Create My Plan
        </button>
      </div>
    </div>
  )
}

const workouts = [
  {
    title: "Full Body HIIT",
    duration: "30 min",
    level: "Intermediate",
    description: "High-intensity interval training that targets all major muscle groups for maximum calorie burn."
  },
  {
    title: "Upper Body Strength",
    duration: "45 min",
    level: "Beginner",
    description: "Focus on building strength in your chest, back, shoulders, and arms with this comprehensive routine."
  },
  {
    title: "Core Crusher",
    duration: "20 min",
    level: "All Levels",
    description: "Strengthen your abs, obliques, and lower back with this targeted core workout."
  },
  {
    title: "Lower Body Blast",
    duration: "40 min",
    level: "Intermediate",
    description: "Build stronger legs and glutes with this effective lower body workout routine."
  },
  {
    title: "Cardio Kickboxing",
    duration: "35 min",
    level: "Advanced",
    description: "Combine martial arts techniques with fast-paced cardio for an intense full-body workout."
  },
  {
    title: "Yoga Flow",
    duration: "50 min",
    level: "All Levels",
    description: "Improve flexibility, balance, and mental clarity with this calming yet strengthening yoga sequence."
  }
];

export default WorkoutsPage
