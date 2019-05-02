import { actionTypes } from "./../actions/actionTypes";

const initialState = {
	otherUserInfo: {}
};

export const OtherUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.OTHERUSER_REQUEST:
			return {
				...state
			};
		case actionTypes.OTHERUSER_SUCCESS:
			return {
				...state,
                otherUserInfo:{
					...state.otherUserInfo,
					...action.otherUserInfo
				}
			};
		case actionTypes.OTHERUSER_FAILURE:
			return {
				...state,
                postInfo:{},
                error:action.error
			};
		default:
			return state
	}
}