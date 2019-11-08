import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import {Provider} from 'react-redux'
import Home from './Home'
import Dashboard  from './Dashboard'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data){
    console.log(data)
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
  }

// this keeps the user logged in even if refresh

  checkLoginStatus(){
    if(this.props.store.currentUser){
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user: this.props.store.currentUser
      })
    }
  }

  componentDidMount(){
    this.checkLoginStatus();
  }


  render() {
    return (
      // <Provider store={this.props.store}>
        <BrowserRouter>
          <Switch>
            <Route exact 
              path='/'
              render={(props) => (<Home {...props} 
              handleLogin={this.handleLogin}
              status={this.state.loggedInStatus} />) } />

            <Route 
              exact 
              path='/dashboard'
              render={(props)=> (<Dashboard {...props} status={this.state.loggedInStatus} />) } />

          </Switch>
        </BrowserRouter>
      // </Provider>
      );
    }
  }
  
  export default App
  