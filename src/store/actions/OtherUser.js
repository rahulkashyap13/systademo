import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';
import { AppConfig } from "../../constant/AppConfig";
export function getOtherUSers(data) {
  return (dispatch, getState) => {
      const stateData = getState().PostReducer;
    dispatch(request());
    let searchValue = {};
    if(data === "online") {
        searchValue.status = "online";
    }
    else if(data === "offline") {
        searchValue.status = "offline"
    } else if(data !== "" && data !== undefined) {
      const fullname = "fullName_like";
        searchValue[ fullname ]  = data;
    } else {
        searchValue = {}
    }
    axios
      .get(AppConfig.API_ENDPOINT + "/otherUser", {
        params: searchValue
      })
      .then(response => {
        dispatch(success(response));
      })
      .catch(error => {
        if (error.response && error.response.data.responseCode === 401) {
          localStorage.removeItem("user");
          dispatch(push("/login"));
          return;
        }
        const errorData = error.response ? error.response.data : error;
        dispatch(failure(errorData.message, false));
      });
  };
  function request() {
    return { type: actionTypes.OTHERUSER_REQUEST };
  }
  function success(otherUserInfo) {
    return { type: actionTypes.OTHERUSER_SUCCESS, otherUserInfo};
  }
  function failure(error) {
    return { type: actionTypes.OTHERUSER_FAILURE, error };
  }
}
