import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";

const Layout = (props) => {
	return(
		<>
			<Container>			
				<Header />		
				<Row className="pl-3 pr-3 mt-1">
					<Col xs={ 2 } className= "box-border">
						<Sidebar />
					</Col>
					<Col xs={ 6 } className= "box-border">
					{ props.children }				
					</Col>
					<Col xs={ 4 } className= "box-border">
						<RightSideBar />
					</Col>
				</Row>
				<Footer />
			</Container>
		</>
	)
}

export default Layout