import React from 'react';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return(
            <div className = 'login-form'>
                <label for ='username'> Account </label>
                <input 
                    type = 'text'
                    name= 'username'
                    placeholder= 'Username'
                    value = {this.state.credentials.usernam}
                    onChange = {this.handleChanges}
                />
                <label for ='password'> Password </label>
                <input 
                    type = 'password'
                    name= 'password'
                    placeholder= 'Password'
                    value = {this.state.credentials.password}
                    onChange = {this.handleChanges}
                />

                <button type = 'submit'> Login </button>
            </div>
        )
    }
}

export default Login;