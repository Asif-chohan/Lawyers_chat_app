import socket from "../endPoint/socketConfig";

export const GET_TOKAN = "GET_TOKAN";
export const SEND_CALL = "SEND_CALL";
export const SEND_CALL_ERR = "SEND_CALL_ERR";
export const REC_CALL = "REC_CALL";
export const REC_CALL_ERR = "REC_CALL_ERR";
export const DECLINE_KNOW = "DECLINE_KNOW";
export const OUTGOING_DECLINE = "OUTGOING_DECLINE";

export const getTokan = id => {
  return dispatch => {
    socket.emit("getTokan", id);
    socket.on("tokan", data => {
      dispatch({
        type: GET_TOKAN,
        payload: data
      });
    });
    socket.on("outGoingDecline", data => {
      dispatch({
        type: OUTGOING_DECLINE,
        payload: data
      });
    });

  };
};

export const sendCall = (user, room, callingUser) => {
  let data = {
    user: user,
    roomName: room,
    callingUser: callingUser
  };
  return dispatch => {
    socket.emit("sendCall", data);
    socket.on("declineKnow", data => {
      dispatch({
        type: DECLINE_KNOW,
        payload: data
      });
    });
  };
};
export const declineCall = callingUser => {
  let data = {
    callingUser: callingUser
  };
  return dispatch => {
    socket.emit("declineCall", data);
  };
};
export const outGoingLeave = selectedUser => {
  let data = {
    selectedUser: selectedUser
  };
  return dispatch => {
    socket.emit("outGoingLeave", data);
  };
};

export const receCall = () => {
  return dispatch => {
    socket.on("recCall", data => {
      dispatch({
        type: REC_CALL,
        payload: data
      });
    });
  };
};
