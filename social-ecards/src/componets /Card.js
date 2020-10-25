import React from 'react'
import '../css/Card.css'

function Card ({ card }) {
  function formatDate (props) {
    const nice = { year: 'numeric', month: 'long', day: 'day' }
    return new Date().toDateString([], nice)
  }

  return (
    <div className='card-container'>
      <div className='card-h'>
        <div className='card-author'>{card.author}</div>
        <div className='card-date'>{formatDate(card.date)}</div>
      </div>
      <div className>
        <div className='card-title'>{card.title}</div>
      </div>
      <div className>
        <div className='card-body'>{card.body}</div>
      </div>
    </div>
  )
}

export default Card
