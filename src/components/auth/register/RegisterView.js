import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";

export const RegisterView = ({ onSubmit, loading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="auth-container">
        <div className="auth-header">
          <div className="auth-header__title">Đăng ký tài khoản</div>
        </div>
        <div className="auth-content">
          <Form
            className="auth-form"
            onFinish={(data) => {
              onSubmit(data);
            }}
          >
            <Form.Item className="auth-form__item" name="email">
              <Input
                prefix={
                  <MailOutlined
                    type="mail"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item className="auth-form__item" name="password">
              <Input
                prefix={
                  <LockOutlined
                    type="lock"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item className="auth-form__item" name="password_confirmation">
              <Input
                prefix={
                  <LockOutlined
                    type="lock"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                type="password"
                placeholder="Xác nhận lại mật khẩu"
              />
            </Form.Item>
            <Form.Item className="auth-form__item" name="name">
              <Input
                prefix={
                  <UserOutlined
                    type="user"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="Họ và tên"
              />
            </Form.Item>
            <div className="auth-form__action">
              <Button
                loading={loading}
                block
                type="primary"
                htmlType="submit"
                className="auth-form-button"
              >
                Đăng kí
              </Button>
              <Link to="/login" className="auth-form__action">
                Về trang Đăng nhập
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
