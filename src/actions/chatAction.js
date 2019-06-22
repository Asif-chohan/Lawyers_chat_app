import socket from "../endPoint/socketConfig";

export const GET_TOKAN = "GET_TOKAN";
export const SEND_CALL = "SEND_CALL"
export const SEND_CALL_ERR = "SEND_CALL_ERR"
export const REC_CALL = "REC_CALL"
export const REC_CALL_ERR = "REC_CALL_ERR"

export const getTokan = id => {
  return dispatch => {
    socket.emit("getTokan", id);
    socket.on("tokan", data => {
      console.log("===tokan=================================");
      console.log(data);
      console.log("====================================");
      dispatch({
        type: GET_TOKAN,
        payload: data
      });
    });
  };
};

export const sendCall = (user, room)=>{
  let data ={
    user: user,
    roomName: room
  }
  return(dispatch)=>{
    socket.emit("sendCall", data);
    // dispatch({
    
    // })
  }
}


export const receCall = ()=>{
  return(dispatch)=>{

    socket.on("recCall", (data)=>{
      console.log(data)
      dispatch({
        type: REC_CALL,
        payload: data
      })
    })
  }
}