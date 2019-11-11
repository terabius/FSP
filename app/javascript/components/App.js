import React from "react"
import { Switch, Route} from "react-router-dom"

import {AuthRoute, ProtectedRoute} from '../util/route_util'

import Home from './Home'
import Navbar from './navbar'
import Login from './auth/Login'
import Registration from './auth/Registration'
import Dashboard from './Dashboard'

export default function App() {
  return (
    <React.Fragment>

      <Navbar />
      <Switch>
        <AuthRoute path='/signup' component={Registration} />
        <AuthRoute path='/signin' component={Login} />
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <AuthRoute exact path='/' component={Home} />
      </Switch>
    </React.Fragment>          
  )
}
  
  