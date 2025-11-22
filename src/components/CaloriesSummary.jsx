import './CaloriesSummary.css'

function CaloriesSummary({ meals }) {
  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)
  const mealCount = meals.length

  return (
    <div className="calories-summary">
      <div className="summary-card">
        <div className="summary-icon">🔥</div>
        <div className="summary-content">
          <h3>Calorias de Hoje</h3>
          <p className="summary-value">{totalCalories} kcal</p>
        </div>
      </div>
      
      <div className="summary-card">
        <div className="summary-icon">🍽️</div>
        <div className="summary-content">
          <h3>Refeições Hoje</h3>
          <p className="summary-value">{mealCount}</p>
        </div>
      </div>
      
      <div className="summary-card">
        <div className="summary-icon">📊</div>
        <div className="summary-content">
          <h3>Média por Refeição</h3>
          <p className="summary-value">
            {mealCount > 0 ? Math.round(totalCalories / mealCount) : 0} kcal
          </p>
        </div>
      </div>
    </div>
  )
}

export default CaloriesSummary
