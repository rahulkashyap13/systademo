import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./../../store/actions/Login";
import Validator from "js-object-validation";
import { Form, Button } from 'react-bootstrap';
import { LoginValidations, LoginValidationsMessaages } from "../../validations";
import "./Login.css";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
      show: false
    };
  }

  componentDidMount() {
   // const localStorage.getItem('user')
    const storageSession=JSON.parse(localStorage.getItem('user'));
    if(storageSession) {
      this.props.history.push("/"+storageSession.token);
    };
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: {}
    });
    
    try {
      const { isValid, errors } = Validator(
        this.state,
        LoginValidations,
        LoginValidationsMessaages
      );
      if (!isValid) {
        this.setState({
          errors,
          isLoading: false
        });
        return;
      }
      const { email, password } = this.state;
      this.props.loginUser({
        email,
        password
      });
    } catch (error) {
      //console.log(error);
    }
  };

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
		const { loginState } = this.props
    return (
      <>
      <div className="login-page">
        <div className="login-wrap">
          <div className="login-box">	
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  
                  name="email"
                  value={ this.state.email }
                  type="email"
                  placeholder="Email Address"
                  onChange={ this.handleChange }
                  autoComplete="username"/>
                  {errors && errors[ "email" ] ? (
                      <div className="text-danger">{errors[ "email" ]}</div>
                    ) : (
                      ""
                    )}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                  name="password"
                  value={ this.state.password }
                  type="password"
                  placeholder="Password"
                  onChange={ this.handleChange }
                  autoComplete="current-password"/>
                    {errors && errors[ "password" ] ? (
                      <div className="text-danger">{ errors[ "password" ] }</div>
                    ) : (
                      ""
                    )}
              </Form.Group>
              <Button variant="primary" type="submit"  onClick={ this.handleSubmit }
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const loginstatus = state.LoginReducer;
  return {
    loginState: state.LoginReducer,
    loginstatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => {
      dispatch(login(userData));
    }
  };
};
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
