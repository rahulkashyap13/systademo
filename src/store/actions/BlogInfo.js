import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';

export function getPosts(data) {
  return (dispatch, getState) => {
      const stateData = getState().PostReducer;
    dispatch(request());
    axios
      .get("http://localhost:3001/posts", {
          params: data
      })
      .then(response => {
          console.log(stateData)
          let hasMore = false;
          if(response.data.length > 0 ) {
            hasMore = true
          }
          else {
              hasMore = false;
          }
        dispatch(success(response, hasMore));
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
    return { type: actionTypes.BLOGINFO_REQUEST };
  }
  function success(postInfo, hasMore) {
    return { type: actionTypes.BLOGINFO_SUCCESS, postInfo, hasMore };
  }
  function failure(error, hasMore) {
    return { type: actionTypes.BLOGINFO_FAILURE, error,hasMore };
  }
}
