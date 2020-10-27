import React, { useState } from 'react'
import { register } from './axios.js'
import { Redirect } from 'react-router-dom'
import '../css/App.css'

function Register (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const { authToken, onRegister } = props

  if (authToken) {
    return <Redirect to='/' />
  }

  function tryregister (event) {
    event.preventDefault()

    register(username, password, email)
      .then(function (token) {
        setMessage('Welcome!')
        onRegister(token)
      })
  }

  return (
    <div className='form-container'>
      {message &&
        <div className='error-message'>
          {message}
        </div>}
      <div className='title'>Sign Up</div>
      <form onSubmit={tryregister} className='register-form'>
        <label
          htmlFor='username'
        />
        <input
          type='text'
          className='form-field'
          placeholder='Username'
          name='username'
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <label
          htmlFor='password'
        />
        <input
          type='password'
          className='form-field'
          placeholder='Password'
          name='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <label
          htmlFor='email'
        />
        <input
          type='text'
          className='form-field'
          placeholder='Email'
          name='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className='form-field-bttn' type='submit'>
            Register
        </button>
      </form>
    </div>
  )
}

export default Register
