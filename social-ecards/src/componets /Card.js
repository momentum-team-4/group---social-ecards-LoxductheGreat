import React from 'react'

function Card ({ card }) {
  function formatDate (props) {
    const nice = { year: 'numeric', month: 'long', day: 'day' }
    return new Date().toDateString([], nice)
  }

  const borderClass = (card) => {
    return 'border-' + card.border
  }

  const fontClass = (card) => {
    return 'font-' + card.font
  }

  const colorClass = (card) => {
    return 'color-' + card.color
  }

  return (
    <div className={'card-container ' + borderClass(card)}>
      <div className='card-h'>
        <div className='card-author'>{card.author}</div>
        <div className='card-date'>{formatDate(card.date)}</div>
      </div>
      <div className>
        <div className='card-title'>{card.title}</div>
      </div>
      <div className>
        <div className={'card-body ' + fontClass(card) + colorClass(card)}>{card.body}</div>
      </div>
    </div>
  )
}

export default Card
