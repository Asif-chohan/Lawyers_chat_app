import url from "../endPoint";
import axios from "axios";
import toastr from "toastr";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_ERR = "SIGN_UP_ERR";
export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_ERR = "SIGN_IN_ERR";
export const GET_USER = "GET_USER";
export const GET_USER_ERR = "GET_USER_ERR";
export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_ERR = "LOG_OUT_ERR";

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
      .get(url + "user/authenticate")
      .then(res => {
        console.log("res", res);
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
