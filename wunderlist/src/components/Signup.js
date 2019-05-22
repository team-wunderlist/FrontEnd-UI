import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addUser } from '../actions';

class Signup extends React.Component {
    state = {
        credentials:  {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    addUser = event => {   // Make sure this matches your actions
        event.preventDefault();
        this.props.addUser(this.state.credentials)
        this.setState({
            credentials: {
                username: '',
                password: ''
            }
        })
    }
    
    render() {
        return (
            
            <div className="addUser-form">
    
                <form  onSubmit={this.addUser}>
                    <label for ='username'> Account </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        placeholder="username"
                        onChange={this.handleChange}
                    />
                    <label for ='password'> Password </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        placeholder="password"
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit">
                            {this.props.addingUser ? ('Adding user...') : ('Add User')}
                        </button>
                        <p>Back to <Link to="/">Login</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => { //add your props here
    return {
        addingUser: state.addingUser,
        userAdded: state.userAdded,
        addUserFailure: state.addUserFailure
    }
}

export default connect(mapStateToProps, {addUser})(Signup);