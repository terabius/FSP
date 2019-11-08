import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import HelloWorld from './HelloWorld'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import Navbar from './navbar'


const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<Link to={'/nav'}>hello PAGE</Link>) } />
            <Route exact path='/nav' render={() => <Navbar />} /> 
            <Route path='/hello' render={() => <HelloWorld greeting='hey friend' />} />
          </Switch>
        </BrowserRouter>
      </Provider>
      );
    }
  }
  
  export default App
  