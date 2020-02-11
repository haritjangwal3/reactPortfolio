import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';

class About extends Component {
  render() {
    return <div className="aboutme">
      <Grid>
        <Cell className="aboutme_banner" col={12}>
          <Grid>
            <Cell col={3}>
              <img style={{width: '80%'}} src="images\aboutme\me.jpg" alt="Harit"/>
            </Cell>
            <Cell col={7}>
              <h1 style={{color: 'white', fontSize: '42px', textAlign: 'left' , margin: '0px'}}>About Me</h1>
              <p style={{color: 'white', fontSize: '20px', textAlign: 'left' , margin: '5px'}} >
                Hello! I'm Harit Kumar. Recently, I've completed a Graduate Diploma in 
                Information and Communication technologies. I have practical experience in 
                developing applications in different programming languages. 
                I'm very passionate about technology. I endeavour to be the best in my 
                field and to adapt to the continually changing technology environment. 
                Currently, I'm pursuing the opportunity to begin my career as web developer.</p>
            </Cell>
          </Grid>
        </Cell>
        <Cell col={6}>
          <div className="divCenter">
            <h4>Status</h4>
            <hr style={{width: '50%', margin: 'auto'}} />
            <p style={{paddingTop: '10px'}}>On Job Search</p>
          </div>
        </Cell>
        <Cell col={6}>
          <div className="divCenter">
            <h4>Employment Status</h4>
            <hr style={{ width: '50%', margin: 'auto'}} />
            <p style={{paddingTop: '10px'}}><b>Delivery Expert/Team Member</b> At Domino's Rolleston (Full-Time)</p>
          </div>
        </Cell>
      </Grid>
    </div>;
  }
}

export default About;
