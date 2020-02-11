import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Grid, Cell} from 'react-mdl';
import Iframe from 'react-iframe'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          msg: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <Form style={{width: '80%', height: '100vh', margin:'auto'}}>
                <Grid className="contact-grid">
                    <Cell className="contact-grid-left" col={6}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11554.007241870871!2d172.38801751932!3d-43.61691357833499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1580993004440!5m2!1sen!2snz" width="100%" height="300px" frameborder="0"></Iframe>
                    <h2>Harit Kumar</h2>
                    <hr />
                    <h6><i className="fa fa-phone" aria-hidden="true"></i> (021) 2017 071</h6>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> haritjangwal89@gmail.com</p>
                    <p><i className="fa fa-address-card" aria-hidden="true"></i> 12 Burford Way, Rolleston<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canterbury, New Zealand</p>
                    </Cell>
                    <Cell className="contact-grid-right" col={6}>
                        <FormGroup row>
                            <Label className="contact-label" for="exampleEmail" >Email</Label>
                            <Input style={{padding: '-20px'}} required type="email" name="email" id="email" placeholder="Your email address"
                            onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup row>
                            <Label className="contact-label" for="exampleEmail" >Name</Label>
                            <Input required type="text" name="name" id="name" placeholder="Your name"
                            onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup row>
                            <Label className="contact-label" for="exampleText" >Your Message</Label>
                            <Input required type="textarea" placeholder="Your message" name="msg" id="msg" 
                            onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup check row>
                            <Button style={{backgroundColor: 'blue', height: '50px', width: '100px'}}>Submit</Button>
                        </FormGroup>
                    </Cell>
                </Grid>
            </Form>
        )
    }
}

export default Contact;
