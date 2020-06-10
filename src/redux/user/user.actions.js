import { userActionTypes } from "./user-action-types" ;
import API from "../../API";
import axios from "axios"




// export const fetchUserData = () => {
//     return dispatch => {
//         axios.get('https://my-json-server.typicode.com/TarasTaras36/demo/posts')
//         .then(res => {
//             console.log(res.data);
//             dispatch(logInUser(res.data));
//             return res.data;
//         })
//         .catch(error => { console.log(error)});
//     }
   
// }


export const logInUser = user => {
    const loggedUser = API.signIn(user)
    
    return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
}}

export const logOutUser = () =>({
    type: userActionTypes.DELETE_CURRENT_USER,
 
})

export const addUserTask = newTask => {
    const task = API.addTask(newTask)
    return{
    type: userActionTypes.ADD_TASK,
    payload: task
}}

export const deleteUserTask = task => {
    const currentTask = API.deleteTask(task)
   return{type: userActionTypes.DELETE_TASK,
    payload: currentTask} 
   }


 

   export const restartUserSetion = () => {
   
    const tasks =  API.restartUserSetion()
    return {
        type:userActionTypes.RESTART_USER_SETION,
        payload: tasks 
    }
   }


