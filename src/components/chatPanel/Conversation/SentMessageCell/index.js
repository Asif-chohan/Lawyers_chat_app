import React from "react";
import moment from "moment";
const SentMessageCell = ({ conversation }) => {
  return (
    <div className="d-flex flex-nowrap chat-item flex-row-reverse">
      <img
        className="rounded-circle avatar size-40 align-self-end"
        src={require("assets/images/userAvatar/domnic-harris.jpg")}
        alt={conversation.name}
      />

      <div className="bubble jambo-card">
        {conversation.msg === "Call" ? (
          <div className="message">
            {conversation.msg} {moment(conversation.callTime).format("hh:mm")}
          </div>
        ) : (
          <div className="message">{conversation.msg}</div>
        )}
        <div className="time text-muted text-right mt-2">
          {moment(conversation.startTime).format("dd/mm/yy")}
        </div>
      </div>
    </div>
  );
};

export default SentMessageCell;
