import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import {connect} from 'react-redux'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';
import {logOut} from 'actions/user'

class UserInfo extends React.Component {

  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    const {user} = this.props
    return (
      <div className="user-profile d-flex flex-row align-items-center">
        <Avatar
          alt='...'
          src={require('assets/images/user.png')}
          className="user-avatar "
        />
        <div className="user-detail">
          <h4 className="user-name" onClick={this.handleClick}>{user.name} <i
            className="zmdi zmdi-caret-down zmdi-hc-fw align-middle"/>
          </h4>
        </div>
        <Menu className="user-info"
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onClose={this.handleRequestClose}
              PaperProps={{
                style: {
                  minWidth: 120,
                  paddingTop: 0,
                  paddingBottom: 0
                }
              }}
        >
          <MenuItem onClick={this.handleRequestClose}>
            <i className="zmdi zmdi-account zmdi-hc-fw mr-2"/>
            <IntlMessages id="popup.profile"/>
          </MenuItem>
          <MenuItem onClick={this.handleRequestClose}>
            <i className="zmdi zmdi-settings zmdi-hc-fw mr-2"/>
            <IntlMessages id="popup.setting"/>
          </MenuItem>
          <MenuItem onClick={() => {
            this.handleRequestClose();
            this.props.logOut()
          }}>
            <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2"/>

            <IntlMessages id="popup.logout"/>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

// const mapStateToProps = ({settings}) => {
//   const {locale} = settings;
//   return {locale}
// };

const mapStateToProps = (state)=>{
  return{
    locale: state.settings.locale,
    user: state.userReducer.user,
  }
}
export default connect(mapStateToProps, {logOut})(UserInfo);


