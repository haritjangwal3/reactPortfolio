import React, { Component } from "react";
import {Grid, Cell } from 'react-mdl';
import Education from './resume_comp/education';
import Experience from './resume_comp/experience';
import Skills from './resume_comp/skills';
import Hobbies from './resume_comp/hobbies';

class Resume extends Component {
  render() {
    return (

        <div>
            <Grid className="grid-resume">
                <Cell className="resume-left-col" col={4} row={2}>
                    {/* <div style={{textAlign: 'center'}}>
                        <img src="https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg" alt="avatar" style={{height: '200px'}} />
                    </div> */}
                    <h2>Harit Kumar</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '60%'}} />
                    <p>Seeking for an internship or an entry-level position as a software developer in a company where I could learn under working professionals and utilise my technical, problem-solving skills for the growth of the organisation.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '60%'}} />
                    <h5>Address</h5>
                    <p>12 Burford Way, Rolleston, Canterbury, New Zealand</p>
                    <h5>Phone</h5>
                    <p>(021) 201-7071</p>
                    <h5>Email</h5>
                    <p>haritjangwal89@gmail.com</p>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education 
                    startYear={2019} 
                    endYear={2020}
                    schoolName="Ara Institute of Canterbury"
                    schoolAddress="Canterbury, New Zealand"
                    course="Graduate Diploma in Information and Communications (Programming pathway – Level 7)" 
                    />
                    <Education 
                    startYear={2013} 
                    endYear={2017}
                    schoolName="Punjabi University"
                    schoolAddress="Punjab, India"
                    course="Bachelor of Computer Applications"
                    />
                    <hr />
                    <h2>Experience</h2>
                    <Experience 
                    jobPlace="Domino's Pizza Rolleston" 
                    jobTitle="Delivery Expert/Team Member (Full-time)"
                    startYear="April 2019"
                    endYear="Present"
                    roles="Provide full assistant to the team members, help operate the store| 
                    Make sure delivered food quality is maintained| 
                    Provide excellent customer service in-store and at the doorstep."
                    />
                    <hr />
                    <h2>Skills</h2>
                    <Skills
                        T_skills="Python| HTML&CSS| JavaScript| React| PHP| MySQL| MongoDB"
                        O_skills="Git Version Control| Windows 7 / 8 / 10| Microsoft Office| Microsoft Excel| Report Writing"
                        P_skills="Decision-making| Problem-Solving| Teamwork| Communication Skills| Time Management"
                    />
                    <hr/>
                    <h2>Hobbies</h2>
                    <Hobbies hobbies="Tech-savvy – Love to up to date myself with new technologies in software as well as hardware. |
                    Cricket – Cricket is my favourite sports activity since I was a child. |
                    Video Games – fond of playing video games with friends, especially strategy and simulation type.
                    " />
                </Cell>
            </Grid>
        </div>
    )
  }
}

export default Resume;
