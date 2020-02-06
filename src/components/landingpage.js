import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={4}>
                    <img src="https://www.pinclipart.com/picdir/big/379-3797946_software-developer-computer-servers-web-others-web-developer.png"
                    alt="avatar"
                    className="avatar"
                    />
                </Cell>
                <Cell col={8}>
                <div className="banner-text">
                        <h1>Junior Web Developer</h1>
                        <hr />
                        <p>
                            PHP | Python | JavaScript | HTML/CSS | Bootstrap | MySQL | React | NodeJS
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/harit-kumar/" target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/haritjangwal3" target="_blank">
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.instagram.com/harit_jangwal/" target="_blank">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
  }
}

export default LandingPage;
