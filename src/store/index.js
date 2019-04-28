import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import rootReducer from './reducers';

const history = createBrowserHistory();

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
]

export const store = createStore(
	rootReducer, 
	applyMiddleware(...middleware)
);