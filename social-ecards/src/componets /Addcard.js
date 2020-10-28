import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { createcards, uploadImage } from './axios'
import '../css/App.css'

function Addcard (props) {
  // Add cards
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [border, setBorder] = useState('')
  const [font, setFont] = useState('')
  const image = useRef(null)
  const [color, setColor] = useState('')
  const [createcard, setCreatecard] = useState(false)
  const { authToken } = props

  if (createcard) {
    return <Redirect to='/yourcards/' />
  }

  if (!authToken) {
    return <Redirect to='/login' />
  }

  function trySubmit (event) {
    event.preventDefault()
    const imagefile = image.current.files[0]
    createcards(authToken, title, body, border, color, font)
      .then(data => {
        if (imagefile) {
          return uploadImage(authToken, data.url, imagefile)
        }
      })
      .then(() => setCreatecard(true))
  }

  return (

    <div className='addform-container'>
      <h1 className='addform-title'>Card Creation</h1>
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
          className='add-form-field-body'
          placeholder='New card'
          name='body'
          required
          value={body}
          onChange={event => setBody(event.target.value)}
        />
        <div>Border Style:</div>
        <select
          value={border}
          onChange={event => setBorder(event.target.value)}
        >
          <option value='none'>None</option>
          <option value='solid'>Solid</option>
          <option className='dotted' value='dotted'>Dotted</option>
        </select>
        <div>Font Color:</div>
        <select
          value={color}
          onChange={event => setColor(event.target.value)}
        >
          <option value='none'>None</option>
          <option value='black'>Black</option>
          <option value='blue'>Blue</option>
          <option value='red'>Red</option>
        </select>
        <div>Font Size:</div>
        <select
          value={font}
          onChange={event => setFont(event.target.value)}
        >
          <option value='none'>None</option>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
        <label htmlFor='image'>Upload Image:</label>
        <input ref={image} type='file' id='image' />
        <button className='form-field-bttn' type='submit'>
            Create Card!
        </button>
      </form>
    </div>
  )
}

export default Addcard
