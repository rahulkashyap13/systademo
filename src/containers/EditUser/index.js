import React, { Component } from 'react';
import { connect } from "react-redux";
import EditUserPage from "../../components/EditUserPage";
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
       
    }

	render() { 
    const { postInfoData } = this.props;
		return (
            <>
              <EditUserPage 
                postInfoData = { postInfoData }/>
            </>
		);
	}
}

const mapStateToProps = state => {
    return {
        postInfoData: state.PostReducer
    };
  };
  // const mapDispatchToProps = dispatch => {
  //   return {
  //      postInfo: userData => {
  //       dispatch(getPosts(userData));
  //     }
  //   };
  // };
  export default connect(
    mapStateToProps,
    undefined
  )(EditUser);