import React, { Component } from 'react'
// import { signup } from '../../util/session_v1_util';

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
// NEED TO CLEAN THIS . AJAX CALL IN THE . MIDDLE LOL
// ***********************************************************************************************************************************************************************************

    handleSubmit(event) {
        console.log('submitted');
        event.preventDefault();
        const user = this.state
        $.ajax({
            method: "POST",
            url: `/v1/users`,
            data: { user }
        })
        .then(r => { 
            if(r.status === 'created'){
                this.props.handleSuccess(r.user);
            }
        });
        
    }

    handleChange(event){
        console.log('Changed', event);
        this.setState({
            [event.target.name]:event.target.value
        });
    }

// WHY THIS LINE 
// ***********************************************************************************************************************************************************************************
    componentDidMount(){
        console.log('mont')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-title-flex">
                        <h2 className='form-title'>Join Groinbase:</h2>
                    </div>

                    <div className="forms">
                    <input type="text"
                        className='flex-item-login'
                        name="first_name" 
                        placeholder="first_name" 
                        defaultValue={this.state.first_name} onChange={this.handleChange} required />
                    
                    <input type="text"
                        className='flex-item-login'
                        name="last_name"
                        placeholder="last_name"
                        defaultValue={this.state.last_name} onChange={this.handleChange} required />

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
                        <button className='btn btn-flat'
                        type='submit'>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}
