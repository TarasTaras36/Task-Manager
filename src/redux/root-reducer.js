import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { firebaseReducer } from 'react-redux-firebase'




const rootReducer = combineReducers({
    userData: userReducer,
    firebase: firebaseReducer
})


export default rootReducer