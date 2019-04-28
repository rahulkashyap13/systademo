import React, { Component} from 'react';
import Avatar from 'react-avatar';
import Layout from "./containers/Layout";
import { Route, Switch } from "react-router-dom";
import { Button, Navbar, Nav, Container, Row, Col, Form, FormControl, Spinner } from 'react-bootstrap';
import './App.css';
import Header from "./containers/Layout/Header";
import Footer from "./containers/Layout/Footer";
import Sidebar from "./containers/Layout/Sidebar";
import RightSideBar from "./containers/Layout/RightSideBar";
import User from "./containers/User";
import Login from "./containers/Login";

const DefaultLayout = ({ component: Component, layout: Layout, ...rest }) => {
	return (
	  <Route
		{ ...rest }
		render={ props => (
		  <Layout { ...props }>
			<Component { ...props } />
		  </Layout>
		) }
	  />
	);
  };

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={ Login } />
				<DefaultLayout path="/:userName" layout={ Layout } component={ User } />
			</Switch>
		);
	}
}

export default App;
