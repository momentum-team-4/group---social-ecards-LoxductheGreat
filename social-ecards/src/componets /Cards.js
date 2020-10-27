import React, { useState, useEffect } from 'react'
import { getcards } from './axios'
import Card from './Card'

function Cards (props) {
  // Going to show the list of cards

  const { authToken } = props
  const [cards, setCards] = useState([])

  useEffect(() => {
    getcards(authToken).then(data => {
      setCards(data.results)
    })
  }, [authToken])

  return (
    <div>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  )
}

export default Cards
