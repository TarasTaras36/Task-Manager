import { userActionTypes } from "./user-action-types";

const INITIAL_STATE = {
  currentUser: {},
  userLoggedIn: false,
  tasks: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        userLoggedIn: true,
      };

    case userActionTypes.DELETE_CURRENT_USER:
      return INITIAL_STATE;

    case userActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case userActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    case userActionTypes.RESTART_USER_SETION:
      return {
        ...state,
        tasks: action.payload,
      };

    case userActionTypes.EDIT_USER_TASK:
      const tasks = [...state.tasks];
      tasks.forEach(el => {
        if (el.id == action.payload.id) {
          el.task = action.payload.task
        }
      })
      return {
        ...state,
        tasks,
      };
    default:
      return state;
  }
};

export { userReducer };
