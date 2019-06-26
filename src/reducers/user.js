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
  GET_ALL_ERR,
  EMAIL_IN_USE,
  EMAIL_IN_USE_ERR,
  EMAIL_READY_TO_USE,
  ONLINE_USERS
} from "../actions/user";

const INIT_STATE = {
  loader: false,
  user: {},
  signUpStatus: "not done",
  userStatus: false,
  signInStatus: "not done",
  logoutStatus: "not done",
  getAllStatus: "not done",
  allUsers: [],
  checkEmailStatus: "not done",
  new_User:{},
  emailReadyToUse: false,
  onlineUsers: []
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
    case EMAIL_IN_USE:
      return {
        ...state,
        checkEmailStatus: "done",
        emailReadyToUse: false,
        loader: new Date()
      };
    case EMAIL_IN_USE_ERR:
      return {
        ...state,
        checkEmailStatus: "error",
        loader: new Date()
      };
      case EMAIL_READY_TO_USE:
      return {
          ...state,
          checkEmailStatus:"done",
          emailReadyToUse:true,
          loader:new Date(),
          new_User:action.data
      };
      case ONLINE_USERS:
      
          return {
            ...state,
            onlineUsers: action.payload,
            loader: new Date()
          };
    default:
      return state;
  }
};
