import React from 'react'
import './css/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Register from './componets /Register'
import Login from './componets /Login'
import Home from './componets /Home'

function App () {
  return (
    <Router>
      <ul className='top-nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
