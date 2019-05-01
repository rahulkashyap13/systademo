import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Navbar, Nav, Container, Row, Col, Form, FormControl, Spinner } from 'react-bootstrap';
import Avatar from 'react-avatar';
class Sidebar extends Component {

  redirectToPage (redirect) {
    this.props.history.push("/"+redirect);
  }
  render() {
      const { profileInfo } = this.props;
    return (
        <div className="mt-3">
            <div>
                <Avatar size="150" src={ profileInfo.profileInfo.userImage } /> 
                <p className="text-center"><strong>{ profileInfo.profileInfo.description }</strong></p> 
            </div>
        
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link eventKey="link-1" onClick={ this.redirectToPage.bind(this,profileInfo.profileInfo.userName) } className="left-menu">My Posts</Nav.Link>
                <Nav.Link eventKey="link-2" onClick={ this.redirectToPage.bind(this,profileInfo.profileInfo.userName+"/edit") }  className="left-menu" >Account Settings</Nav.Link>
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
  export default withRouter(connect(
    mapStateToProps,
    undefined
  )(Sidebar));
