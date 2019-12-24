import React from "react"
import {Switch} from "react-router-dom"

import {AuthRoute, ProtectedRoute} from '../util/route_util'

import Home from './home/Home'
import Navbar from './navbar'
import Login from './auth/Login'
import Registration from './auth/Registration'
import DashboardContainer from "./dashboard/DashboardContainer"
import PriceContainer from "./price/PriceContainer"
import AccountContainer from "./AccountContainer"
import FooterContainer from './FooterContainer'

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <AuthRoute path='/signup' component={Registration} />
        <AuthRoute path='/signin' component={Login} />
        <ProtectedRoute path='/dashboard' component={DashboardContainer} />
        <ProtectedRoute path='/price' component={PriceContainer} /> 
        <ProtectedRoute path='/account' component={AccountContainer} />
        <AuthRoute exact path='/' component={Home} />
      </Switch>
      <FooterContainer />
    </React.Fragment>          
  )
}
  
  