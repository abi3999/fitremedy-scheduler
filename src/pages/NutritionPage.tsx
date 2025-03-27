
const NutritionPage = () => {
  const handleViewRecipe = (recipeTitle: string) => {
    console.log(`View recipe clicked for: ${recipeTitle}`)
    alert(`Recipe details for ${recipeTitle} coming soon!`)
  }

  const handleCreateMealPlan = () => {
    console.log('Create meal plan clicked')
    alert('Meal planner coming soon!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-fitness-red-700 mb-6">Nutrition Guide</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-fitness-red-700 mb-4">Nutrition Basics</h2>
        <p className="text-gray-700 mb-4">
          A balanced diet is essential for supporting your fitness goals. Focus on consuming a mix of macronutrients (proteins, carbohydrates, and fats) and micronutrients (vitamins and minerals) to fuel your body properly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-fitness-red-50 p-4 rounded border border-fitness-red-100">
            <h3 className="font-bold text-fitness-red-700 mb-2">Protein</h3>
            <p className="text-gray-700">Essential for muscle repair and growth. Aim for 0.8-1g per pound of body weight.</p>
          </div>
          <div className="bg-fitness-red-50 p-4 rounded border border-fitness-red-100">
            <h3 className="font-bold text-fitness-red-700 mb-2">Carbohydrates</h3>
            <p className="text-gray-700">Your body's primary energy source. Focus on complex carbs for sustained energy.</p>
          </div>
          <div className="bg-fitness-red-50 p-4 rounded border border-fitness-red-100">
            <h3 className="font-bold text-fitness-red-700 mb-2">Healthy Fats</h3>
            <p className="text-gray-700">Important for hormone production and vitamin absorption. Choose unsaturated fats.</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-fitness-red-700 mb-4">Healthy Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-fitness-red-200 flex items-center justify-center">
              <span className="text-fitness-red-700 font-bold text-lg">[Recipe Image]</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-fitness-red-700 mb-2">{recipe.title}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <span className="mr-4">{recipe.prepTime}</span>
                <span>{recipe.calories}</span>
              </div>
              <p className="text-gray-700 mb-4">{recipe.description}</p>
              <button 
                className="bg-fitness-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-fitness-red-700 transition-colors"
                onClick={() => handleViewRecipe(recipe.title)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-fitness-red-50 rounded-lg p-6 border border-fitness-red-200">
        <h2 className="text-2xl font-bold text-fitness-red-700 mb-4">Meal Planning</h2>
        <p className="text-gray-700 mb-4">Need help planning your meals? Our meal planner can help you create balanced meals that align with your fitness goals.</p>
        <button 
          className="bg-fitness-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-fitness-red-700 transition-colors"
          onClick={handleCreateMealPlan}
        >
          Create Meal Plan
        </button>
      </div>
    </div>
  )
}

const recipes = [
  {
    title: "Protein-Packed Breakfast Bowl",
    prepTime: "15 min prep",
    calories: "420 calories",
    description: "Start your day with this high-protein breakfast bowl featuring Greek yogurt, mixed berries, and crunchy granola."
  },
  {
    title: "Grilled Chicken Salad",
    prepTime: "20 min prep",
    calories: "350 calories",
    description: "A refreshing salad with grilled chicken, mixed greens, avocado, and a light vinaigrette dressing."
  },
  {
    title: "Sweet Potato & Black Bean Bowl",
    prepTime: "30 min prep",
    calories: "380 calories",
    description: "A nutrient-dense bowl with roasted sweet potatoes, black beans, quinoa, and fresh vegetables."
  },
  {
    title: "Salmon & Vegetable Stir-Fry",
    prepTime: "25 min prep",
    calories: "410 calories",
    description: "Omega-rich salmon with stir-fried broccoli, bell peppers, and snap peas in a ginger-garlic sauce."
  },
  {
    title: "Turkey & Veggie Wrap",
    prepTime: "10 min prep",
    calories: "320 calories",
    description: "A quick and easy wrap filled with lean turkey, hummus, and crunchy vegetables."
  },
  {
    title: "Post-Workout Smoothie",
    prepTime: "5 min prep",
    calories: "280 calories",
    description: "A recovery smoothie with banana, protein powder, almond milk, and a touch of honey."
  }
];

export default NutritionPage
