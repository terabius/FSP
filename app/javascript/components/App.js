import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Home from './Home'
import Dashboard  from './Dashboard'
import Navbar from './navbar'
import Registration from './auth/Registration'
import Login from './auth/Login'


class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout= this.handleLogout.bind(this);
  }
  
  handleLogin(data){
    console.log(data)
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
  }
  
  handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {} 
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
      <React.Fragment>
      <BrowserRouter>
      <div>    
      <Navbar />
      <Switch>
      

      <Route exact 
      path='/'
      render={(props) => (<Home {...props}
        handleLogout={this.handleLogout} 
        handleLogin={this.handleLogin}
        status={this.state.loggedInStatus} />) } />
        
        <Route
        exact
        path='/signup'
        component={Registration}
        />
        
        <Route
        exact
        path='/signin'
        render={(props) => <Login handleSuccess={this.handleSuccess} />} /> 
       
        
        <Route
        path='/dashboard'
        component={Dashboard} />
        {/* render={(props) => (<Dashboard {...props} status={this.state.loggedInStatus} />)} /> */}
                
        </Switch>
        </div>

        </BrowserRouter>
        </React.Fragment>
        );
      }
    }
  

    export default App
    
    
    