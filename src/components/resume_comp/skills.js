import React, { Component } from "react";
import {Grid, Cell } from 'react-mdl';

class Skills extends Component {
    
    render() {
        return (
            <Grid>
                <Cell col={4}>
                <h5 style={{margin: '0px', textAlign: 'center'}}>Technical Skills</h5>
                {this.skills(this.props.T_skills)}
                </Cell>
                <Cell col={4}>
                <h5 style={{margin: '0px',textAlign: 'center'}} >Other Skills</h5>
                {this.skills(this.props.O_skills)}
                </Cell>
                <Cell>
                <h5 style={{margin: '0px',textAlign: 'center'}} >Interpersonal Skills</h5>
                {this.skills(this.props.P_skills)}
                </Cell>
            </Grid>
        )
    }

    skills(variable){
        if(variable){
            let skillString = variable;
            let skills = skillString.split('|');
            let skillList = skills.map((skill) =>
            <li key={skill.toString()}>{skill}</li>
            );
            return (
                <ul style={{paddingTop: '10px'}}>{skillList}</ul>
            )
        }
        
    }
}

export default Skills;