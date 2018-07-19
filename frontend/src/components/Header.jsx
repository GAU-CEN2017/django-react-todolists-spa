import React, { Component } from 'react';
/*import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from "../actions";
*/

import Login from './Login';


class Header extends Component {
    render() {
        return (
            < header id="top" className="header-main" >
                <div className="header-main--inside d-flex flex-column">
                    <div className="header-main--social">

                        <Login />

                    </div>



                    <div className="header-main-content container align-self-center text-center">
                        <h1 className="header-main-content__title">
                            TO DO
                        <br /> TODAY
                    </h1>
                        <hr className="header-main--lines align-self-start" />
                        <p className="header-main-content__text">
                            don't wait for tomorrow
                        <br /> to become productive
                    </p>
                    </div>

                </div>

            </header >

        )
    }

}

{/* const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(auth.logout()),
    }
} */}

export default Header;