import { combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';
import { ProfileReducer } from "./ProfileReducer";
import { PostReducer } from "./PostReducer";
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    LoginReducer,
    ProfileReducer,
    PostReducer,
    toastr: toastrReducer
});

export default rootReducer;