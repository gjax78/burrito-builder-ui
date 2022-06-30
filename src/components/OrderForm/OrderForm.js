import React, { useState } from 'react';

const OrderForm = ({addOrder}) => {
  const [name, setName] = useState([])
  const [ingredients, setIngredients] = useState([])

  const handleIngredientChange = (e) => {
    e.preventDefault()
    setIngredients([...ingredients, e.target.name])
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      name: name, 
      ingredients: ingredients
    }

    if (name && ingredients.length) {
      addOrder(newOrder)
    } else {
      alert('you must select an ingredient and put a name down.')
    }
    clearInputs();
  }

  const clearInputs = () => {
    setName('')
    setIngredients([])
  }

    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    })

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={e => handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
}

export default OrderForm;
