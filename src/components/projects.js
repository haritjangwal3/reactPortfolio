import React, { Component } from "react";
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText , CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0, isOpen : false};
    }
    viewDialog(title, url, className) {
        if(this.state.isOpen){
            return (
                <div className={className}>
                <button onClick={(e) => {this.setState({ isOpen: false})}} className="dialogButton">x</button>
                <p>{title}</p>
                <img  src={url} alt="gif"/>
                </div>
            )
        }
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            // PHP 
            return (
                <div>
                    <Grid>
                    <Cell col={6}>
                        <Card shadow={5} style={{minWidth: '380px', height: '600px', margin: 'auto'}}>
                            <CardTitle style={{ textShadow: '2px 2px #162B32', color: '#fff', width: '100%', height: '200px', background:
                            'url(images/projects/goodsell_img.png) center / cover'}}>
                                Goodsell
                            </CardTitle>
                            <CardText>
                                Goodsell Project is a self-driven project. The goal of this project is to provide second hand goods selling service, C2C.
                            <div className="wrapper">
                            <ul className="main-nav">
                                <li>1. User Authentication with password hash</li>
                                <li>2. Session & Cookie management (Remember me - Login)</li>
                                <li>3. View and add Goods (Items) with pictures.</li>
                                <li>4. Server side validation.</li>
                            </ul>
                            <h6 style={{padding:'0px', margin:'0px'}}>Technology Used:</h6>
                            <ul className="main-nav">
                                    <li><button type="button" className="btn btn-info btn-sm">PHP</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">MySQL</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">HTML5/CSS3</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">JavaScript & JQuery</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">Bootstrap</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">MVC FRAMEWORK</button></li>
                                    
                                </ul>
                            </div>
                            </CardText>
                            <CardActions border>
                                    <Button colored target="_blank" href="https://github.com/haritjangwal3/goodsell" >GitHub</Button>
                                    <Button colored onClick={(e) => this.setState({isOpen: true })}>Demo</Button>
                            </CardActions>
                        </Card>
                        {this.viewDialog("Goodsell", "images/projects/goodsell.gif", "dialogStyleLandscape")}
                    </Cell>
                    </Grid>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            //HTML/CSS/JavaScript
            return (
                <div>
                <Grid>
                <Cell col={6}>
                    <Card shadow={5} style={{minWidth: '380px',height: '600px', margin: 'auto'}}>
                        <CardTitle style={{textShadow: '2px 2px #162B32', color: '#fff', width: '100%', height: '200px', background:
                        'url(images/projects/yeoldbook_img.png) center / cover'}}>
                            Ye Old Book
                        </CardTitle>
                        <CardText>
                            During assessment, Developed a website for client own an old bookshop. The goal of this website is to promote the buying, selling and restoration of antique book.
                            <div className="wrapper">
                                <ul className="main-nav">
                                    <li>1. Responsive web design</li>
                                    <li>2. Search engin Optimization</li>
                                    <li>3. Multimedia and Forms used.</li>
                                    <li>4. Used sign-off form with client</li>
                                </ul>
                                <h6 style={{padding:'0px', margin:'0px'}}>Technology Used:</h6>
                                <ul className="main-nav">
                                    <li><button type="button" className="btn btn-info btn-sm">HTML5</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">CSS3</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">JavaScript</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">SEO</button></li>
                                    
                                </ul>
                            </div>
                        </CardText>
                        <CardActions border>
                                <Button colored target="_blank" href="https://github.com/haritjangwal3/Ye-Old-Book-webiste-project" >GitHub</Button>
                                <Button colored onClick={(e) => this.setState({isOpen: true })}>Demo</Button>
                        </CardActions>
                    </Card>
                    {this.viewDialog("Ye Old Book", "images/projects/yeoldbook.gif", "dialogStyleLandscape")}
                </Cell>
            </Grid>
            </div>
            )
        }
        else if(this.state.activeTab === 2){
            //JavaScript
            return (
                <div>
                    <Grid>
                    <Cell col={6}>
                        <Card shadow={5} style={{minWidth: '380px', height: '600px', margin: 'auto'}}>
                            <CardTitle style={{ textShadow: '2px 2px #162B32', color: '#fff', width: '100%', height: '200px', background:
                            'url(images/projects/afl_img.png) center / cover'}}>
                                Appetite For Life
                            </CardTitle>
                            <CardText>
                            Created Appetite for life app that promotes organizational goals which include promoting a 
                            healthy lifestyle, attract a younger audience using gamification. App support CRUD operation with
                            Firebase (Google).
                            <div className="wrapper">
                                <ul className="main-nav">
                                    <li>1. Proposed innovative application by creating a prototype proof of concept solution</li>
                                    <li>2. Developed a conceptual framework and architecture for solutions</li>
                                    <li>3. Design, develop and test prototype applications for mobile devices.</li>
                                </ul>
                                <h6 style={{padding:'0px', margin:'0px'}}>Technology Used:</h6>
                                <ul className="main-nav">
                                    <li><button type="button" className="btn btn-info btn-sm">MIT App-inventor</button></li>
                                    <li><button type="button" className="btn btn-info btn-sm">Firebase (Google)</button></li>
                                    
                                </ul>
                            </div>
                            </CardText>
                            <CardActions border>
                                    <Button colored onClick={(e) => this.setState({isOpen: true })}>Demo</Button>
                            </CardActions>
                        </Card>
                        {this.viewDialog("Goodsell", "images/projects/afl.gif", "dialogStylePortrait")}
                    </Cell>
                    </Grid>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            //Python
            return (
                <h1 className="CSoon">Coming Soon</h1>
            )
        }
        else if(this.state.activeTab === 4){
            //NODEJS
            return (
                <h1 className="CSoon">Coming Soon</h1>
            )
        }
        else if(this.state.activeTab === 5){
            //MySql
            return (
                <h1 className="CSoon">Coming Soon</h1>
            )
        }   
        else if(this.state.activeTab === 6){
            //Java
            return (
                <h1 className="CSoon">Coming Soon</h1>
            )
        }
    }

  render() {
    return (
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
                <Tab>PHP</Tab>
                <Tab>HTML/CSS</Tab>
                <Tab>Android Prototype</Tab>
                {/* <Tab>JavaScript</Tab> */}
                
                {/* <Tab>NodeJs</Tab> */}
                {/* <Tab>MySQL</Tab> */}
                {/* <Tab>Java</Tab> */}
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
