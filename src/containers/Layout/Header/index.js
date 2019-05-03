import React, { Component } from 'react';
import { Button, Navbar, Nav, Container, Row, Col, Form, FormControl, Spinner } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as qs from "query-string";
import { logout } from "./../../../store/actions/Login";
import { getProfile } from "./../../../store/actions/ProfileInfo";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
  }
  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    this.setState({ userName: pathname.split( "/" ) [ 1 ]});

    const storageSession=JSON.parse(localStorage.getItem('user'));
    if(!storageSession) {
       this.props.history.push("/login");
    }
    else {
      this.props.getProfile();
    }

  }
  logOut = () => {    
    this.props.logoutAction();  
    this.props.history.push("/login");     
  };

  render() {
    const { userName } = this.state;
    return (
      <Navbar bg="light" variant="light" className="back-wrap">
        <Navbar.Brand href="#home" className="text-uppercase">{ userName }</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="primary" onClick={ this.logOut }>Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>	
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => {
      dispatch(logout());
    },
    getProfile: () => {
      dispatch(getProfile());
    }
  };
};
export default withRouter(connect(
  undefined,
  mapDispatchToProps
)(Header));