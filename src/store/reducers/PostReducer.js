import { actionTypes } from "./../actions/actionTypes";

const initialState = {
	postInfo: {}
};

export const PostReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.BLOGINFO_REQUEST:
			return {
				...state,
				postInfo: {
					...state.postInfo,
					hasMore: false
				}
			};
		case actionTypes.BLOGINFO_SUCCESS:
			return {
				...state,
                postInfo:{
					...state.postInfo,
					...action.postInfo
				}
			};
		case actionTypes.BLOGINFO_FAILURE:
			return {
				...state,
                postInfo:{},
                error:action.error
			};
		default:
			return state
	}
}