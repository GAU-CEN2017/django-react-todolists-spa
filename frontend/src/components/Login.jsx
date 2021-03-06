import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { auth } from "../actions";

class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    goToRegister = () => {
        console.log('Clicked \'register\' (decide later what to put here)');
        this.props.register(this.state.username, this.state.password);
    }

    render() {
        if (this.props.isAuthenticated) {
            return (
                <div className="auth-container">
                    <p>Welcome,  {this.props.user.username}!</p>
                    <p className="auth-logout">(<a onClick={this.props.logout}>logout</a>)</p>
                </div>
            );
        }
        return (
            <div className="auth-container">
                <form onSubmit={this.onSubmit} >

                    <div className="auth-btns">
                        <button type="submit" className="auth-btn login">Login</button>
                        <br />
                        <button type="button" className="auth-btn register" onClick={this.goToRegister} >Register</button>
                    </div>

                    <div className="auth">
                        <input
                            type="password" id="password" className="auth-input"
                            onChange={e => this.setState({ password: e.target.value })} />
                        <br />
                        <label htmlFor="password" className="auth-legend">Password</label>
                    </div>


                    <div className="auth">
                        <input
                            type="text" id="username" className="auth-input"
                            onChange={e => this.setState({ username: e.target.value })} />
                        <br />
                        <label htmlFor="username" className="auth-legend">Username</label>
                    </div>
                </form>
                <br />
                <div className="auth-errors">
                    {this.props.errors.length > 0 && (
                        <ul>
                            {this.props.errors.map(error => (
                                <li key={error.field}>{error.message}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return { field, message: state.auth.errors[field] };
        })
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            return dispatch(auth.login(username, password));
        },
        register: (username, password) => {
            dispatch(auth.register(username, password))
        },
        logout: () => dispatch(auth.logout()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);