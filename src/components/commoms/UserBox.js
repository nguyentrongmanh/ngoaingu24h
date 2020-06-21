import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCalendarAlt, faUsers, faClipboard } from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../../assets/images/default_avatar.png"


const UserBox = ({ match }) => {
	return (
		<div class="right-panel-box">
			<div class="right-panel-box-inner">
				<div class="title-block display-flex">
					<div class="avatar">
						<img src={defaultImg} />
					</div>
					<div class="user-info-panel">
						<div class="user-name">nhu.nq158294</div>
						<div class="user-email">nhu.nq158294@sis.hust.edu.vn</div>
					</div>
				</div>
				<div class="box-item">
					Điểm kinh nghiệm: 160
				</div>
				<div class="box-item">
					Bài học gần đây: Bài thi online 2: Liên từ và trạng từ liên từ
				</div>
			</div>
		</div>
	);
};

export default UserBox;