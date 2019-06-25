import React from "react";
import userImg from "../../../../assets/images/user.png";
const UserCell = ({ onSelectUser, selectedSectionId, user, onlineUsers }) => {
  console.log("online Array", onlineUsers);
  let getUser = onlineUsers.filter(item => item === user._id);
  let status = "";
  if (getUser.length > 0) {
    status = true;
  } else {
    status = false;
  }
  console.log("status", status);
  return (
    <div
      className={`chat-user-item ${
        selectedSectionId === user._id ? "active" : ""
      }`}
      onClick={() => onSelectUser(user)}
    >
      <div className="chat-user-row row">
        <div className="chat-avatar col-xl-2 col-3">
          <div className="chat-avatar-mode">
            <img
              src={userImg}
              className="rounded-circle size-40"
              alt="Abbott"
            />
            {status && <span className={`chat-mode smallcal online`} />}
          </div>
        </div>

        <div className="chat-contact-col col-xl-10 col-9">
          <div className="h4 name">{user.name}</div>
          {/* <div className="chat-info-des">{user.mood.substring(0, 30) + "..."}</div> */}
        </div>
      </div>
    </div>
  );
};

export default UserCell;
