import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import ChatData from "./Chat";
import userReducer from "./user";
import Auth from "./Auth";
import chatReducer from './chatReducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    chatData: ChatData,
    auth: Auth,
    userReducer,
    chatReducer
  });
