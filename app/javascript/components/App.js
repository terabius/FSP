import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './Home'
import Navbar from './navbar'

export default function App() {
  return (
    <React.Fragment>

      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />

      </Switch>
    </React.Fragment>          
  )
}
  
  