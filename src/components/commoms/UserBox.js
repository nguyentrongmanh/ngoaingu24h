import React from "react";
import defaultImg from "../../assets/images/default_avatar.png";

const UserBox = ({ match }) => {
  return (
    <div className="right-panel-box">
      <div className="right-panel-box-inner">
        <div className="title-block display-flex">
          <div className="avatar">
            <img src={defaultImg} alt="avatar" />
          </div>
          <div className="user-info-panel">
            <div className="user-name">nhu.nq158294</div>
            <div className="user-email">nhu.nq158294@sis.hust.edu.vn</div>
          </div>
        </div>
        <div className="box-item">Điểm kinh nghiệm: 160</div>
        <div className="box-item">
          Bài học gần đây: Bài thi online 2: Liên từ và trạng từ liên từ
        </div>
      </div>
    </div>
  );
};

export default UserBox;
