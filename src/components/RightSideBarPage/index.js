import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { Button, Navbar, Nav, Container, Row, Col, Form, FormControl, Spinner } from 'react-bootstrap';
class RightSideBarPage extends Component {
    
	render() {   
        const { otherUerInfo } = this.props;   
        console.log(otherUerInfo)
		return (
      <>
        <div className="mt-3">
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2 width-75" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Row className="mt-4 text-center">
                {OtherUserInfo && OtherUserInfo.length ?
                    OtherUserInfo.OtherUserInfo.map(( item, index) => {
                        return <div className="user-status">
                                <div className="user-avtar">
                                    <Avatar size="50"  src={ "https://www.kacexpress.com/wp-content/uploads/2015/02/tm.png" } />
                                    <span className="status-user-inner online"></span>
                                </div>                    
                                <div>{ item.fullName }</div>
                            </div>
                    })
                : null}
                
                {/* <div className="user-status">
                    <div className="user-avtar">
                        <Avatar size="50" facebook-id="invalidfacebookusername" src="https://www.kacexpress.com/wp-content/uploads/2015/02/tm.png" />
                        <span className="status-user-inner online"></span>
                    </div>
                    
                    <div>rahul kashyap</div>
                </div>
                <div className="user-status">
                    <div className="user-avtar">
                        <Avatar size="50" facebook-id="invalidfacebookusername" src="https://www.kacexpress.com/wp-content/uploads/2015/02/tm.png" />
                        <span className="status-user-inner online"></span>
                    </div>
                    
                    <div>rahul kashyap</div>
                </div> */}
            </Row>
            <Row className="mt-1 text-center">
                <div className="user-status">
                    <div className="user-avtar">
                        <Avatar size="50" facebook-id="invalidfacebookusername" src="https://www.kacexpress.com/wp-content/uploads/2015/02/tm.png" />
                        <span className="status-user-inner offline"></span>
                    </div>
                    
                    <div>rahul kashyap</div>
                </div>
                <div className="user-status">
                    <div className="user-avtar">
                        <Avatar size="50" facebook-id="invalidfacebookusername" src="https://www.kacexpress.com/wp-content/uploads/2015/02/tm.png" />
                        <span className="status-user-inner offline"></span>
                    </div>
                    
                    <div>rahul kashyap</div>
                </div>
                <div className="user-status">
                    <div className="user-avtar">
                        <Avatar size="50" facebook-id="invalidfacebookusername" src="https://www.kacexpress.com/wp-content/uploads/2015/02/tm.png" />
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

export default RightSideBarPage;