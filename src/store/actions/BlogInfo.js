import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';
import { AppConfig } from '../../constant/AppConfig';
export function getPosts(data) {
  return (dispatch, getState) => {
    const stateData = getState().PostReducer;
    dispatch(request());
    axios
      .get(AppConfig.API_ENDPOINT + "/posts", {
        params: data
      })
      .then(response => {
        let hasMore = false;
        if (response.data.length > 0) {
          hasMore = true;
        } else {
          hasMore = false;
        }
        const dataSave = {};
        dataSave.hasMore = hasMore;
        dataSave.totalPost = response.headers[ "x-total-count" ];
        dataSave.postData =
          stateData.postInfo.postData && data._page !== 1
            ? stateData.postInfo.postData.concat(response.data)
            : response.data;
        dispatch(success(dataSave));
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
    return { type: actionTypes.BLOGINFO_REQUEST };
  }
  function success(postInfo) {
    return { type: actionTypes.BLOGINFO_SUCCESS, postInfo};
  }
  function failure(error) {
    return { type: actionTypes.BLOGINFO_FAILURE, error };
  }
}
