import { actionTypes } from "./../actions/actionTypes";

const initialState = {
	OtherUserInfo: {}
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
                OtherUserInfo:{
					...state.OtherUserInfo,
					...action.OtherUserInfo
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