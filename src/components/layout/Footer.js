import React from "react";
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ match }) => {
	return (
		<footer>
			<div className="container">
				<Row>
					<Col span={12}>
						<div className="mb-20">
							<FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt} />
							Tầng 5, Số 52 Chùa Hà, Quan Hoa, Cầu Giấy, Hà Nội
						</div>
						<div className="mb-20">
							<FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
							hotrokythuat.ngoaingu24h@gmail.com
						</div>
						<div className="mb-20">
							<FontAwesomeIcon className="footer-icon" icon={faPhone} />
							0989924488
						</div>
						<div>
							<span>
								Công ty TNHH Giáo dục Wordington<br />
								MST: 0108433619 do Sở kế hoạch và đầu tư Thành phố Hà Nội cấp lần đầu ngày 14/09/2018<br />
								Địa chỉ: Tầng 5, số 52 phố Chùa Hà, Phường Quan Hoa, Quận Cầu Giấy, Thành phố Hà Nội
							</span>
						</div>
					</Col>
					<Col span={12}>
						<Row>
							<Col span={12}>
								<div>
									<p><strong>TIỆN ÍCH</strong></p>
									<p><a href="/">Trang chủ</a></p>
									<p><a href="/tin-tuc/gioi-thieu">Giới thiệu</a></p>
									<p><a href="/tat-ca-khoa-hoc">Khoá học</a></p>
									<p><a href="/tin-tuc">Tin tức</a></p>
									<p><a href="/tin-tuc/lien-he">Liên hệ</a></p>
								</div>
							</Col>
							<Col span={12}>
								<div>
									<div className="follow" >
									</div>
									<div className="policy_style">
										<p><strong>CÁC CHÍNH SÁCH</strong></p>
										<p><a target="_blank" href="/chinh-sach-chung">Chính sách chung</a></p>
										<p><a target="_blank" href="/chinh-sach-bao-mat-thong-tin">Chính sách bảo mật thông tin</a></p>
										<p>
											<a target="_blank" href="/tin-tuc/huong-dan-mua-hang">
												Hướng dẫn mua hàng
											</a>
										</p>
										<p><a target="_blank" href="/tin-tuc/huong-dan-kich-hoat-khoa-hoc">Hướng dẫn kích hoạt khóa học</a></p>
										<p><a target="_blank" href="/tin-tuc/chinh-sach-hoan-tra-hoc-phi">Chính sách hoàn trả học phí</a></p>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</footer>
	);
};

export default Footer;