import React, { useState, useEffect } from 'react'
import './css/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Register from './componets /Register'
import Login from './componets /Login'
import Home from './componets /Home'
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

  function nicelogout (event) {
    _setAuthToken(null)
    window.localStorage.removeItem(authToken)
  }

  console.log(authToken)

  return (
    <Router>
      <div>
        <ul className='top-nav'>
          <li><Link className='nav-items' to='/'>Home</Link></li>
          {isLoggedIn ? (
            <li><Link className='nav-items' to='/logout'>Logout</Link></li>
          ) : (
            <li><Link className='nav-items' to='/login'>Login</Link></li>
          )}
          <li><Link className='nav-items' to='/addcard'>New Card</Link></li>
          <li><Link className='nav-items' to='/register'>Register</Link></li>
        </ul>
        <Switch>
          <Route path='/register'>
            <Register authToken={authToken} onRegister={setAuthToken} />
          </Route>
          <Route path='/login'>
            <Login authToken={authToken} onLogin={setAuthToken} />
          </Route>
          <Route path='/logout'>
            <Logout onLogout={nicelogout} />
          </Route>
          <Route path='/addcard'>
            <Addcard authToken={authToken} />
          </Route>
          <Route path='/'>
            <Home authToken={authToken} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
