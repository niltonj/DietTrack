import { useState, useEffect } from 'react'
import './App.css'
import MealForm from './components/MealForm'
import MealLog from './components/MealLog'
import CaloriesSummary from './components/CaloriesSummary'

function App() {
  const [meals, setMeals] = useState(() => {
    const savedMeals = localStorage.getItem('dietTrackMeals')
    return savedMeals ? JSON.parse(savedMeals) : []
  })

  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('openaiApiKey') || ''
  })

  useEffect(() => {
    localStorage.setItem('dietTrackMeals', JSON.stringify(meals))
  }, [meals])

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem('openaiApiKey', apiKey)
    }
  }, [apiKey])

  const addMeal = (meal) => {
    setMeals([...meals, { ...meal, id: Date.now() }])
  }

  const deleteMeal = (id) => {
    setMeals(meals.filter(meal => meal.id !== id))
  }

  const getTodaysMeals = () => {
    const today = new Date().toLocaleDateString()
    return meals.filter(meal => 
      new Date(meal.date).toLocaleDateString() === today
    )
  }

  const todaysMeals = getTodaysMeals()

  return (
    <div className="app">
      <header className="app-header">
        <h1>🥗 DietTrack</h1>
        <p>Controle seu consumo diário de calorias</p>
      </header>

      <div className="app-container">
        <div className="api-key-section">
          <label htmlFor="apiKey">
            Chave API OpenAI:
          </label>
          <input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="api-key-input"
          />
          <small>Sua chave é armazenada localmente no navegador</small>
        </div>

        <CaloriesSummary meals={todaysMeals} />
        
        <MealForm onAddMeal={addMeal} apiKey={apiKey} />
        
        <MealLog meals={meals} onDeleteMeal={deleteMeal} />
      </div>
    </div>
  )
}

export default App
