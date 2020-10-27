import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getAllCards } from './axios'

function AllCards (props) {
  const { authToken } = props
  const [allCards, setAllCards] = useState([])

  useEffect(() => {
    getAllCards(authToken).then(data => {
      setAllCards(data.results)
    })
  }, [authToken])

  console.log(allCards)
  return (
    <div>
      {allCards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  )
}

export default AllCards
