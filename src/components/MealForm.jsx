import { useState } from 'react'
import OpenAI from 'openai'
import './MealForm.css'

function MealForm({ onAddMeal, apiKey }) {
  const [mealName, setMealName] = useState('')
  const [mealDescription, setMealDescription] = useState('')
  const [calories, setCalories] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const estimateCalories = async () => {
    if (!apiKey) {
      setError('Por favor, configure sua chave API OpenAI primeiro')
      return
    }

    if (!mealDescription.trim()) {
      setError('Por favor, descreva sua refeição')
      return
    }

    setLoading(true)
    setError('')

    try {
      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      })

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Você é um nutricionista especializado em estimar calorias de refeições. Responda apenas com o número de calorias estimadas, sem texto adicional.'
          },
          {
            role: 'user',
            content: `Estime a quantidade de calorias desta refeição: ${mealDescription}`
          }
        ],
        temperature: 0.5,
        max_tokens: 50
      })

      const estimatedCalories = response.choices[0].message.content.trim()
      const caloriesNumber = parseInt(estimatedCalories.replace(/\D/g, ''))
      
      if (caloriesNumber && !isNaN(caloriesNumber)) {
        setCalories(caloriesNumber.toString())
        setError('')
      } else {
        setError('Não foi possível estimar as calorias. Tente novamente.')
      }
    } catch (err) {
      console.error('Erro ao estimar calorias:', err)
      setError('Erro ao conectar com a API do ChatGPT. Verifique sua chave API.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!mealName.trim() || !calories) {
      setError('Por favor, preencha todos os campos obrigatórios')
      return
    }

    const meal = {
      name: mealName.trim(),
      description: mealDescription.trim(),
      calories: parseInt(calories),
      date: new Date().toISOString()
    }

    onAddMeal(meal)
    
    // Reset form
    setMealName('')
    setMealDescription('')
    setCalories('')
    setError('')
  }

  return (
    <div className="meal-form-container">
      <h2>📝 Cadastrar Refeição</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="meal-form">
        <div className="form-group">
          <label htmlFor="mealName">Nome da Refeição *</label>
          <input
            id="mealName"
            type="text"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="Ex: Almoço, Jantar, Lanche..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mealDescription">Descrição da Refeição</label>
          <textarea
            id="mealDescription"
            value={mealDescription}
            onChange={(e) => setMealDescription(e.target.value)}
            placeholder="Descreva os alimentos da sua refeição para estimar as calorias com IA..."
            rows="3"
          />
        </div>

        <button
          type="button"
          onClick={estimateCalories}
          disabled={loading || !mealDescription.trim()}
          className="estimate-button"
        >
          {loading ? '🤖 Estimando...' : '🤖 Estimar Calorias com IA'}
        </button>

        <div className="form-group">
          <label htmlFor="calories">Calorias *</label>
          <input
            id="calories"
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="Quantidade de calorias"
            min="0"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          ➕ Adicionar Refeição
        </button>
      </form>
    </div>
  )
}

export default MealForm
