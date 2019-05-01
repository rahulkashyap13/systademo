import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import RightSideBarPage from "../../../components/RightSideBarPage";
import { getOtherUSers } from "./../../../store/actions/OtherUser";
class RightSideBar extends Component {
    componentDidMount() {
        this.props.getOtherUser();
    }
  render() {
      const { otherUerInfo } = this.props;
      console.log("otherUerInfo")
      console.log(otherUerInfo)
      console.log("otherUerInfo")
    return (
        <>
           <RightSideBarPage 
           otherUerInfo = { otherUerInfo }/>
        </>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        otherUerInfo: state.OtherUserReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
      getOtherUser: () => {
        dispatch(getOtherUSers());
      }
    };
  };
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(RightSideBar));
