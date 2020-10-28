import React from 'react'
import { format, parse } from 'fecha'

function Card ({ card }) {
  let date = card.date
  if (typeof date === 'string') {
    date = parse(date, 'isoDateTime')
  }
  date = format(date, 'MMM D, h:mm A')

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
    <div className={'card-c ' + borderClass(card)}>
      <div className='card-box'>
        <div className='card-h'>
          <div className='card-author'>{card.author}</div>
          <div className='card-date'>{date}</div>
        </div>
        <div>
          <div className='card-title'>{card.title}</div>
        </div>
        <div>
          <div className={'card-body ' + colorClass(card) + ' ' + fontClass(card)}>{card.body}</div>
          {card.image && (
            <div>
              <img src={card.image} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
