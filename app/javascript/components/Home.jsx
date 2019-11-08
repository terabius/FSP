import React, { Component } from 'react'
import Registration from './auth/Registration';

export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.handleSuccess = this.handleSuccess.bind(this);
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
            <Registration handleSuccess={this.handleSuccess}/>
            </div>
            )
        }
    }
    