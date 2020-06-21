import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCalendarAlt, faUsers, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"
const Utinities = ({ match }) => {
	return (
		<div class="right-panel-box">
			<div class="right-panel-box-inner">
				<div class="title-block">
					<label>TIỆN ÍCH</label>
				</div>
				<div class="box-item">
					<Link to="/document">
						<FontAwesomeIcon class="utinities-icon" icon={faCopy} />
						Tài liệu  <span class="badge">104</span>
					</Link>
				</div>
				<div class="box-item">
					<Link to="/course-member">
						<FontAwesomeIcon class="utinities-icon" icon={faUsers} />
						Thành viên  <span class="badge">104</span>
					</Link>
				</div>
				<div class="box-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon class="utinities-icon" icon={faCalendarAlt} />
						Lịch học  <span class="badge">104</span>
					</a>
				</div>
				<div class="box-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon class="utinities-icon" icon={faClipboard} />
						Ghi chú
					</a>
				</div>
			</div>
		</div>
	);
};

export default Utinities;