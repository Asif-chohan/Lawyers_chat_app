import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { connect } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Moment from "moment";
import ChatUserList from "components/chatPanel/ChatUserList";
import conversationList from "../data/conversationList";
import Conversation from "components/chatPanel/Conversation/index";
import users from "../data/chatUsers";
import ContactList from "components/chatPanel/ContactList/index";
import SearchBox from "components/SearchBox/index";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import { getAllUsers } from "../../../../actions/user";
import { sendCall, receCall, declineCall } from "../../../../actions/chatAction";
import Video from "twilio-video";
import placeholderImage from "../../../../assets/images/placeholder.jpg";
import Typography from "@material-ui/core/Typography";

import sound from "../../../../assets/sound.mp3";
// dialog imports
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import CallEnd from "@material-ui/icons/CallEnd";
import OutGoingCall from "../../../../components/Call/outgoingCall";
import Call from "@material-ui/icons/Call";
import IncomingCallScreen from "../../../../components/Call/incomingCall";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ChatPanel extends Component {
  // call functions.....................................
  startCall = (user, callType) => {
    console.log("callType", callType);
    if (!this.state.roomName.trim()) {
      this.setState({ roomNameErr: true, showOutGoingLoader: false });
      return;
    }

    this.setState({
      showOutGoingLoader: true,
      callType
    });
    let roomName = "newAsif";
    // let roomName = "";
    // if (callType === "outGoing") {
    //   roomName = this.props.user._id + user._id;
    //   console.log("Joining room '" + roomName + "'...");
    this.setState({
      roomName: roomName
    });
    // } else {
    //   roomName = this.state.roomName;
    // }

    let connectOptions = {
      name: roomName
    };

    if (this.state.previewTracks) {
      connectOptions.tracks = this.state.previewTracks;
    }

    // Join the Room with the token from the server and the

    Video.connect(this.state.token, connectOptions).then(
      this.roomJoined,

      error => {
        alert("Could not connect to Twilio: " + error.message);
      }
    );
  };

  attachTracks(tracks, container) {
    console.log("================tracks====================", tracks);
    tracks.forEach(track => {
      console.log("===================container=================", container);
      container.appendChild(track.attach());
    });
  }

  // Attaches a track to a specified DOM container
  attachParticipantTracks(participant, container) {
    console.log("==========attachParticipantTracks===========", container);
    console.log("gum log", participant);
    var tracks = Array.from(participant.tracks.values());

    console.log("===============attachParticipantTracks============", tracks);
    this.attachTracks(tracks, container);
  }

  detachTracks = tracks => {
    tracks.forEach(track => {
      track.detach().forEach(detachedElement => {
        detachedElement.remove();
      });
    });
  };

  detachParticipantTracks = participant => {
    var tracks = Array.from(participant.tracks.values());
    this.detachTracks(tracks);
  };

  roomJoined = room => {
    if (this.state.callType === "outGoing") {
      this.props.sendCall(
        this.state.selectedUser,
        this.state.roomName,
        this.props.user
      );
    }

    this.togglePlay();

    // Called when a participant joins a room
    console.log("Joined as '" + this.state.identity + "'");
    this.setState({
      activeRoom: room,
      localMediaAvailable: true,
      hasJoinedRoom: true,
      showOutGoingScreen: true,
      showOutGoingLoader: false
    });

    // Attach LocalParticipant's Tracks, if not already attached.
    if (!this.state.showOutGoingScreen) {
      var previewContainer = this.refs.localMedia;
      console.log("=======previewContainer=============================");
      console.log(previewContainer);
      console.log("====================================");
      if (!previewContainer.querySelector("video")) {
        this.attachParticipantTracks(room.localParticipant, previewContainer);
      }
    }

    // Attach the Tracks of the Room's Participants.
    room.participants.forEach(participant => {
      console.log("Already in Room: '" + participant.identity + "'");
      var previewContainer = this.refs.remoteMedia;
      this.attachParticipantTracks(participant, previewContainer);
    });

    // When a Participant joins the Room, log the event.
    room.on("participantConnected", participant => {
      console.log("Joining: '" + participant.identity + "'");
    });

    // When a Participant adds a Track, attach it to the DOM.
    room.on("trackAdded", (track, participant) => {
      console.log(participant.identity + " added track: " + track.kind);
      var previewContainer = this.refs.remoteMedia;
      this.attachTracks([track], previewContainer);
    });

    // When a Participant removes a Track, detach it from the DOM.
    room.on("trackRemoved", (track, participant) => {
      console.log(participant.identity + " removed track: " + track.kind);
      this.detachTracks([track]);
    });

    // When a Participant leaves the Room, detach its Tracks.
    room.on("participantDisconnected", participant => {
      console.log("Participant '" + participant.identity + "' left the room");
      this.detachParticipantTracks(participant);
      this.leaveRoom();
    });

    // Once the LocalParticipant leaves the room, detach the Tracks
    // of all Participants, including that of the LocalParticipant.
    room.on("disconnected", () => {
      if (this.state.previewTracks) {
        this.state.previewTracks.forEach(track => {
          track.stop();
        });
      }
      this.detachParticipantTracks(room.localParticipant);
      room.participants.forEach(this.detachParticipantTracks);
      this.state.activeRoom = null;
      this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
    });
  };

  leaveRoom = () => {
    this.togglePlay();
    this.state.activeRoom.disconnect();
    this.setState({
      hasJoinedRoom: false,
      localMediaAvailable: false,
      showOutGoingScreen: false,
      showIncomingScreen: false
    });
  };
  declineCall = () => {
    this.props.declineCall(this.props.callingUser)
    this.togglePlay();
    this.setState({
      hasJoinedRoom: false,
      localMediaAvailable: false,
      showOutGoingScreen: false,
      showIncomingScreen: false
    });
  };

  // end of call code......................................................

  Communication = () => {
    const { incomingCall } = this.props;
    const {
      message,
      selectedUser,
      conversation,
      showOutGoingLoader
    } = this.state;
    // const { conversationData } = conversation;
    console.log("selecteduser", selectedUser);

    // let showLocalTrack = this.state.localMediaAvailable ? (
    //   <div className="flex-item">
    //     <div ref="remoteMedia" className="remoteVideo">
    //       <div ref="localMedia" className="localVideo" />
    //     </div>
    //   </div>
    // ) : (
    //   ""
    // );

    return (
      <div className="chat-main">
        <div className="chat-main-header">
          <IconButton
            className="d-block d-xl-none chat-btn"
            aria-label="Menu"
            onClick={this.onToggleDrawer.bind(this)}
          >
            <i className="zmdi zmdi-comment-text" />
          </IconButton>
          <div className="chat-main-header-info">
            <div className="chat-avatar mr-2">
              <div className="chat-avatar-mode">
                <img
                  // src={selectedUser.thumb}
                  src={placeholderImage}
                  className="rounded-circle size-60"
                  alt=""
                />

                <span className={`chat-mode ${selectedUser.status}`} />
              </div>
            </div>

            <div className="chat-contact-name">{selectedUser.name}</div>
          </div>
        </div>

        <CustomScrollbars
          className="chat-list-scroll scrollbar"
          style={{
            height:
              this.props.width >= 1200
                ? "calc(100vh - 300px)"
                : "calc(100vh - 255px)"
          }}
        >
          {/* <div className="flex-container"> */}
          {/* {showLocalTrack} */}

          {/* <div className="flex-item" ref="remoteMedia" id="remote-media" />
          </div> */}
          {/* <Conversation
            conversationData={conversationData}
            selectedUser={selectedUser}
          /> */}
        </CustomScrollbars>

        <div className="chat-main-footer">
          <div
            className="d-flex flex-row align-items-center"
            style={{ maxHeight: 51 }}
          >
            {/* <div className="col">
              <div className="form-group">
                <textarea
                  id="required"
                  className="border-0 form-control chat-textarea"
                  value={message}
                  placeholder="Type and hit enter to send message"
                />
              </div>
            </div> */}

            <div className="chat-sent" style={{ margin: "auto" }}>
              {showOutGoingLoader ? (
                <CircularProgress />
              ) : (
                <Fab
                  style={{ color: "green", marginRight: "20px" }}
                  aria-label="Add"
                  onClick={() => this.startCall(selectedUser, "outGoing")}
                >
                  <Call />
                </Fab>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  ChatUsers = () => {
    // const {name, email}=this.props.user;
    var name = this.props.user.name;
    var email = this.props.user.email;
    return (
      <div className="chat-sidenav-main">
        <div className="chat-sidenav-header">
          <div className="chat-user-hd">
            <div
              className="chat-avatar mr-3"
              onClick={() => {
                this.setState({
                  userState: 2
                });
              }}
            >
              <div className="chat-avatar-mode">
                <img
                  id="user-avatar-button"
                  src={require("assets/images/userAvatar/domnic-harris.jpg")}
                  className="rounded-circle size-50"
                  alt=""
                />
                <span className="chat-mode online" />
              </div>
            </div>

            <div className="module-user-info d-flex flex-column justify-content-center">
              <div className="module-title">
                <h5 className="mb-0">{name}</h5>
              </div>
              <div className="module-user-detail">
                <span className="jr-link text-grey">{email}</span>
              </div>
            </div>
          </div>

          <div className="search-wrapper">
            <SearchBox
              placeholder="Search to start new chat"
              value={this.state.searchChatUser}
              onChange={e => {
                console.log(e.target.value);
                this.setState({
                  searchChatUser: e.target.value
                });
              }}
            />
          </div>
        </div>

        <div className="chat-sidenav-content">
          <AppBar position="static" className="no-shadow chat-tabs-header">
            {/* <Typography variant="subtitle1" className="text-center">
            Contacts
          </Typography> */}

            <Tabs
              className="chat-tabs"
              value={this.state.selectedTabIndex}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              style={{ minHeight: "unset" }}
            >
              {/* <Tab label={<IntlMessages id="chat.chatUser" />} /> */}
              {/* <Tab label={<IntlMessages id="chat.contacts" />} /> */}

              <Typography
                style={{ width: "-webkit-fill-available", color: "gray" }}
                variant="subtitle1"
                className="text-center"
              >
                Contacts
              </Typography>
            </Tabs>
          </AppBar>
          {/* <SwipeableViews
            index={this.state.selectedTabIndex}
            onChangeIndex={this.handleChangeIndex}
          > */}
          {/* <CustomScrollbars
              className="chat-sidenav-scroll scrollbar"
              style={{
                height:
                  this.props.width >= 1200
                    ? "calc(100vh - 328px)"
                    : "calc(100vh - 202px)"
              }}
            >
              {this.state.chatUsers.length === 0 ? (
                <div className="p-5">{this.state.userNotFound}</div>
              ) : (
                <ChatUserList
                  chatUsers={this.state.chatUsers}
                  selectedSectionId={this.state.selectedSectionId}
                  onSelectUser={this.onSelectUser.bind(this)}
                />
              )}
            </CustomScrollbars> */}

          <CustomScrollbars
            className="chat-sidenav-scroll scrollbar"
            style={{
              height:
                this.props.width >= 1200
                  ? "calc(100vh - 328px)"
                  : "calc(100vh - 202px)"
            }}
          >
            {this.state.contactList.length === 0 ? (
              <div className="p-5">{this.state.userNotFound}</div>
            ) : (
              <ContactList
                contactList={this.state.contactList.filter(item => {
                  var searchText = this.state.searchChatUser.toLowerCase();
                  return item.name.toLowerCase().includes(searchText); // ||  item.email.toLowerCase().includes(searchText)
                })}
                selectedSectionId={this.state.selectedSectionId}
                onSelectUser={this.onSelectUser.bind(this)}
              />
            )}
          </CustomScrollbars>
          {/* </SwipeableViews> */}
        </div>
      </div>
    );
  };

  onSelectUser = user => {
    this.setState({
      loader: true,
      selectedSectionId: user._id,
      drawerState: this.props.drawerState,
      selectedUser: user,
      conversation: this.state.conversationList.find(
        data => data.id === user._id
      )
    });
    setTimeout(() => {
      this.setState({ loader: false });
    }, 1500);
  };
  showCommunication = () => {
    return (
      <div className="chat-box">
        <div className="chat-box-main">
          {this.state.selectedUser === null ? (
            <div
              className="loader-view"
              style={{ height: "calc(100vh - 120px)" }}
            >
              <i className="zmdi zmdi-comment s-128 text-muted" />
              <h1 className="text-muted">
                {<IntlMessages id="chat.selectUserChat" />}
              </h1>
              <Button
                className="d-block d-xl-none"
                color="primary"
                onClick={this.onToggleDrawer.bind(this)}
              >
                {<IntlMessages id="chat.selectContactChat" />}
              </Button>
            </div>
          ) : (
            this.Communication()
          )}
        </div>
      </div>
    );
  };

  constructor() {
    super();
    this.state = {
      loader: false,
      userNotFound: "No user found",
      drawerState: false,
      selectedSectionId: "",
      selectedTabIndex: 0,
      userState: 1,
      searchChatUser: "",
      contactList: [],
      selectedUser: null,
      message: "",
      chatUsers: users.filter(user => user.recent),
      conversationList: conversationList,
      conversation: null,
      // chat app
      identity: null,
      roomName: "new room",
      roomNameErr: false, // Track error for room name TextField
      previewTracks: null,
      localMediaAvailable: false,
      hasJoinedRoom: false,
      activeRoom: "", // Track the current active room,
      play: false,
      showOutGoingScreen: false,
      showOutGoingLoader: false,
      callType: "",
      showIncomingScreen: false
    };
  }
  handleChange = (event, value) => {
    this.setState({ selectedTabIndex: value });
  };

  handleChangeIndex = index => {
    this.setState({ selectedTabIndex: index });
  };
  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }
  componentDidMount() {
    this.props.receCall();
    if (this.props.getAllStatus === "done") {
      this.setState({
        contactList: this.props.allUsers
      });
    } else {
      this.props.getAllUsers();
    }

    if (this.props.getTokanStatus === "done") {
      const { identity, token } = this.props.tokan;
      this.setState({ identity, token });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.getAllStatus === "done") {
      this.setState({
        contactList: this.props.allUsers
      });
    }
    if (nextProps.incomingCall) {
      this.togglePlay();
      this.setState({
        roomName: nextProps.incomingRoomName,
        showIncomingScreen: true
      });
    }
    if (nextProps.callDeclinestatus === "done") {
      this.leaveRoom();
    }
  }

  audio = new Audio(sound);

  // play Audio
  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    const { incomingCall, callingUser } = this.props;

    const {
      loader,
      userState,
      drawerState,
      hasJoinedRoom,
      showOutGoingScreen,
      selectedUser,
      showOutGoingLoader,
      showIncomingScreen
    } = this.state;
    console.log("showIncomingScreen", showIncomingScreen);
    return (
      <div className="app-wrapper app-wrapper-module">
        <div className="app-module chat-module animated slideInUpTiny animation-duration-3">
          <div className="chat-module-box">
            <div className="d-block d-xl-none">
              {/* {showLocalTrack} */}

              <Drawer
                open={drawerState}
                onClose={this.onToggleDrawer.bind(this)}
              >
                {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
              </Drawer>
            </div>

            <div className="chat-sidenav d-none d-xl-flex">
              {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
            </div>
            {loader ? (
              <div
                className="loader-view w-100"
                style={{ height: "calc(100vh - 120px)" }}
              >
                <CircularProgress />
              </div>
            ) : (
              this.showCommunication()
            )}
          </div>
          {showOutGoingScreen && (
            <OutGoingCall
              selectedUser={selectedUser}
              leaveRoom={this.leaveRoom}
            />
          )}
          {showIncomingScreen && (
            <IncomingCallScreen
              // selectedUser={selectedUser}
              leaveRoom={this.declineCall}
              startCall={this.startCall}
              callingUser={callingUser}
            />
          )}
          {/* <Dialog
            fullScreen
            open={false}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          > */}
            <div className="flex-item">
              <div ref="remoteMedia" className="remoteVideo">
                <div ref="localMedia" className="localVideo" />
                {/* <Fab
                  color="secondary"
                  aria-label="Add"
                  className="endCall"
                  onClick={this.leaveRoom}
                >
                  <CallEnd />
                </Fab> */}
              </div>
            </div>
          {/* </Dialog> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    width: state.settings.width,
    allUsers: state.userReducer.allUsers,
    user: state.userReducer.user,
    getAllStatus: state.userReducer.getAllStatus,
    loader: state.userReducer.loader,
    getTokanStatus: state.chatReducer.getTokanStatus,
    tokan: state.chatReducer.tokan,
    loader: state.chatReducer.loader,
    incomingCall: state.chatReducer.incomingCall,
    incomingRoomName: state.chatReducer.incomingRoomName,
    callingUser: state.chatReducer.callingUser,
    callDeclinestatus: state.chatReducer.callDeclinestatus
  };
};
export default connect(
  mapStateToProps,
  { getAllUsers, sendCall, receCall, declineCall }
)(ChatPanel);
