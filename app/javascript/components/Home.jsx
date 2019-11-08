import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from "./auth/Login"

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
            <div>
            <h1>Home</h1> 
            <h1> status: {this.props.status} </h1>
            <button onClick={()=>this.handleLogoutClick()}>Log out</button>
            <Registration handleSuccess={this.handleSuccess}/>
            <Login handleSuccess={this.handleSuccess} />
            </div>
            )
        }
    }
    