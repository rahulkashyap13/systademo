import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { Button, Row, Form, FormControl } from 'react-bootstrap';
class RightSideBarPage extends Component {
    
	render() {   
        const { otherUerInfoData } = this.props;  
		return (
      <>
        <div className="mt-3">
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2 width-75" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Row className="mt-4 text-center">
                { otherUerInfoData.otherUserInfo.data && otherUerInfoData.otherUserInfo.data.length ?
                    otherUerInfoData.otherUserInfo.data.map(( item, index) => {
                        return <div className="user-status" key={ index }>
                                <div className="user-avtar">
                                    <Avatar size="50"  src={ "https://www.kacexpress.com/wp-content/uploads/2015/02/tm.png" } />
                                    <span className={ "status-user-inner " + item.status }></span>
                                </div>                    
                                <div>{ item.fullName }</div>
                            </div>
                    })
                : null}
            </Row>           
        </div>
      </>
		);
	}
}

export default RightSideBarPage;