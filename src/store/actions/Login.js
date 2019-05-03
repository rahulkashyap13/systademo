import { push } from "react-router-redux";
import { actionTypes } from "./actionTypes";
import { toastr } from "react-redux-toastr";
import axios from "axios";
import { AppConfig } from "../../constant/AppConfig";
export function login(data) {
  return dispatch => {
    dispatch(request({ data }));
    axios
      .get(AppConfig.API_ENDPOINT + "/user/")
      .then(response => {
        const responseData = response.data;
        if (responseData.email !== data.email) {
          toastr.error("Error", "Email id not exist.");
        } else if (responseData.password !== data.password) {
          toastr.error("Error", "Password is not valid.");
        } else {
          const authData = {
            token: responseData.userName
          };
          localStorage.setItem("user", JSON.stringify(authData));
          toastr.success("Success", "Successfully Login");
          dispatch(success(authData));
          dispatch(push("/" + responseData.userName));
        }
      })
      .catch(error => {
        const errorData = error.response ? error.response.data : error;
        toastr.error("Error", errorData.message);
        dispatch(failure(errorData.message));
      });
  };
}

function request(user) {
  return { type: actionTypes.LOGIN_REQUEST, user };
}
function success(user) {
  return { type: actionTypes.LOGIN_SUCCESS, user };
}
function failure(error) {
  return { type: actionTypes.LOGIN_FAILURE, error };
}

export function logout() {
  localStorage.removeItem("user");
  return { type: actionTypes.LOGOUT };
}
