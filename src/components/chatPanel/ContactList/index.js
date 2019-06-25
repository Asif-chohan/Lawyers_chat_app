import React from "react";
import UserCell from "./UserCell/index";

const ContactList = ({
  onSelectUser,
  selectedSectionId,
  contactList,
  onlineUsers
}) => {
  return (
    <div className="chat-user">
      {contactList.length > 1 ? (
        contactList.map((user, index) => (
          <UserCell
            key={index}
            user={user}
            selectedSectionId={selectedSectionId}
            onSelectUser={onSelectUser}
            onlineUsers={onlineUsers}
          />
        ))
      ) : (
        <div className="p-5 text-center">User not found</div>
      )}
    </div>
  );
};

export default ContactList;
