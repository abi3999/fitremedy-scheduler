
import { useState } from 'react'

const RemediesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredRemedies = remedies.filter(remedy => 
    remedy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    remedy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    remedy.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
  )
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-fitness-red-700 mb-6">Fitness Remedies</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-fitness-red-700 mb-4">Search Remedies</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by remedy name or symptom..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fitness-red-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 absolute right-3 top-2.5 text-gray-400"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRemedies.length > 0 ? (
          filteredRemedies.map((remedy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-12 bg-fitness-red-600 flex items-center justify-center text-white font-bold">
                {remedy.type}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-fitness-red-700 mb-2">{remedy.title}</h3>
                <div className="mb-3">
                  <h4 className="font-semibold text-fitness-red-600">Good For:</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {remedy.symptoms.map((symptom, i) => (
                      <span key={i} className="bg-fitness-red-100 text-fitness-red-700 px-2 py-1 rounded text-sm">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{remedy.description}</p>
                <button className="bg-fitness-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-fitness-red-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-lg text-gray-600">No remedies found matching your search. Try a different search term.</p>
          </div>
        )}
      </div>
      
      {filteredRemedies.length > 0 && filteredRemedies.length < remedies.length && (
        <div className="text-center mt-6">
          <p className="text-gray-600">Showing {filteredRemedies.length} of {remedies.length} remedies</p>
        </div>
      )}
    </div>
  )
}

const remedies = [
  {
    title: "Foam Rolling for Muscle Soreness",
    type: "Recovery Technique",
    symptoms: ["Muscle Soreness", "Tightness", "Reduced Mobility"],
    description: "Using a foam roller to apply pressure to specific points on the body can help release muscle tension and improve circulation."
  },
  {
    title: "Epsom Salt Bath",
    type: "Recovery Soak",
    symptoms: ["Muscle Fatigue", "Soreness", "Inflammation"],
    description: "Soaking in warm water with Epsom salt (magnesium sulfate) can help reduce muscle soreness and inflammation after intense workouts."
  },
  {
    title: "Dynamic Stretching Routine",
    type: "Warm-up Technique",
    symptoms: ["Muscle Stiffness", "Reduced Range of Motion", "Injury Prevention"],
    description: "A series of active movements that mimic the exercise or sport to be performed, helping to prepare the muscles and joints for activity."
  },
  {
    title: "Cold Compress for Acute Injuries",
    type: "Injury Treatment",
    symptoms: ["Swelling", "Inflammation", "Pain", "Acute Injury"],
    description: "Applying ice to an acute injury helps reduce swelling, inflammation, and pain by constricting blood vessels and numbing the area."
  },
  {
    title: "Curcumin Supplementation",
    type: "Natural Supplement",
    symptoms: ["Inflammation", "Joint Pain", "Recovery Support"],
    description: "The active compound in turmeric has anti-inflammatory properties that may help reduce exercise-induced inflammation and joint pain."
  },
  {
    title: "Hydration Strategy",
    type: "Performance Support",
    symptoms: ["Dehydration", "Muscle Cramps", "Fatigue"],
    description: "A proper hydration plan before, during, and after exercise to maintain fluid balance and prevent dehydration-related issues."
  },
  {
    title: "Active Recovery Workout",
    type: "Recovery Technique",
    symptoms: ["Muscle Soreness", "Fatigue", "Reduced Performance"],
    description: "Low-intensity exercise that promotes blood flow to sore muscles, helping to remove waste products and deliver nutrients."
  },
  {
    title: "Compression Garments",
    type: "Recovery Aid",
    symptoms: ["Muscle Soreness", "Swelling", "Circulation Issues"],
    description: "Tight-fitting clothing that may help reduce muscle soreness by improving circulation and reducing fluid buildup in tissues."
  },
  {
    title: "Tart Cherry Juice",
    type: "Natural Supplement",
    symptoms: ["Inflammation", "Muscle Damage", "Sleep Issues"],
    description: "Contains antioxidants and anti-inflammatory compounds that may help reduce exercise-induced muscle damage and improve sleep."
  }
];

export default RemediesPage
