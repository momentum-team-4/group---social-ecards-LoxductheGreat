import React, { useState, useEffect } from 'react'
import './css/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Register from './componets /Register'
import Login from './componets /Login'
import Home from './componets /Home'
import addCard from './componets /Addcard'
import { userData } from './componets /axios'
import Addcard from './componets /Addcard'
import Logout from './componets /Logout'

function App (props) {
  const [authToken, _setAuthToken] = useState(window.localStorage.getItem('authtoken'))
  const [userinfo, setUserInfo] = useState(null)

  const setAuthToken = (token) => {
    _setAuthToken(token)
    if (token === null) {
      window.localStorage.removeItem('authtoken')
    } else {
      window.localStorage.setItem('authtoken', token)
    }
  }

  const isLoggedIn = authToken !== null

  useEffect(() => {
    if (authToken) {
      userData(authToken)
        .then(info => setUserInfo(info))
    } else {
      setUserInfo(null)
    }
  }, [authToken])

  // if (isLoggedIn) {
  //   return (
  //     <button onClick={setAuthToken(null)}>Logout</button>
  //   )
  // }

  return (
    <Router>
      <div>
        <ul className='top-nav'>
          <li className='nav-items'><Link to='/'>Home</Link></li>
          <li className='nav-items'><Link to='/login'>Login</Link></li>

          {/* {isLoggedIn ? (<button onClick={() => {
            setAuthToken(null)

          }})} */}

          {/* <li>{isLoggedIn ? <button onClick={() => {
              setAuthToken(null)
            }}>Logout</button>
            </li> */}
          <li className='nav-items'><Link to='/addcard'>New Card</Link></li>
          <li className='nav-items'><Link to='/register'>Register</Link></li>
        </ul>
        <Switch>
          <Route path='/register'>
            <Register authToken={authToken} onRegister={setAuthToken} />
          </Route>
          <Route path='/login'>
            <Login authToken={authToken} onLogin={setAuthToken} />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
          <Route path='/addcard'>
            <Addcard authToken={authToken} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App