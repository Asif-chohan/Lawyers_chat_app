import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import url from "../endPoint";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import toastr from "toastr";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from "actions/Auth";
import { singUp, verifyEmailFromServer } from "actions/user";


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      loader: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loader: false
    });
    // if (nextProps.signUpStatus == "done") {
    //   this.setState({
    //     loader: false
    //   });
    //   this.props.history.push("signin");
    // } else if (nextProps.signUpStatus == "error") {
    //   this.setState({
    //     loader: false
    //   });
    // }
    if (nextProps.checkEmailStatus == "done" && nextProps.emailReadyToUse == true) {
      this.props.history.push("/signup/uploadImg");
    } 

  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 3000);
    }
    // if (this.props.authUser !== null) {
    //   this.props.history.push("/");
    // }
  }
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z  A-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  signUp = () => {
    if (this.state.name === "") {
      toastr.error("Please enter your name");
    } else if (
      this.state.email === "" ||
      !this.validateEmail(this.state.email)
    ) {
      toastr.error("invalid email address");
    } else if (this.state.password.length < 7) {
      toastr.error("password must be greater than 7 characters");
    } else if (this.state.password !== this.state.cpassword) {
      toastr.error("password does not match");
    } else {
      this.setState({
        loader: true
      });

      let data = {
        name: this.state.name,
        email: this.state.email.toLowerCase(),
        password: this.state.password
      };
      // if (this.state.email != "" && this.validateEmail(this.state.email)) {
      //   this.props.verifyEmailFromServer(data)
      // }
      this.props.singUp(data);
      // this.props.history.push("/signup/uploadImg")
      this.props.history.push("/signin")

    }
  };

  render() {
    const { name, email, password, loader, cpassword } = this.state;
    const { showMessage, alertMessage } = this.props;
    return (
      <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img
                src={require("assets/images/logo.png")}
                alt="jambo"
                title="jambo"
              />
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header">
              <h1>Sign Up</h1>
            </div>

            <div className="mb-4">
              <h2>
                <IntlMessages id="appModule.createAccount" />
              </h2>
            </div>

            <div className="app-login-form">
              <form method="post" action="/">
                <TextField
                  type="text"
                  label="Name"
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                  fullWidth
                  defaultValue={name}
                  margin="normal"
                  className="mt-0 mb-2"
                />

                <TextField
                  type="email"
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                  label={<IntlMessages id="appModule.email" />}
                  fullWidth
                  defaultValue={email}
                  margin="normal"
                  className="mt-0 mb-2"
                />

                <TextField
                  type="password"
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                  label={<IntlMessages id="appModule.password" />}
                  fullWidth
                  defaultValue={password}
                  margin="normal"
                  className="mt-0 mb-2"
                />
                <TextField
                  type="password"
                  onChange={event =>
                    this.setState({ cpassword: event.target.value })
                  }
                  label="Confirm Password"
                  fullWidth
                  defaultValue={cpassword}
                  margin="normal"
                  className="mt-0 mb-4"
                />
                {/* <TextField
                  type="password"
                  onChange={event =>
                    this.setState({ cpassword: event.target.value })
                  }
                  label="Confirm Password"
                  fullWidth
                  defaultValue={cpassword}
                  margin="normal"
                  className="mt-0 mb-4"
                /> */}

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <Button
                    variant="contained"
                    onClick={this.signUp}
                    color="primary"
                    disabled={loader}
                  >
                    <IntlMessages id="Next" />
                  </Button>
                  <Link to="/signin">
                    <IntlMessages id="signUp.alreadyMember" />
                  </Link>
                </div>
                {/* <div className="app-social-block my-1 my-sm-3">
                  <IntlMessages id="signIn.connectWith" />
                  <ul className="social-link">
                    <li>
                      <IconButton
                        className="icon"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userFacebookSignIn();
                        }}
                      >
                        <i className="zmdi zmdi-facebook" />
                      </IconButton>
                    </li>

                    <li>
                      <IconButton
                        className="icon"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userTwitterSignIn();
                        }}
                      >
                        <i className="zmdi zmdi-twitter" />
                      </IconButton>
                    </li>

                    <li>
                      <IconButton
                        className="icon"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userGoogleSignIn();
                        }}
                      >
                        <i className="zmdi zmdi-google-plus" />
                      </IconButton>
                    </li>

                    <li>
                      <IconButton
                        className="icon"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userGithubSignIn();
                        }}
                      >
                        <i className="zmdi zmdi-github" />
                      </IconButton>
                    </li>
                  </ul>
                </div> */}
              </form>
            </div>
          </div>
        </div>

        {loader && (
          <div className="loader-view">
            <CircularProgress />
          </div>
        )}
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer />
      </div>
    );
  }
}

// const mapStateToProps = ({ auth }) => {
//   const { loader, alertMessage, showMessage, authUser } = auth;
//   return { loader, alertMessage, showMessage, authUser };
// };
const mapStateToProps = state => {
  return {
    signUpStatus: state.userReducer.signUpStatus,
    loader: state.userReducer.loader,
    checkEmailStatus: state.userReducer.checkEmailStatus  ,
    emailReadyToUse: state.userReducer.emailReadyToUse,
  };
};
export default connect(
  mapStateToProps,
  {
    userSignUp,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn,
    singUp,
    verifyEmailFromServer
  }
)(SignUp);
