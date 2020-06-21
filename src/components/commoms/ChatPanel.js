import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faMinus, faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import defaultAvatar from "../../assets/images/default_avatar.png";


const onlineUsers = [
	{
		id: 1,
		name: "Đặng Văn Thắng"
	},
	{
		id: 2,
		name: "Nguyễn Thị Sâm"
	},
	{
		id: 3,
		name: "Đặng Thái Quân"
	},
]

const ChatPanel = () => {
	const [openList, setOpenList] = useState(false);
	const [openChatRoom, setOpenChatRoom] = useState(false);

	return (
		<React.Fragment>

			<div class="chat-box-panel">
				<button onClick={() => setOpenList(!openList)} class="chat-box-btn">
					<FontAwesomeIcon icon={faCommentDots} />
					<div>Trò chuyện trực tuyến</div>
				</button>
				{openList ?
					<div class="member-chat-list">
						{
							onlineUsers.map(user => (
								<button class="member-chat-item">
									<div class="member-chat-avatar">
										<img src={defaultAvatar} />
									</div>
									<div class="member-chat-name">
										<div>{user.name}</div>
										<div class="icon-online"></div>
									</div>
								</button>
							))
						}
					</div> : null
				}
			</div>
			{openList ?
				<div class="chat-room-list">
					<div class="chat-room">
						<div class="chat-room-header">
							<div class="name">Đặng Văn Thắng</div>
							<div class="chat-room-header-btn">
								<FontAwesomeIcon onClick={() => { }} icon={faMinus} />
								<FontAwesomeIcon onClick={() => { }} icon={faTimes} />
							</div>
						</div>
						<div class="chat-room-message">

						</div>
						<div class="chat-room-input">
							<input class="form-control" />
							<FontAwesomeIcon className="send-message-icon" onClick={() => { }} icon={faPaperPlane} />
						</div>
					</div>
				</div> : null
			}
		</React.Fragment>
	);
};

export default ChatPanel;