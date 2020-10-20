import React, { useState } from 'react'
import { login } from './axios.js'
import { Redirect } from 'react-router-dom'
import '../css/Login.css'

function Login (props) {
  const [username, setusername] = useState(' ')
  const [password, setpassword] = useState(' ')
  const [fail, setfail] = useState(null)
  const { authToken, nLogin } = props

  if (authToken) {
    return <Redirect to='/' />
  }

  function tryLogin (event) {
    event.preventDefault()

    login(username, password)
      .then(function (data) {
        nLogin(data.auth_token)
      })
      .catch(function (exit) {
        if (exit.response && exit.response.status === 400) {
          setfail('Invaild Credentials.')
        }
      })
  }

  function usernameInputChange (event) {
    setusername({ ...username, username: event.traget.value })
  }

  function passwordInputChange (event) {
    setpassword({ ...password, password: event.traget.value })
  }

  return (
    <div className='form-container'>
      {fail &&
        <div className='error-message'>
          {fail}
        </div>}
      <div className='title'>Login</div>
      <form onSubmit={tryLogin} className='login-form'>
        <label
          onChange={usernameInputChange}
          htmlFor='username'
        />
        <input
          type='text'
          className='form-field'
          placeholder='Username'
          name='username'
          value={username.username}
        />
        <label
          onChange={passwordInputChange}
          htmlFor='password'
        />
        <input
          type='password'
          className='form-field'
          placeholder='Password'
          name='username'
          value={password.password}
        />
        <button className='form-field-bttn' type='submit'>
            Login
        </button>
      </form>
    </div>
  )
}

export default Login
