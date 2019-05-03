import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class Footer extends Component {
	render() {
		return (
			<Row className="pl-3 pr-3 mt-1 back-wrap box-border ml-1 mr-1">
				<Col className= "pt-3 pb-3">
					<div className="text-center">
						Footer
					</div>
				</Col>
			</Row>
		);
	}
}

export default Footer;
