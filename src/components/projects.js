import React, { Component } from "react";
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText , CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            // PHP
            return (
                <Grid>
                    <Cell col={6}>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:
                            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMWxq6Zui9mwscdD06mg9B7z6nDgDqzdRHVmYhw4rC58HoNa6H) center / cover'}}>
                                PHP Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Imkadji akljd.aj jand iand kaljdwlja.
                            </CardText>
                            <CardActions border>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"></IconButton>
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={6}>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:
                            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnLCR8cdK-HGPD4HKnXCbG_fAz38NdvdRA37IeS-vSrnIKca0i) center / cover'}}>
                                PHP Project #2
                            </CardTitle>
                            <CardText>
                                Lorem Imkadji akljd.aj jand iand kaljdwlja.
                            </CardText>
                            <CardActions border>
                                    <Button colored>GitHub</Button>
                                    <Button colored>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"></IconButton>
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            )
        }
        else if(this.state.activeTab === 1){
            //Python
            return (
                <h1>This is Python</h1>
            )
        }
        else if(this.state.activeTab === 2){
            //JavaScript
            return (
                <h1>This is JavaScript</h1>
            )
        }
        else if(this.state.activeTab === 3){
            //HTML/CSS
            return (
                <h1>This is HTML/CSS</h1>
            )
        }
        else if(this.state.activeTab === 4){
            //NODEJS
            return (
                <h1>This is NODEJS</h1>
            )
        }
        else if(this.state.activeTab === 5){
            //MySql
            return (
                <h1>This is MySql</h1>
            )
        }   
        else if(this.state.activeTab === 6){
            //Java
            return (
                <h1>This is Java</h1>
            )
        }
    }

  render() {
    return (
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
                <Tab>PHP</Tab>
                <Tab>Python</Tab>
                <Tab>JavaScript</Tab>
                <Tab>HTML/CSS</Tab>
                <Tab>NodeJs</Tab>
                <Tab>MySQL</Tab>
                <Tab>Java</Tab>
            </Tabs>
            <Grid>
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
        </div>
    )
  }
}

export default Projects;
