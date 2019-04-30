import React, { Component} from 'react';
import Avatar from 'react-avatar';
import Layout from "./containers/Layout";
import { Route, Switch } from "react-router-dom";
import './App.css';
import User from "./containers/User";
import Login from "./containers/Login";
import EditUser from "./containers/EditUser";

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
				<DefaultLayout exact path="/:userName" layout={ Layout } component={ User } />
				<DefaultLayout path="/:userName/edit" layout={ Layout } component={ EditUser } />
			</Switch>
		);
	}
}

export default App;
