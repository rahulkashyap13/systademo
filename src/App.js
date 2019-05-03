import React, { Component} from 'react';
import Layout from "./containers/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Posts from "./containers/Posts";
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
				<DefaultLayout exact path="/:userName" layout={ Layout } component={ Posts } />
				<DefaultLayout path="/:userName/edit" layout={ Layout } component={ EditUser } />
				<Redirect to="/login" />
			</Switch>
		);
	}
}

export default App;
