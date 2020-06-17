import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const initState = {};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

/////async request example

// export function fetchData(user) {
  
//   return function (dispatch) {
//     return axios
//       .get("https://my-json-server.typicode.com/TarasTaras36/demo/posts")
//       .then((res) => res.data)
//       .then((data) => data.users.find(el => el.name === user.name && el.password === user.password))
//       .then(user => dispatch(logInUser(user)))
//   };
// }
