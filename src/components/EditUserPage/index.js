import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import Validator from "js-object-validation";
import { UserValidations, UserValidationsMessaages } from "../../validations";
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",  
            description: "",
            errors: {}
        }
    }
    componentDidMount() {
      const { profileData } = this.props;
      this.setState({
        firstName: profileData.profileInfo.firstName,
        lastName: profileData.profileInfo.lastName,
        email: profileData.profileInfo.email,  
        description: profileData.profileInfo.description,
      })
    }

    componentDidUpdate(prevProps) {
      const { profileData } = this.props;
      if(prevProps.profileData!== this.props.profileData) {
        this.setState({
          firstName: profileData.profileInfo.firstName,
          lastName: profileData.profileInfo.lastName,
          email: profileData.profileInfo.email,  
          description: profileData.profileInfo.description,
        })
      }
    }
    handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      errors: {}
    });
    try {
        const { isValid, errors } = Validator(
          this.state,
          UserValidations,
          UserValidationsMessaages
        );
        if (!isValid) {
          this.setState({
            errors,
          });
          return;
        }
        const {  firstName, lastName, email, description } = this.state;
        const { profileData } = this.props;
        this.props.updateData({
          userName: profileData.profileInfo.userName,
          password: profileData.profileInfo.password,
          userImage: profileData.profileInfo.userImage,
          firstName, 
          lastName, 
          email, 
          description
        });
      } catch (error) {
        //console.log(error);
      }
    }

    handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [ name ]: value,
        errors: {
          ...this.state.errors,
          [ name ]: ""
        }
      });
    };

	render() { 
      const { errors } = this.state;
     
		return (
      <>
          <Form className="mt-2 mb-2">
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  
                  name="firstName"
                  value={ this.state.firstName }
                  type="text"
                  placeholder="First Name"
                  onChange={ this.handleChange }
                  autoComplete="username"/>
                  {errors && errors[ "firstName" ] ? (
                      <div className="text-danger">{errors[ "firstName" ]}</div>
                      ) : (
                      ""
                      )}
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  
                  name="lastName"
                  value={ this.state.lastName }
                  type="text"
                  placeholder="Last Name"
                  onChange={ this.handleChange }
                  autoComplete="username"/>
                  {errors && errors[ "lastName" ] ? (
                      <div className="text-danger">{errors[ "lastName" ]}</div>
                      ) : (
                      ""
                      )}
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  
                  name="email"
                  value={ this.state.email }
                  type="email"
                  placeholder="Last Name"
                  autoComplete="email"
                  disabled/>
                  {errors && errors[ "email" ] ? (
                      <div className="text-danger">{errors[ "email" ]}</div>
                      ) : (
                      ""
                      )}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="password" placeholder="Password" 
                  name="description"
                  value={ this.state.description }
                  type="text"
                  placeholder="Password"
                  onChange={ this.handleChange }
                  autoComplete="description"
                  maxLength={ 50 }/>
                  {errors && errors[ "description" ] ? (
                  <div className="text-danger">{ errors[ "description" ] }</div>
                  ) : (
                  ""
                  )}
                  
              </Form.Group>
              <Button variant="primary" type="submit"  onClick={ this.handleSubmit }
              >
                  Submit
              </Button>
          </Form>
      </>
		);
	}
}

export default EditUser;