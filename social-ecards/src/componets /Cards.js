import React, { useState, useEffect } from 'react'
import { getcards } from './axios'
import Card from './Card'

function Cards (props) {
  // Going to show the list of cards

  const { authToken } = props
  const [cards, setCards] = useState([])

  useEffect(() => {
    getcards(authToken).then(data => {
      setCards(data)
    })
  }, [authToken])

  console.log(cards)

  return (
    <div>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
    // <div>
    //   {cards.map(card => (
    //     <div key={card.id}>
    //       <div className='card-container'>
    //         <div>{card.title}</div>
    //         <div>{card.body}</div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  )
}

export default Cards
