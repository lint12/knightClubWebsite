import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <div>
            <div className="container">
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li style={{position: "relative", right: "370px"}}>
                            <Link to='/'>
                                <img src={require('../images/KnightClubLogo.png')} 
                                style={{width: "150px", height: "50px", position: "relative", top: "10px"}}/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <img src={require('../images/sign-up.png')} style={{width: "40px", height: "40px"}}/>
                                <a>Register</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/game'>
                                <img src={require('../images/game-controller.png')} style={{width: "40px", height: "40px"}}/>
                                <a>Play Now</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                <img src={require('../images/info.png')} style={{width: "35px", height: "35px"}}/>
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
  }
}

export default Nav;