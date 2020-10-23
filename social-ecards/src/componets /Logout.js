import React from 'react'
import { Redirect } from 'react-router-dom'

function Logout ({ onLogout }) {
  onLogout()
  return <Redirect to='/' />
}

export default Logout
