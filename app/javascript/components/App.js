import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import {Provider} from 'react-redux'
// import Home from './Home'
// import Dashboard  from './Dashboard'

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' render={() => (<Home />) } /> */}
            {/* <Route exact path='/dashboad' render={() => <Dashboard />} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
      );
    }
  }
  
  export default App
  