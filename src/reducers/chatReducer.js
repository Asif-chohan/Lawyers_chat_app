import {
  GET_TOKAN,
  REC_CALL,
  DECLINE_KNOW,
  OUTGOING_DECLINE,
  ONLINE_USERS,
  GET_CONVER_ERR,
  GET_CONVER
} from "../actions/chatAction";

const INIT_STATE = {
  loader: false,
  tokan: {},
  getTokanStatus: "not done",
  incomingCall: false,
  incomingRoomName: "",
  callingUser: {},
  callDeclinestatus: "not done",
  outGoingDeclineStatus: "not done",
  onlineUsers: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TOKAN:
      return {
        ...state,
        tokan: action.payload,
        getTokanStatus: "done",
        loader: new Date(),
        callDeclinestatus: "not done",
        outGoingDeclineStatus: "not done",
        getConversationStatus: "not done",
        conversation: [],
      };
    case REC_CALL:
      return {
        ...state,
        incomingCall: true,
        incomingRoomName: action.payload.roomName,
        callingUser: action.payload.callingUser,
        loader: new Date(),
        callDeclinestatus: "not done",
        outGoingDeclineStatus: "not done"
      };
    case DECLINE_KNOW:
      return {
        ...state,
        callDeclinestatus: action.payload === "declined" ? "done" : "not done",
        loader: new Date()
      };
    case OUTGOING_DECLINE:
      return {
        ...state,
        outGoingDeclineStatus:
          action.payload === "declined" ? "done" : "not done",
        loader: new Date()
      };
      case GET_CONVER:
        return{
          ...state,
          getConversationStatus: "done",
          conversation: action.payload,
          loader: new Date()
        }
      case GET_CONVER_ERR:
        return{
          ...state,
          getConversationStatus: "error",
          loader: new Date()
        }
   

    default:
      return state;
  }
};
