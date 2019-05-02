import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import RightSideBarPage from "../../../components/RightSideBarPage";
import { getOtherUSers } from "./../../../store/actions/OtherUser";
class RightSideBar extends Component {
  componentDidMount() {
    this.props.getOtherUser();
  }

  searchFun = (data) => {
    this.props.getOtherUser(data);
  }
  render() {
      const { otherUerInfo } = this.props;
    return (
        <>
           <RightSideBarPage 
           otherUerInfoData = { otherUerInfo }
           onSearchFun = { this.searchFun }/>
        </>
    );
  }
}

const mapStateToProps = state => {
    return {
        otherUerInfo: state.OtherUserReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
      getOtherUser: (data) => {
        dispatch(getOtherUSers(data));
      }
    };
  };
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(RightSideBar));
