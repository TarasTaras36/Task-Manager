import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const initState = {};

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)) )

export default store