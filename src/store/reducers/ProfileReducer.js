import { actionTypes } from "./../actions/actionTypes";

const initialState = {
    profileInfo: {},
};

export const ProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PROFILEINFO_REQUEST:
			return {
				...state
			};
		case actionTypes.PROFILEINFO_SUCCESS:
			return {
				...state,
				profileInfo:action.profile
			};
		case actionTypes.PROFILEINFO_FAILURE:
			return {
				...state,
                profileInfo:{},
                error:action.error
			};
		default:
			return state
	}
}