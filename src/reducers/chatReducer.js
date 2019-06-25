import { GET_TOKAN, REC_CALL, DECLINE_KNOW } from "../actions/chatAction";

const INIT_STATE = {
  loader: false,
  tokan: {},
  getTokanStatus: "not done",
  incomingCall: false,
  incomingRoomName: "",
  callingUser: {},
  callDeclinestatus: "not done"
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TOKAN:
      return {
        ...state,
        tokan: action.payload,
        getTokanStatus: "done",
        loader: new Date(),
        callDeclinestatus: "not done"
      };
    case REC_CALL:
      return {
        ...state,
        incomingCall: true,
        incomingRoomName: action.payload.roomName,
        callingUser: action.payload.callingUser,
        loader: new Date(),
        callDeclinestatus: "not done"
      };
    case DECLINE_KNOW:
      console.log('===============action.payload=====================')
      console.log(action.payload)
      console.log('====================================')
      return {
        ...state,
        callDeclinestatus: action.payload === "declined" ? "done" : "not done",
        loader: new Date()
      };

    default:
      return state;
  }
};
