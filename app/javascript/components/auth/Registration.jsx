import React, { Component } from 'react'
import { signup } from '../../actions/session_actions'
import {loggedInUi} from '../../util/ui_util'

export default class Registration extends Component {

    constructor(props){
        super(props);
        this.state = {
            first_name:'',
            last_name: '',
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        console.log('submitted');
        event.preventDefault();
        const user = this.state;
        store.dispatch(signup(user))
        .then(()=>{ 
            loggedInUi();
            this.props.history.push('/dashboard');

        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (

            <div className="signup-container">

                <h2 className="signup-title">
                    Create your account
                </h2>

                <form onSubmit={this.handleSubmit}>
                    
                    <div className="forms">
                        <input type="text"
                            
                            name="first_name"
                            placeholder="First name"
                            defaultValue={this.state.first_name} 
                            onChange={this.handleChange} required />

                        <input type="text"
                            
                            name="last_name"
                            placeholder="Last name"
                            defaultValue={this.state.last_name} 
                            onChange={this.handleChange} required />

                        <input type="email"
                            
                            name="email"
                            placeholder="Email"
                            defaultValue={this.state.email} 
                            onChange={this.handleChange} required />

                        <input type="password"
                            
                            name="password"
                            placeholder="Choose password"
                            defaultValue={this.state.passowrd} 
                            onChange={this.handleChange} required />

                        <select name="" id="">

                        </select>

                        <input type="radio"/>

                        <button className='btn btn-flat' type='submit'>
                                Create account
                        </button>
                    </div>
                </form>
                
            </div>
        )
    }
}
