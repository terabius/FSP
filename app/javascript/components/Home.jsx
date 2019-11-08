import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from "./auth/Login"
import Navbar from "./navbar"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

export default class Home extends Component {
    
    constructor(props){
        super(props);
        
        this.handleSuccess = this.handleSuccess.bind(this);
    }
    
    handleLogoutClick(){
        $.ajax({
            method: "DELETE",
            url: `/v1/session`
        }).then(() => this.props.handleLogout())
        
    }
    handleSuccess(data){
        this.props.handleLogin(data);
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <React.Fragment>
            <Navbar />
            <div>
                <h1 className="megatitle">Buy and sell cryptocurrency</h1>
                <h2 className="subtitle">Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</h2>
            
                <div className="email-group">
                    <input className="email-input" type="text" placeholder="Email address" />
                    <button name="button" type="submit" className="btn btn-flat green">
                    Get Started
                    </button>
                </div>

            </div>
            {/* <button onClick={()=>this.handleLogoutClick()}>Log out</button> */}
            <BrowserRouter>
            <Switch>
            <Route
            exact
            path='/signup'
            render={(props) => <Registration handleSuccess={this.handleSuccess} />} />
            <Route
            exact
            path='/signin'
            render={(props) => <Login handleSuccess={this.handleSuccess} />} />
            </Switch>
            </BrowserRouter>
            </React.Fragment>
            )
        }
    }
    