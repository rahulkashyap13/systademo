import { actionTypes } from "./../actions/actionTypes";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
	loggingIn: false,
	isloggedIn: user ? true : false,
	user: user ? user : {},
	error:''
}

export const LoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_REQUEST:
			return {
				...state,
				loggingIn: true,
				error:''
			};
		case actionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isloggedIn: true,
				loggingIn: false,
				user: action.user,
				error:''
			};
		case actionTypes.LOGIN_FAILURE:
			return {
				...state,
				isloggedIn: false,
				loggingIn: false,
				error:action.error
			};
		case actionTypes.LOGOUT:
			return {}
		default:
			return state
	}
}