import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Button, Input } from "antd";

export const RegisterView = ({ onSubmit, loading, error }) => {
  const [errors, setErrors] = useState(error);
  useEffect(() => {
    setErrors(error);
  }, [error]);
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
            <Form.Item
              className="auth-form__item"
              name="email"
              validateStatus={errors && errors["email"] ? "error" : undefined}
              help={errors && errors["email"] ? errors["email"][0] : undefined}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                onChange={() => {
                  const { email, ...restErrors } = errors;
                  setErrors(restErrors);
                }}
                prefix={
                  <MailOutlined
                    type="mail"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              validateStatus={
                errors && errors["password"] ? "error" : undefined
              }
              help={
                errors && errors["password"] ? errors["password"][0] : undefined
              }
              className="auth-form__item"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                onChange={() => {
                  const { password, ...restErrors } = errors;
                  setErrors(restErrors);
                }}
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
            <Form.Item
              validateStatus={
                errors && errors["password_confirmation"] ? "error" : undefined
              }
              help={
                errors && errors["password_confirmation"]
                  ? errors["password_confirmation"][0]
                  : undefined
              }
              className="auth-form__item"
              name="password_confirmation"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                onChange={() => {
                  const { password_confirmation, ...restErrors } = errors;
                  setErrors(restErrors);
                }}
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
            <Form.Item
              validateStatus={errors && errors["name"] ? "error" : undefined}
              help={errors && errors["name"] ? errors["name"][0] : undefined}
              className="auth-form__item"
              name="name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined
                    type="user"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                onChange={() => {
                  const { name, ...restErrors } = errors;
                  setErrors(restErrors);
                }}
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
