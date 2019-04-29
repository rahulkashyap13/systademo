import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Navbar, Nav, Container, Row, Col, Form, FormControl, Spinner } from 'react-bootstrap';
import Avatar from 'react-avatar';
class Sidebar extends Component {

  render() {
      const { profileInfo } = this.props;
    return (
        <div className="mt-3">
            <div>
                {/* <Avatar size="150" src={ profileInfo.profileInfo.userImage } /> */}
                <p className="text-center"><strong>{ profileInfo.profileInfo.description }</strong></p>
            </div>
        
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link eventKey="link-1" href={ "/"+profileInfo.profileInfo.userName } className="left-menu">My Posts</Nav.Link>
                <Nav.Link eventKey="link-2"  className="left-menu">Account Settings</Nav.Link>
            </Nav>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        profileInfo: state.ProfileReducer
    };
  };
//   const mapDispatchToProps = dispatch => {
//     return {
//       loginUser: userData => {
//         dispatch(login(userData));
//       },
//       socialLogin: userData => {
//         dispatch(socialLogin(userData));
//       }
//     };
//   };
  export default connect(
    mapStateToProps,
    undefined
  )(Sidebar);
