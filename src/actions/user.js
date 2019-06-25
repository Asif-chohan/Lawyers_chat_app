import url from "../endPoint";
import axios from "axios";
import toastr from "toastr";
import socket from "../endPoint/socketConfig";
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_ERR = "SIGN_UP_ERR";
export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_ERR = "SIGN_IN_ERR";
export const GET_USER = "GET_USER";
export const GET_USER_ERR = "GET_USER_ERR";
export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_ERR = "LOG_OUT_ERR";
export const GET_ALL = "GET_ALL";
export const GET_ALL_ERR = "GET_ALL_ERR";
export const EMAIL_IN_USE = "EMAIL_IN_USE"
export const EMAIL_IN_USE_ERR = "EMAIL_IN_USE_ERR"
export const EMAIL_READY_TO_USE = "EMAIL_READY_TO_USE"
export const ONLINE_USERS = "ONLINE_USERS";


        
        
const config = {
  headers: {
    'content-type' : 'multipart/form-data'
  }
}

export const singUp = data => {
  console.log("======in action==============================");
  console.log(data);
  console.log("====================================");
  return disptach => {
    axios
      .post(url + "user/signup", data)
      .then(res => {
        if (res.data === "Account has been created!") {
          disptach({
            type: SIGN_UP,
            payload: data
          });
          toastr.success("Successfully Registered!");
        } else if (res.data === "email already in use") {
          disptach({
            type: SIGN_UP_ERR
          });
          toastr.error("email already in use");
        } else {
          disptach({
            type: SIGN_UP_ERR
          });
          toastr.error("Error has been ocured! try again later");
        }
      })
      .catch(err => {
        console.log("err", err);
        disptach({
          type: SIGN_UP_ERR
        });
        toastr.error("Error has been ocured! try again later");
      });
  };
};

export const signIn = data => {
  console.log("======in action==============================");
  console.log(data);
  console.log("====================================");
  return disptach => {
    axios
      .post(url + "user/login", data)
      .then(res => {
        console.log("res", res);
        socket.emit("setId", res.data._id);
        disptach({
          type: SIGN_IN,
          payload: res.data
        });

        toastr.success("Successfully Sign in!");
      })
      .catch(err => {
        console.log("err", err.status);
        disptach({
          type: SIGN_UP_ERR
        });
        toastr.error("User not Registered");
      });
  };
};
export const getUser = () => {
  return disptach => {
    axios
      .get(url + "user/authenticate")
      .then(res => {
        console.log("res", res);
        socket.emit("setId", res.data._id);

        disptach({
          type: GET_USER,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("err", err.status);
        disptach({
          type: GET_USER_ERR
        });
      });
  };
};
export const logOut = () => {
  return disptach => {
    axios
      .post(url + "user/logout")
      .then(res => {
        console.log("res", res);
        if (res.data === "succefully logout!") {
          toastr.success("Successfully logout");

          disptach({
            type: LOG_OUT
          });
        } else {
          disptach({
            type: LOG_OUT_ERR
          });
          toastr.error("Error has been ocured! try again later");
        }
      })
      .catch(err => {
        console.log("err", err.status);
        disptach({
          type: LOG_OUT_ERR
        });
        toastr.error("Error has been ocured! try again later");
      });
  };
};

export const getAllUsers = () => {
  return dispatch => {
    socket.emit("getAll");
    socket.on("allUsers", data => {
      if (data === "error") {
        dispatch({
          type: GET_ALL_ERR
        });
      } else {
        dispatch({
          type: GET_ALL,
          payload: data
        });
      }
    });
    socket.on("onlineUsers", users => {
      console.log('======users in actions==============================')
      console.log(users)
      console.log('====================================')
      dispatch({
        type: ONLINE_USERS,
        payload: users
      });
    });
 
  };
};

export const verifyEmailFromServer = (data) => {
  return dispatch => {
    axios.post(url + "user/emailVerification", data)
      .then(res => {
        console.log("res", res);
        if (res.data === "readytouse") {
          dispatch({
            type: EMAIL_READY_TO_USE,
            data
          })
        } else if(res.data === "email already in use") {
          toastr.error("Email already registered")
          dispatch({
            type: EMAIL_IN_USE
          })
        }
        else {
          dispatch({
            type:EMAIL_IN_USE_ERR
          })
        }
      })
      .catch(err => {
        console.log("err", err)
        toastr.error("Error occured! Try again later")
        dispatch({
          type: EMAIL_IN_USE_ERR
        })
      })
  }
}