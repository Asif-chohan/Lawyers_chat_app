import React from 'react';


const UserDetailCard = () => {
  return (
    <div className="jr-card user-detail-card">
      <div className="user-img-container">
        <img className="user-img" alt="userAvatar" src={require("assets/images/userAvatar/domnic-harris1.jpg")}/>
      </div>

      <div className="jr-card-body d-flex flex-column justify-content-center">
        <h4 className="mb-0">Domin Harris </h4>
        <span className="d-block jr-fs-13 mb-1">@h.dominc</span>
        <span className="d-block jr-fs-sm text-grey">EOM </span>
      </div>
    </div>
  );
};

export default UserDetailCard;
