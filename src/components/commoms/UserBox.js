import React from "react";
import defaultImg from "../../assets/images/default_avatar.png";
import { useSelector } from "react-redux";

const UserBox = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="right-panel-box">
      <div className="right-panel-box-inner">
        <div className="title-block display-flex">
          <div className="avatar">
            <img src={defaultImg} alt="avatar" />
          </div>
          <div className="user-info-panel">
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
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
