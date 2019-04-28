import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { Button, Navbar, Nav, Container, Row, Col, Form, FormControl, Spinner } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <>
            <div className="mt-3">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 width-75" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Row className="mt-1 text-center">
                    <div className="user-status">
                        <div className="user-avtar">
                            <Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                            <span className="status-user-inner online"></span>
                        </div>
                        
                        <div>rahul kashyap</div>
                    </div>
                    <div className="user-status">
                        <div className="user-avtar">
                            <Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                            <span className="status-user-inner online"></span>
                        </div>
                        
                        <div>rahul kashyap</div>
                    </div>
                    <div className="user-status">
                        <div className="user-avtar">
                            <Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                            <span className="status-user-inner online"></span>
                        </div>
                        
                        <div>rahul kashyap</div>
                    </div>
                </Row>
                <Row className="mt-1 text-center">
                    <div className="user-status">
                        <div className="user-avtar">
                            <Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                            <span className="status-user-inner offline"></span>
                        </div>
                        
                        <div>rahul kashyap</div>
                    </div>
                    <div className="user-status">
                        <div className="user-avtar">
                            <Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                            <span className="status-user-inner offline"></span>
                        </div>
                        
                        <div>rahul kashyap</div>
                    </div>
                    <div className="user-status">
                        <div className="user-avtar">
                            <Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                            <span className="status-user-inner offline"></span>
                        </div>
                        
                        <div>rahul kashyap</div>
                    </div>
                </Row>						
            </div>
        </>
    );
  }
}

export default Header;
