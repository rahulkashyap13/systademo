import React from 'react';
import Avatar from 'react-avatar';
import './App.css';
import { Button, Navbar, Nav, Container, Row, Col, Form, FormControl, Spinner } from 'react-bootstrap';

function App() {
  return (
	<div className="App">		
		<Container>			
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						<Button variant="outline-success">Logout</Button>
					</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>			
			<Row className="pl-3 pr-3 mt-1">
				<Col xs={ 2 } className= "box-border">
					<div className="mt-3">
						<Nav defaultActiveKey="/home" className="flex-column">
							<Nav.Link href="/home">Active</Nav.Link>
							<Nav.Link eventKey="link-1">Link</Nav.Link>
							<Nav.Link eventKey="link-2">Link</Nav.Link>
							<Nav.Link eventKey="disabled" disabled>
								Disabled
							</Nav.Link>
						</Nav>
					</div>
				</Col>
				<Col xs={ 6 } className= "box-border">
					<div className="center-search-box">
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
						</Form>						
					</div>
					<div className="post-box mt-3">
						<div className="post-box-inner">
							<h4>Blog 1</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						</div>
						<div className="post-box-inner">
							<h4>Blog 1</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						</div>						
					</div>
					<div className="text-center mt-2 mb-2 ">
						<Spinner animation="border" variant="primary" />
					</div>					
				</Col>
				<Col xs={ 4 } className= "box-border">
					<div className="mt-3">
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2 width-75" />
							<Button variant="outline-success">Search</Button>
						</Form>
						<Row className="mt-1 text-center">
							<Col>
								<Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
								<span class="online"></span>
							</Col>
							<Col>
								<Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
								<span class="online"></span>
							</Col>
							<Col>
								<Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
								<span class="offline"></span>
							</Col>
						</Row>
						<Row className="mt-1 text-center">
							<Col>
								<Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
							</Col>
							<Col>
								<Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
							</Col>
							<Col>
								<Avatar size="50" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
							</Col>
						</Row>
						
					</div>
				</Col>
			</Row>
			<Row className="pl-3 pr-3 mt-1">
				<Col className= "box-border pt-3 pb-3">
					<div className="text-center">
						Footer
					</div>
				</Col>
			</Row>
		</Container>
	</div>
  );
}

export default App;
