import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';
import { toastr } from "react-redux-toastr";
import { AppConfig } from "../../constant/AppConfig";

export function updateProfilfun(data) {
  return dispatch => {
    dispatch(request());
    axios
      .put(AppConfig.API_ENDPOINT + "/user/", data)
      .then(response => {
        dispatch(success(response.data));
        toastr.success("Success", "Data Updated Successfuly");
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
    return { type: actionTypes.UPDATEUSER_REQUEST };
  }
  function success(profile) {
    return { type: actionTypes.UPDATEUSER_SUCCESS, profile };
  }
  function failure(error) {
    return { type: actionTypes.UPDATEUSER_FAILURE, error };
  }
}
