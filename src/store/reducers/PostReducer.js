import { actionTypes } from "./../actions/actionTypes";

const initialState = {
    postInfo: {},
};

export const PostReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.BLOGINFO_REQUEST:
			return {
				...state
			};
		case actionTypes.BLOGINFO_SUCCESS:
			return {
				...state,
                postInfo:action.postInfo,
                hasMore: action.hasMore
			};
		case actionTypes.BLOGINFO_FAILURE:
			return {
				...state,
                postInfo:{},
                hasMore: false,
                error:action.error
			};
		default:
			return state
	}
}