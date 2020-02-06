import React, { Component } from "react";
import {Grid, Cell } from 'react-mdl';

class Experience extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Grid>
                
                <Cell col={9}>
                    <h4 style={{margin: '0px'}}>{this.props.jobPlace}</h4>
                    <p style={{margin: '0px'}}>{this.props.jobTitle}</p>
                    <h6 style={{marginTop: '5px'}} >{this.roles()}</h6>
                </Cell>
                <Cell col={3}>
                    <p style={{marginBottom: '2px'}} >{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
            </Grid>
        )
    }

    roles(){
        let roleString = this.props.roles;
        const roles = roleString.split('|');
        const roleList = roles.map((role) =>
        <li>{role}</li>
        );

        return (
            <ul>{roleList}</ul>
        )
    }
}

export default Experience;