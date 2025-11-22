import './MealLog.css'

function MealLog({ meals, onDeleteMeal }) {
  const sortedMeals = [...meals].sort((a, b) => new Date(b.date) - new Date(a.date))

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toLocaleDateString() === today.toLocaleDateString()) {
      return `Hoje às ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`
    } else if (date.toLocaleDateString() === yesterday.toLocaleDateString()) {
      return `Ontem às ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`
    } else {
      return date.toLocaleDateString('pt-BR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }

  if (meals.length === 0) {
    return (
      <div className="meal-log-container">
        <h2>📋 Histórico de Refeições</h2>
        <div className="empty-state">
          <p>Nenhuma refeição cadastrada ainda.</p>
          <p>Comece adicionando sua primeira refeição acima!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="meal-log-container">
      <h2>📋 Histórico de Refeições</h2>
      
      <div className="meals-list">
        {sortedMeals.map((meal) => (
          <div key={meal.id} className="meal-card">
            <div className="meal-header">
              <h3>{meal.name}</h3>
              <span className="meal-calories">{meal.calories} kcal</span>
            </div>
            
            {meal.description && (
              <p className="meal-description">{meal.description}</p>
            )}
            
            <div className="meal-footer">
              <span className="meal-date">{formatDate(meal.date)}</span>
              <button 
                onClick={() => onDeleteMeal(meal.id)}
                className="delete-button"
                aria-label="Deletar refeição"
              >
                🗑️ Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MealLog
