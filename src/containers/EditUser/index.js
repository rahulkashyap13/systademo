import React, { Component } from 'react';
import { connect } from "react-redux";
import EditUserPage from "../../components/EditUserPage";
import { getProfile } from "../../store/actions/ProfileInfo";
import { updateProfilfun } from "../../store/actions/UpdateUser";
class EditUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    componentDidMount() {
       
    }

    updateFun = (data) => {
      this.props.updateDataFun(data);
    }

	render() { 
    const { profileData } = this.props;
		return (
            <>
              <EditUserPage 
                profileData = { profileData }
                updateData={ this.updateFun }/>
            </>
		);
	}
}

const mapStateToProps = state => {
    return {
        profileData: state.ProfileReducer
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      updateDataFun: userData => {
        dispatch(updateProfilfun(userData));
      },
      getProfile: () => {
        dispatch(getProfile());
      }
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUser);