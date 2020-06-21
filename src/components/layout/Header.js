import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faGlobe, faShoppingCart, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Menu, Dropdown } from 'antd';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import avartar from "../../assets/images/default_avatar.png"
import Notification from "../commoms/Notification";
import Logo from "../../assets/images/logo.jpg";

const Header = () => {
	const user = useSelector(state => state.user)
	console.log(user)
	return (
		<header>
			<div className="header-top">
				<div className="container">
					<div className="container-panel">
						<div className="header-top-left">
							<div className="contact">
								<a className="contact-info-link">
									<FontAwesomeIcon icon={faPhone} />
									<span>Hotline:</span>
									<span>0989924488</span>
								</a>
								<a className="contact-info-link">
									<FontAwesomeIcon icon={faEnvelope} />
									<span>Email:</span>
									<span>hotrokythuat.ngoaingu24h@gmail.com</span>
								</a>
							</div>
						</div>
						<div className="header-top-right">
							<div className="event-link">
								<a>Thi thử THPT</a>
							</div>
							<div className="cart-panel">
								<a><FontAwesomeIcon icon={faShoppingCart} /></a>
							</div>
							<div className="notification-panel">
								{user.name !== null ? <Notification></Notification> : null
								}

							</div>
							{user.name === null ? <div>
								<Link to="/login">Đăng nhập</Link>
							</div> : <div><img class="header-avatar" src={avartar} /></div>
							}
						</div>
					</div>
				</div>
			</div>
			<div className="header-second">
				<div className="container">
					<div className="container-panel">
						<div className="header-logo">
							<img src={Logo}></img>
						</div>
						<div id="header-search-panel" className="s-large">
							<input id="header-search-box" name="header-search-box-name" placeholder="Tìm kiếm" value="" />
							<button id="header-search-button">
								<FontAwesomeIcon icon={faSearch} />
							</button>
						</div>
						<div id="header-menu-panel" className="navbar-collapse collapse">
							<div className="item-link home">
								<a href="/">Trang chủ</a>
							</div>
							<div className="item-link hover-categories-panel">
								<a href="/tat-ca-khoa-hoc">Khoá học</a>
							</div>
							<div className="item-link hover-categories-panel">
								<a href="/tin-tuc" onmouseover="onLoadCategoriesNew()">Tin tức</a>
							</div>
							<div className="item-link">
								<a href="/tin-tuc/lien-he">Liên hệ</a>
							</div>
							<div>
								<a href="/kich-hoat-khoa-hoc" id="button-active-course-header">Kích hoạt khoá học</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;