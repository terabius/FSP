import React, { Component } from 'react'
import {login} from '../../actions/session_actions'
import {loggedInUi} from '../../util/ui_util'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
            // loginErrors:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = this.state;
        store.dispatch(login(user))
        .then(()=> {
        loggedInUi();
        this.props.history.push('/dashboard');
        
        });
    }
    
    handleChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
 
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <div className="form-title-flex">
            <h2 className='form-title'>Sign in to Groinbase:</h2>
            </div>
            <div className='forms login'>

            <input type="email"
            id='email'
            className='flex-item-login'
            name="email"
            placeholder="email"
            defaultValue={this.state.email} onChange={this.handleChange} required />
            
            <input type="password"
            id='password'
            className='flex-item-login'
            name="password"
            placeholder="password"
            defaultValue={this.state.passowrd} onChange={this.handleChange} required />
           
            <button type='submit' id='sub' className='btn btn-flat'>
                Login
            </button>

            </div>
            </form>
            </div>
            )
        }
    }
    