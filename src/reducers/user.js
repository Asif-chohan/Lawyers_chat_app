import {
  SIGN_UP,
  SIGN_UP_ERR,
  SIGN_IN,
  SIGN_IN_ERR,
  GET_USER,
  GET_USER_ERR
} from "../actions/user";

const INIT_STATE = {
  loader: false,
  user: {},
  signUpStatus: "not done",
  userStatus: false,
  signInStatus: "not done"
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
    default:
      return state;
  }
};