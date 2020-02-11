import React, { Component } from "react";
import {Grid, Cell } from 'react-mdl';

class Hobbies extends Component {
    
    render() {
        return (
            <Grid>
                <Cell col={12}>
                {this.hobbies(this.props.hobbies)}
                </Cell>
            </Grid>
        )
    }

    hobbies(variable){
        if(variable){
            let hobbiesString = variable;
            let hobbies = hobbiesString.split('|');
            let hobbiesList = hobbies.map((hobbie) =>
            <li key={hobbie.toString()}  >{hobbie}</li>
            );
            return (
                <ul style={{paddingTop: '10px'}}>{hobbiesList}</ul>
            )
        }
        
    }
}

export default Hobbies;