import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import avartar from "../../assets/images/default_avatar.png";
import Notification from "../commoms/Notification";
import Logo from "../../assets/images/logo.jpg";
import { isEmpty } from "lodash";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="container-panel">
            <div className="header-top-left">
              <div className="contact">
                <a className="contact-info-link" href="/">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>Hotline:</span>
                  <span>0989924488</span>
                </a>
                <a className="contact-info-link" href="/">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Email:</span>
                  <span>hotrokythuat.ngoaingu24h@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="header-top-right">
              <div className="event-link">
                <a href="/">Thi thử THPT</a>
              </div>
              {user.role === 1 && (
                <div className="event-link">
                  <Link to="/dashboard">Trang quản trị</Link>
                </div>
              )}
              <div className="cart-panel">
                <a href="/">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </div>
              <div className="notification-panel">
                {user.name !== null ? <Notification></Notification> : null}
              </div>
              {isEmpty(user) ? (
                <div>
                  <Link to="/login">Đăng nhập</Link>
                </div>
              ) : (
                <>
                  <div>
                    <img className="header-avatar" src={avartar} alt="avatar" />
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="event-link"
                    onClick={() => {
                      localStorage.removeItem("token");
                      document.location.reload();
                    }}
                  >
                    Đăng xuất
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="header-second">
        <div className="container">
          <div className="container-panel">
            <div className="header-logo">
              <Link to="/">
                <img src={Logo} alt="logo"></img>
              </Link>
            </div>
            <div id="header-search-panel" className="s-large">
              <input
                id="header-search-box"
                name="header-search-box-name"
                placeholder="Tìm kiếm"
              />
              <button id="header-search-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div id="header-menu-panel" className="navbar-collapse collapse">
              <div className="item-link home">
                <Link to="/">Trang chủ</Link>
              </div>
              {!isEmpty(user) ? (
                <div className="item-link hover-categories-panel">
                  <Link to={`/my-all-courses/${user.id}`}>
                    Khoá học của tôi
                  </Link>
                </div>
              ) : null}
              <div className="item-link hover-categories-panel">
                <a href="/tin-tuc" onMouseOver={() => {}}>
                  Tin tức
                </a>
              </div>
              <div className="item-link">
                <a href="/tin-tuc/lien-he">Liên hệ</a>
              </div>
              <div>
                <a href="/kich-hoat-khoa-hoc" id="button-active-course-header">
                  Kích hoạt khoá học
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
