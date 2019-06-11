import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import toastr from "toastr";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "actions/Auth";
import { signIn } from "actions/user";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "asifsaythe@gmail.com",
      password: "asif1267",
      loader: false
    };
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.userStatus === true) {
      this.props.history.push("/");
    }
  }
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z  A-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  getSignIn = () => {
    if (this.state.email === "" || !this.validateEmail(this.state.email)) {
      toastr.error("invalid email address");
    } else if (this.state.password.length < 7) {
      toastr.error("password must be greater than 7 characters");
    } else {
      this.setState({
        loader: true
      });
      let data = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.signIn(data);
    }
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      loader: false
    });
    if (nextProps.signInStatus === "done") {
      // this.props.history.push("/");
    } else if (nextProps.signInStatus === "error") {
    }
  }

  render() {
    const { email, password, loader } = this.state;
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
            <div className="app-login-header mb-4">
              <h1>
                <IntlMessages id="appModule.email" />
              </h1>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.email" />}
                    fullWidth
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                    defaultValue={email}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label={<IntlMessages id="appModule.password" />}
                    fullWidth
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                    defaultValue={password}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />

                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button
                      onClick={this.getSignIn}
                      variant="contained"
                      color="primary"
                      disabled={loader}
                    >
                      <IntlMessages id="appModule.signIn" />
                    </Button>

                    <Link to="/signup">
                      <IntlMessages id="signIn.signUp" />
                    </Link>
                  </div>
                </fieldset>
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

// const mapStateToProps = ({auth}) => {
//   const {loader, alertMessage, showMessage, authUser} = auth;
//   return {loader, alertMessage, showMessage, authUser}
// };

const mapStateToProps = state => {
  return {
    signInStatus: state.userReducer.signInStatus,
    loader: state.userReducer.loader,
    userStatus: state.userReducer.userStatus
  };
};

export default connect(
  mapStateToProps,
  {
    userSignIn,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn,
    signIn,
  }
)(SignIn);
