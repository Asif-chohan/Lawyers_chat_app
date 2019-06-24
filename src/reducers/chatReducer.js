import { GET_TOKAN, REC_CALL } from "../actions/chatAction";

const INIT_STATE = {
  loader: false,
  tokan: {},
  getTokanStatus: "not done",
  incomingCall: false,
  incomingRoomName: "",
  callingUser: {}
  
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TOKAN:
      return {
        ...state,
        tokan: action.payload,
        getTokanStatus: "done",
        loader: new Date()
      };
      case REC_CALL: 
      return{
        ...state,
        incomingCall: true,
        incomingRoomName: action.payload.roomName,
        callingUser: action.payload.callingUser,
        loader: new Date()
      }

    default:
      return state;
  }
};
