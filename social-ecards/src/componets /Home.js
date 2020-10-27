import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import AllCards from './AllCards'
import '../css/App.css'

// import { userData } from './axios'

function Home (props) {
  const { authToken } = props
  return (
    <div>
      <div className='title-homepage'>Home</div>
      <AllCards authToken={authToken} />
    </div>
  )
}

export default Home
