import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faCalendarAlt,
  faUsers,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Utinities = ({ match }) => {
  return (
    <div className="right-panel-box">
      <div className="right-panel-box-inner">
        <div className="title-block">
          <label>TIỆN ÍCH</label>
        </div>
        <div className="box-item">
          <Link to="/document">
            <FontAwesomeIcon className="utinities-icon" icon={faCopy} />
            Tài liệu <span className="badge">104</span>
          </Link>
        </div>
        <div className="box-item">
          <Link to="/course-member">
            <FontAwesomeIcon className="utinities-icon" icon={faUsers} />
            Thành viên <span className="badge">104</span>
          </Link>
        </div>
        <div className="box-item">
          <a href="/tai-lieu-5129873437753344">
            <FontAwesomeIcon className="utinities-icon" icon={faCalendarAlt} />
            Lịch học <span className="badge">104</span>
          </a>
        </div>
        <div className="box-item">
          <a href="/tai-lieu-5129873437753344">
            <FontAwesomeIcon className="utinities-icon" icon={faClipboard} />
            Ghi chú
          </a>
        </div>
      </div>
    </div>
  );
};

export default Utinities;
