import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

class Nav extends Component {
  render() {
    return (
        <div>
            <div className="container">
                <div>
                    <Link to='/home'>
                        <img 
                            alt="Knight Club Icon" title="Home"/>
                    </Link>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                    <Grid>
                        <li>
                            <img src={require('../images/sign-up.png')} style={{width: "45px", height: "45px"}}/>
                            
                            <Link to='/register'>
                                <a>Register</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/game'>
                                <img src={require('../images/game-controller.png')} style={{width: "45px", height: "45px"}}/>
                                <a>Play Now</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                <img src={require('../images/info.png')} style={{width: "35px", height: "35px"}}/>
                                <a>About</a>
                            </Link>
                        </li>
                        </Grid>
                    </ul>
                </nav>
            </div>
        </div>
    );
  }
}

export default Nav;