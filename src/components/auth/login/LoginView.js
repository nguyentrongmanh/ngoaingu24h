import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

import { LockOutlined, MailOutlined } from "@ant-design/icons";

export const LoginView = ({ onSubmit, loading }) => {
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
          <div className="auth-header__title">ĐĂNG NHẬP HỆ THỐNG</div>
        </div>
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
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item className="auth-form__item">
            <Checkbox>Nhớ đăng nhập</Checkbox>
            <Button
              loading={loading}
              htmlType="submit"
              type="primary"
              className="auth-form-button"
            >
              Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item className="auth-form__item">
            <Link to="/register">Đăng ký!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
