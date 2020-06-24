import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Menu, Dropdown } from "antd";
import UserApi from "../../api/UserApi";
import defaultAvatar from "../../assets/images/default_avatar.png";
import adminAvatar from "../../assets/images/admin.PNG";
const Notification = () => {
  const res = UserApi.getNotification();
  const notificationList = res.data.notifications;
  const notificationMenu = () => {
    return (
      <Menu>
        <Menu.Item key="1">Thông báo</Menu.Item>
        <Menu.Divider />
        {notificationList.map((notification) => {
          const imageSrc =
            notification.from === "Admin" ? adminAvatar : defaultAvatar;
          return (
            <div
              className={
                notification.seenFlg ? "seen-notification" : "new-notification"
              }
            >
              <div class="noti-avatar">
                <img src={imageSrc} alt="noti" />
              </div>
              <div class="noti-content">
                <div>
                  <b>{notification.from}</b>
                  {notification.content}
                </div>
                <div class="noti-date">{notification.created}</div>
              </div>
            </div>
          );
        })}
      </Menu>
    );
  };

  return (
    <Dropdown overlay={notificationMenu} trigger={["click"]}>
      <a href="/">
        <FontAwesomeIcon icon={faBell} />
      </a>
    </Dropdown>
  );
};

export default Notification;
