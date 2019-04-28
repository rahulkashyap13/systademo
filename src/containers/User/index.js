import React, { Component } from 'react';
import { Button, Form, FormControl, Spinner } from 'react-bootstrap';
import * as qs from "query-string";
import { connect } from "react-redux";
import Posts from "../../components/Posts";
import { getPosts } from "./../../store/actions/BlogInfo";
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _page: 1,
            _limit: 5,
            search: "",
        }
    }
    componentDidMount() {
        // const { location } = this.props;
        // const storageSession=JSON.parse(localStorage.getItem('user'));
        // console.log(location);
        // if(!storageSession) {
        //     this.props.history.push("/login");
        // }
        const data = {
            _page: 1,
            _limit: 5,
            search: "",
        }
        this.props.postInfo(data);
    }

    loadMoreFunAction = () => {
        const pageValue = parseInt(this.state._page) + 1;
        this.setState({
            _page: pageValue
        })
        const data = {
            _page: pageValue,
            _limit: 5,
            search: "",
        }
        console.log(data);
        this.props.postInfo(data);
    }

	render() {
        const { postInfoData } = this.props;
		return (
            <>
                <Posts 
                dataDisplay = { postInfoData.postInfo }
                loadMoreFun = { this.loadMoreFunAction }/>	
            </>
		);
	}
}

const mapStateToProps = state => {
    return {
        postInfoData: state.PostReducer
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
       postInfo: userData => {
        dispatch(getPosts(userData));
      }
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(User);