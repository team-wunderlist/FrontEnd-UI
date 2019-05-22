import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';



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

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
        .then(() =>this.props.history.push('/'))
        }

    render() {
        return(
            <div className = 'login-form'>
                <form onSubmit= {this.login}>
                <label for ='username'> Account </label>
                <input 
                    type = 'text'
                    name= 'username'
                    placeholder= 'Username'
                    value = {this.state.credentials.username}
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
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ loggingIn }) => ({
    loggingIn
})

export default connect(mapStateToProps, { login }) (Login);