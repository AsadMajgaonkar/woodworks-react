import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import InputComponent from '../components/common/inputComponent';
import Form from '../components/common/form';
import authService from '../services/authService';

class LoginPage extends Form {
    state = {
        account: {
            email: '',
            password: ''
        },
        error: {
        }
    }

    validate = () => {
        let error = {}
        if (this.state.account.email.trim() == "") {
            error.email = 'email is required'
        }
        if (this.state.account.password.trim() == "")
            error.password = 'password is required' 
        return Object.keys(error).length == 0 ? "" : error
    }

    validateProperty = input => {
        
        if (input.name == "email") {
            if (input.value.trim() == "")
                return "email is required"
        }
        if (input.name == "password") {
            if (input.value.trim() == "")
                return "password is required"
            }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const error = this.validate();
        this.setState({ error: error })
        if(error){
            console.log(error)
            return
        }
        await authService.login(this.state.account)
        window.location = '/'
    }

    render() {
        try{
            authService.getUser()
            return <Redirect to='/'/>
        }
        catch{
        return (
            <div className='col-3 mx-auto my-5'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputComponent title="Email" type="text" name="email" error={this.state.error.email} onChange={this.handleChange} />
                    <InputComponent title="Password" type="password" name="password" error={this.state.error.password} onChange={this.handleChange} />
                    <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn btn-primary text-white">Submit</button>
                    <span>Not a Member? <Link to='/signup'>Sign-up</Link></span>
                    </div>
                    </form>
            </div>
        );
        }
    }
}

export default LoginPage;