import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';
import { AppConfig } from "../../constant/AppConfig";
export function getProfile() {
  return dispatch => {
    dispatch(request());
    axios
      .get(AppConfig.API_ENDPOINT + "/user/")
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        if (error.response && error.response.data.responseCode === 401) {
          localStorage.removeItem("user");
          dispatch(push("/"));
          return;
        }
        const errorData = error.response ? error.response.data : error;
        dispatch(failure(errorData.message));
      });
  };
  function request() {
    return { type: actionTypes.PROFILEINFO_REQUEST };
  }
  function success(profile) {
    return { type: actionTypes.PROFILEINFO_SUCCESS, profile };
  }
  function failure(error) {
    return { type: actionTypes.PROFILEINFO_FAILURE, error };
  }
}
