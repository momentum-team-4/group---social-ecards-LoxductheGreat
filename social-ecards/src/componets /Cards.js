import React, { useState, useEffect } from 'react'
import { getcards } from './axios'

function Cards (props) {
  // Going to show the list of cards

  const { authToken } = props
  const [cards, setCards] = useState([])

  useEffect(() => {
    getcards(authToken).then(data => {
      setCards(data)
    })
  }, [authToken])


  return (
    <div>
      {cards.map(card => (
        <div key={card.id}>
          <div className='card-container'>
            <div className='card-title'>{card.title}</div>
            <div className='card-body'>{card.body}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
