import React, { Component } from "react";
import { connect } from "react-redux";

import { Link, Redirect } from "react-router-dom";

import { auth } from "../actions";

class Register extends Component {

    state = {
        username: "",
        password: "",
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <div className="auth-container_register">
                <form onSubmit={this.onSubmit} >
                    
                    <div className="auth-btns">
                        <button type="submit" className="auth-btn login">Register</button>
                        <br />
                        <button type="button" className="auth-btn register">Cancel</button>
                    </div>

                    {/* <div className="auth">
                        <input
                            type="email" id="email" className="auth-input"
                            onChange={e => this.setState({ email: e.target.value })} />
                        <br />
                        <label htmlFor="email" className="auth-legend">e-mail</label>
                    </div> */}

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
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        register: (username, password) => {
            dispatch(auth.register(username, password))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);