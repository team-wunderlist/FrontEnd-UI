import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import styled from 'styled-components';

const LoginContainer = styled.div`
  
`;

const LoginForm = styled.form`
  
`;

const UserName = styled.input`
  
`;

const Password = styled.input`
  
`;

const LoginBtn = styled.button`
  
`;

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
        .then(() =>this.props.history.push('/tasks'))
        }

    render() {
        return(
            <LoginContainer>

                <LoginForm onSubmit= {this.login}>
                
                    <UserName 
                        type = 'text'
                        name= 'username'
                        placeholder= 'Username'
                        value = {this.state.credentials.username}
                        onChange = {this.handleChanges}
                    />
                    
                    <Password 
                        type = 'password'
                        name= 'password'
                        placeholder= 'Password'
                        value = {this.state.credentials.password}
                        onChange = {this.handleChanges}
                    />

                    <LoginBtn type = 'submit'> Login </LoginBtn>

                </LoginForm>
                
            </LoginContainer>
        )
    }
}

const mapStateToProps = ({ loggingIn }) => ({
    loggingIn
})

export default connect(mapStateToProps, { login }) (Login);