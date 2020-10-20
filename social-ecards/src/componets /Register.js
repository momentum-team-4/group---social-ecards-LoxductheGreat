import React, { useState } from 'react'
import '../css/Register.css'

function Register () {
  const [username, setusername] = useState(' ')
  const [password, setpassword] = useState(' ')
  const [email, setemail] = useState(' ')

  // nice
  function usernameInputChange (event) {
    setusername({ ...username, username: event.traget.value })
  }

  function passwordInputChange (event) {
    setpassword({ ...password, password: event.traget.value })
  }

  function emailInputChange (event) {
    setemail({ ...email, email: event.traget.value })
  }

  function submitRegister (event) {
  }

  return (
    <div className='form-container'>
      <div className='title'>Sign Up</div>
      <form onSubmit={submitRegister} className='register-form'>
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
          name='password'
          value={password.password}
        />
        <label
          onChange={emailInputChange}
          htmlFor='email'
        />
        <input
          type='text'
          className='form-field'
          placeholder='Email'
          name='email'
          value={email.email}
        />
        <button className='form-field-bttn' type='submit'>
            Register
        </button>
      </form>
    </div>
  )
}

export default Register
