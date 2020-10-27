import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Redirect } from 'react-router-dom'
import '../css/App.css'

function PersonalCards (props) {
  const { authToken } = props

  if (!authToken) {
    return <Redirect to='/login' />
  }

  return (
    <div>
      <div className='title-personalcards'>Your Cards</div>
      <Cards authToken={authToken} />
    </div>
  )
}

export default PersonalCards
