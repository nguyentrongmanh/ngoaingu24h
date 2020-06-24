import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faMinus,
  faTimes,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import defaultAvatar from "../../assets/images/default_avatar.png";

const onlineUsers = [
  {
    id: 1,
    name: "Đặng Văn Thắng",
  },
  {
    id: 2,
    name: "Nguyễn Thị Sâm",
  },
  {
    id: 3,
    name: "Đặng Thái Quân",
  },
];

const ChatPanel = () => {
  const [openList, setOpenList] = useState(false);
  // const [openChatRoom, setOpenChatRoom] = useState(false);

  return (
    <React.Fragment>
      <div className="chat-box-panel">
        <button onClick={() => setOpenList(!openList)} className="chat-box-btn">
          <FontAwesomeIcon icon={faCommentDots} />
          <div>Trò chuyện trực tuyến</div>
        </button>
        {openList ? (
          <div className="member-chat-list">
            {onlineUsers.map((user) => (
              <button className="member-chat-item">
                <div className="member-chat-avatar">
                  <img src={defaultAvatar} alt="avatar" />
                </div>
                <div className="member-chat-name">
                  <div>{user.name}</div>
                  <div className="icon-online"></div>
                </div>
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {openList ? (
        <div className="chat-room-list">
          <div className="chat-room">
            <div className="chat-room-header">
              <div className="name">Đặng Văn Thắng</div>
              <div className="chat-room-header-btn">
                <FontAwesomeIcon onClick={() => {}} icon={faMinus} />
                <FontAwesomeIcon onClick={() => {}} icon={faTimes} />
              </div>
            </div>
            <div className="chat-room-message"></div>
            <div className="chat-room-input">
              <input className="form-control" />
              <FontAwesomeIcon
                classNameName="send-message-icon"
                onClick={() => {}}
                icon={faPaperPlane}
              />
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ChatPanel;
