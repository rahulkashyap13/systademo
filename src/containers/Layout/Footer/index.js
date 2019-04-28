import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class Footer extends Component {
	render() {
		return (
			<Row className="pl-3 pr-3 mt-1">
				<Col className= "box-border pt-3 pb-3">
					<div className="text-center">
						Footer
					</div>
				</Col>
			</Row>
		);
	}
}

export default Footer;
