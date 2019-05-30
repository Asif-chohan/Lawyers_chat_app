import React from 'react';
import Avatar from '@material-ui/core/Avatar';


function ImageAvatars() {
  return (
    <div className="manage-margin d-flex align-items-center flex-wrap">
      <Avatar className="size-100" alt="Remy Sharp" src={require("assets/images/userAvatar/domnic-harris.jpg")}/>

      <Avatar className="size-80" alt="Remy Sharp" src={require("assets/images/userAvatar/garry-sobars.jpg")}/>

      <Avatar className="size-60" alt="Remy Sharp" src={require("assets/images/userAvatar/stella-johnson.png")}/>

      <Avatar alt="Adelle Charles" src={require("assets/images/userAvatar/man-3.jpg")}/>

      <Avatar className="size-30" alt="Remy Sharp" src={require("assets/images/userAvatar/alex-dolgove.png")}/>
    </div>
  );
}

export default ImageAvatars;