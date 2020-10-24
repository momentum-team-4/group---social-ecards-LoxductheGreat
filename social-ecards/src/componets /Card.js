import React from 'react'
import '../css/Card.css'

function Card ({ card }) {
  return (
    <div className='card-container'>
      <div className=''>
        <div className='card-title'>{card.title}</div>
      </div>
      <div>
        <div className='card-body'>{card.body}</div>
      </div>
    </div>
  )
}

export default Card
