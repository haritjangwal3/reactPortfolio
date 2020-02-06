import React, { Component } from "react";
import {Grid, Cell } from 'react-mdl';

class Skills extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Grid>
                <Cell col={4}>
                <h5 style={{margin: '0px', textAlign: 'center'}}>Technical Skills</h5>
                <p>{this.skills(this.props.T_skills)}</p>
                </Cell>
                <Cell col={4}>
                <h5 style={{margin: '0px',textAlign: 'center'}} >Other Skills</h5>
                <p>{this.skills(this.props.O_skills)}</p>
                </Cell>
                <Cell>
                <h5 style={{margin: '0px',textAlign: 'center'}} >Interpersonal Skills</h5>
                <p>{this.skills(this.props.P_skills)}</p>
                </Cell>
            </Grid>
        )
    }

    skills(variable){
        if(variable){
            let skillString = variable;
            let skills = skillString.split('|');
            let skillList = skills.map((skill) =>
            <li>{skill}</li>
            );
            return (
                <ul style={{paddingTop: '10px'}}>{skillList}</ul>
            )
        }
        
    }
}

export default Skills;