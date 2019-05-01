import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';

export function getOtherUSers(data) {
  return (dispatch, getState) => {
      const stateData = getState().PostReducer;
    dispatch(request());
    let searchValue = {};
    if(data === "online") {
        searchValue.status = online;
    }
    else if(data === "offline") {
        searchValue.status = offline
    } else if(data !== "" && data !== undefined) {
        searchValue.fullName= data
    } else {
        searchValue = {}
    }
    axios
      .get("http://localhost:3001/otherUser", {
        params: searchValue
      })
      .then(response => {       
        dispatch(success(response));
      })
      .catch(error => {        
        if (error.response && error.response.data.responseCode === 401) {
          localStorage.removeItem('user');
          dispatch(push('/login'));
          return;
        }
        const errorData = error.response ? error.response.data : error;
        dispatch(failure(errorData.message, false));
      });
  };
  function request() {
    return { type: actionTypes.OTHERUSER_REQUEST };
  }
  function success(OtherUserInfo) {
    return { type: actionTypes.OTHERUSER_SUCCESS, OtherUserInfo};
  }
  function failure(error) {
    return { type: actionTypes.OTHERUSER_FAILURE, error };
  }
}