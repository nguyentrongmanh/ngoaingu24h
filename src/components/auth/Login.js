import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from "react-router-dom"
import userApi from "../../api/UserApi"
import { useDispatch } from "react-redux"
import { signin } from "../../reducers/action/UserAction"

const SigninView = () => {
	let history = useHistory();

	const dispatch = useDispatch();

	const login = () => {
		const res = userApi.signin();
		console.log(res)
		if (res.status == 200) {
			dispatch(signin(res.data.user));
			history.push("/")
		}
		return;
	}
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
			<div className="auth-container">
				<div className="auth-header">
					<div className="auth-header__title">ĐĂNG NHẬP HỆ THỐNG</div>
				</div>
				<Form className="auth-form">
					<Form.Item className="auth-form__item">
						<Input
							prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Email"
							name="email"
						/>
					</Form.Item>
					<Form.Item className="auth-form__item">
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
							placeholder="Password"
							name="password"
						/>
					</Form.Item >
					<Form.Item className="auth-form__item">
						<Checkbox>Nhớ đăng nhập</Checkbox>
						<Button onClick={() => { login(); return; }} type="primary" className="auth-form-button">
							Đăng nhập
          				</Button>
					</Form.Item>
					<Form.Item className="auth-form__item">
						<Link to="/register" >Đăng ký!</Link>
					</Form.Item>
				</Form>
			</div>
		</div >
	);
};

export default SigninView;
