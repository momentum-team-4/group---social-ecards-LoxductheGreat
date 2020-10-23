import React, { useState, useEffect } from 'react'
import { getcards } from './axios'
import Cards from './Cards'
// import { userData } from './axios'

function Home (props) {
  const { authToken } = props
  return (
    <div>
      <div className='h-title'>Home</div>
      <Cards authToken={authToken} />
    </div>
  )
}

export default Home
