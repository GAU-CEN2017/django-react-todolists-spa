import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";


class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    onSubmit = e => {
        e.preventDefault();
        console.error("Not implemented!!1");
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
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

                <div className="auth">
                    <button type="submit" className="auth-btn login">Login</button>
                    <br/>
                    <button type="submit" className="auth-btn register">Register</button>
                </div>

            </form>
        )
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);