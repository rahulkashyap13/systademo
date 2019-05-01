import { combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';
import { ProfileReducer } from "./ProfileReducer";
import { PostReducer } from "./PostReducer";
import { OtherUserReducer } from "./OtherUserReducer";
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    LoginReducer,
    ProfileReducer,
    PostReducer,
    OtherUserReducer,
    toastr: toastrReducer
});

export default rootReducer;