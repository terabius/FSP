import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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

    componentDidMount() {
        document.body.classList.add('special-body-blue');

    }
    componentWillUnmount() {
        document.body.classList.remove('special-body-blue');

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
                        <div>
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
                        </div>
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

                        <select name="usstates" id="usstates">
                            <option value="Ca">California</option>
                            <option value="Ny">New York</option>
                            <option value="Tx">Texas</option>
                            <option value="Ch">Chicago</option>
                        </select>

                        <div className='signup-age-controle'>
                            <input type="checkbox"/>
                            <p>
                                I certify that I am 18 years of age or older,
                                and agree to <br/>
                                the User Agreement and Privacy Policy.
                            </p>
                        </div>

                        <button className='btn btn-flat' type='submit'>
                                Create account
                        </button>

                        <div>
                               <p> <Link to='/signin'>Sign in</Link> to your Coinbase account or</p>
                               <p> <Link to='/signup'>Sign up</Link> as a business.</p>
                        </div>

                </form>

                <p>Already have a Coinbase account? 
                   <Link to='/signin'> Log in</Link></p>

            </div>
        )
    }
}
