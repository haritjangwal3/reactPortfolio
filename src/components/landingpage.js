import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
        <div className="landingGridDiv">
            <Grid className="landing-grid">
                <Cell className="intro-cells" col={12}>
                <div className="banner-text">
                        <h1 style={{padding: '5px'}}>Junior Web Developer</h1>
                        <hr />
                        <p style={{fontSize: '18px'}}>
                            PHP | Python | JavaScript | HTML/CSS | Bootstrap | MySQL | React | NodeJS
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/harit-kumar/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i><br />LinkedIn
                            </a>
                            <a href="https://github.com/haritjangwal3" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github" aria-hidden="true"></i><br />GitHub
                            </a>
                        </div>
                    </div>
                </Cell>
                
                <Cell style={{padding: '20px'}} className="intro-cells" col={12}>
                    <Link  style={{textDecoration: 'none'}} to="/projects">
                           <h1 className="myProjects" >View My Projects</h1>
                    </Link>
                </Cell>
            </Grid>
        </div>
    )
  }
}

export default LandingPage;
