import React, { Component } from 'react'
// import { signup } from '../../util/session_v1_util';

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
    // NEED TO CLEAN THIS . AJAX CALL IN THE . MIDDLE LOL
    // ***********************************************************************************************************************************************************************************

    handleSubmit(event) {
        console.log('submitted');
        event.preventDefault();
        const user = this.state
        $.ajax({
            method: "POST",
            url: `/v1/session`,
            data: { user }
        })
            .then(r => {
                console.log(r);
                if (r.logged_in) {
                    this.props.handleSuccess(r.user);
                }
            });

    }

    handleChange(event) {
        console.log('Changed', event);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // WHY THIS LINE 
    // ***********************************************************************************************************************************************************************************
    componentDidMount() {
        console.log('mont')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input type="email"
                        name="email"
                        placeholder="email"
                        defaultValue={this.state.email} onChange={this.handleChange} required />

                    <input type="password"
                        name="password"
                        placeholder="password"
                        defaultValue={this.state.passowrd} onChange={this.handleChange} required />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
