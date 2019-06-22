import {
  SIGN_UP,
  SIGN_UP_ERR,
  SIGN_IN,
  SIGN_IN_ERR,
  GET_USER,
  GET_USER_ERR,
  LOG_OUT,
  LOG_OUT_ERR,
  GET_ALL,
  GET_ALL_ERR
} from "../actions/user";

const INIT_STATE = {
  loader: false,
  user: {},
  signUpStatus: "not done",
  userStatus: false,
  signInStatus: "not done",
  logoutStatus: "not done",
  getAllStatus: "not done",
  allUsers: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        signUpStatus: "done",
        loader: new Date()
      };
    case SIGN_UP_ERR:
      return {
        ...state,
        signUpStatus: "error",
        loader: new Date()
      };
    case SIGN_IN:
      return {
        ...state,
        userStatus: true,
        user: action.payload,
        loader: new Date(),
        signInStatus: "done"
      };
    case SIGN_IN_ERR:
      return {
        ...state,
        loader: new Date(),
        signInStatus: "error"
      };
    case GET_USER:
      return {
        ...state,
        userStatus: true,
        user: action.payload,
        loader: new Date()
      };
    case GET_USER_ERR:
      return {
        ...state,
        userStatus: false,
        loader: new Date()
      };
    case LOG_OUT:
      return {
        ...state,
        userStatus: false,
        user: {},
        logoutStatus: "done",
        loader: new Date()
      };
    case LOG_OUT_ERR:
      return {
        ...state,
        logoutStatus: "error",
        loader: new Date()
      };
    case GET_ALL:
      let users = action.payload.filter(item => item._id !== state.user._id);
      console.log("user all", users);
      return {
        ...state,
        getAllStatus: "done",
        allUsers: users,
        loader: new Date()
      };
    case GET_ALL_ERR:
      return {
        ...state,
        getAllStatus: "error",
        loader: new Date()
      };
    default:
      return state;
  }
};
