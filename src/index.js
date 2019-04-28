import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
//import { store } from "./store";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./store/reducers";
import logger from "redux-logger";
import * as serviceWorker from "./serviceWorker";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";

const history = createBrowserHistory();
const middleware = [ thunkMiddleware, routerMiddleware(history), logger ];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const user = JSON.parse(localStorage.getItem("user"));

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <App />
    </Router>
    <ReduxToastr
      timeOut={ 2000 }
      newestOnTop={ false }
      preventDuplicates
      position="bottom-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar = { true }
      closeOnToastrClick
    />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
