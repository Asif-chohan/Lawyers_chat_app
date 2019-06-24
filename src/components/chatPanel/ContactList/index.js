import React from 'react';
import UserCell from "./UserCell/index";

const ContactList = ({onSelectUser, selectedSectionId, contactList}) => {
  return (
    <div className="chat-user">
      { contactList.length > 1 ? contactList.map((user, index) =>
        <UserCell key={index} user={user} selectedSectionId={selectedSectionId} onSelectUser={onSelectUser}/>
      ) : <div className="p-5 text-center">User not found</div>}
    </div>
  )
};

export default ContactList;