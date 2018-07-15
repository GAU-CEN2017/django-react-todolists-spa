import React, { Component } from 'react';
/*import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { lists } from "../actions";
*/

class Header extends Component {
    render() {
        return (
            < header id="top" class="header-main" >
                <div class="header-main--inside d-flex flex-column">
                    <div class="header-main--social">
                        Sin in/ Sign up
                </div>


                    <div class="header-main-content container align-self-center text-center">
                        <h1 class="header-main-content__title">
                            TO DO
                        <br /> TODAY
                    </h1>
                        <hr class="header-main--lines align-self-start" />
                        <p class="header-main-content__text">
                            don't wait for tomorrow
                        <br /> to become productive
                    </p>
                    </div>

                </div>

            </header >

        )
    }

}

export default Header;