import React, { Component } from "react";
import {Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={3}>
                    <p style={{marginBottom: '2px'}} >{this.props.startYear} - {this.props.endYear}</p>
                    <hr style={{margin: '0px', width: '50%'}} />
                </Cell>
                <Cell col={9}>
                    <h4 style={{margin: '0px'}}>{this.props.schoolName}</h4>
                    <p style={{margin: '0px'}}>{this.props.schoolAddress}</p>
                    <h6 style={{marginTop: '5px'}} >{this.props.course}</h6>
                </Cell>
            </Grid>
        )
    }
}

export default Education;