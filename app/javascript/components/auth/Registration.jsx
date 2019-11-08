import React, { Component } from 'react'
import { signup } from '../../util/session_v1_util';

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name:'',
            last_name: '',
            email:'',
            password:''
            // registrationErrors:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        console.log('submitted');
        event.preventDefault();
        signup(this.state);
    }

    handleChange(event){
        console.log('Changed', event);
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    componentDidMount(){
        console.log('mont')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" 
                        name="first_name" 
                        placeholder="first_name" 
                        defaultValue={this.state.first_name} onChange={this.handleChange} required />
                    
                    <input type="text"
                        name="last_name"
                        placeholder="last_name"
                        defaultValue={this.state.last_name} onChange={this.handleChange} required />

                    <input type="email"
                        name="email"
                        placeholder="email"
                        defaultValue={this.state.email} onChange={this.handleChange} required />

                    <input type="password"
                        name="password"
                        placeholder="password"
                        defaultValue={this.state.passowrd} onChange={this.handleChange} required />
                        <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}
