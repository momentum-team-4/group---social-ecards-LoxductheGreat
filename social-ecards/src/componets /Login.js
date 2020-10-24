import React, { useState } from 'react'
import { login } from './axios.js'
import { Redirect } from 'react-router-dom'
import '../css/Login.css'

function Login (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const { authToken, onLogin } = props

  if (authToken) {
    return <Redirect to='/' />
  }

  function tryLogin (event) {
    event.preventDefault()

    login(username, password)
      .then(function (token) {
        setMessage('Logged in. ')
        onLogin(token)
      })
      .catch(function (error) {
        if (error.response && error.response.status === 400) {
          setMessage('Invaild Credentials.')
        }
      })
  }

  // console.log(authToken)

  return (
    <div className='form-container'>
      {message &&
        <div className='error-message'>
          {message}
        </div>}
      <div className='title'>Login</div>
      <form onSubmit={tryLogin} className='login-form'>
        <label
          htmlFor='username'
        />
        <input
          type='text'
          className='form-field'
          placeholder='Username'
          name='username'
          required
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
          required
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button className='form-field-bttn' type='submit'>
            Login
        </button>
      </form>
    </div>
  )
}

export default Login
