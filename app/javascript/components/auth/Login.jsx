import React, { Component } from 'react'
import {login} from '../../actions/session_actions'

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
        console.log('submitted');
        event.preventDefault();
        const user = this.state;
        store.dispatch(login(user))
        .then(()=> this.props.history.push('/'));
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
            className='flex-item-login'
            name="email"
            placeholder="email"
            defaultValue={this.state.email} onChange={this.handleChange} required />
            
            <input type="password"
            className='flex-item-login'
            name="password"
            placeholder="password"
            defaultValue={this.state.passowrd} onChange={this.handleChange} required />
           
            <button type='submit' className='btn btn-flat'>
                Login
            </button>

            </div>
            </form>
            </div>
            )
        }
    }
    