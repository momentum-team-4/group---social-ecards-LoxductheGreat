import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/Addcard.css'
import { createcards } from './axios'

function Addcard (props) {
  // Add cards
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [createcard, setCreatecard] = useState(false)
  const { authToken } = props
  //   const [author, setauthor] = useState('')
  //   const [date, setDate] = useState('')
  //   const [title, setTitle] = useState('')
  //   const [title, setTitle] = useState('')

  if (createcard) {
    return <Redirect to='/' />
  }

  function trySubmit (event) {
    event.preventDefault()
    createcards(authToken, title, body)
      .then(data => {
        setCreatecard(true)
      })
  }



  return (

    <div className='form-container'>
      <h1 className='h-title'>Card Creation</h1>
      <form onSubmit={trySubmit} className='addcard-form'>
        <label
          htmlFor='title'
        />
        <input
          type='text'
          className='add-form-field'
          placeholder='Title'
          name='title'
          required
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <label
          htmlFor='body'
        />
        <textarea
          type='text'
          className='add-form-field'
          placeholder='New card'
          name='body'
          required
          value={body}
          onChange={event => setBody(event.target.value)}
        />
        <button className='form-field-bttn' type='submit'>
            Create Card!
        </button>
      </form>
    </div>
  )
}

export default Addcard
