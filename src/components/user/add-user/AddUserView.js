import React from "react";
import { Form, Input, Radio, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { UploadAvatar } from "./UploadAvatar";

export const AddUserView = ({ onSubmit, loading, error }) => {
  return (
    <Form
      layout="vertical"
      onFinish={(data) => {
        console.log("data", data);
        onSubmit(data);
      }}
    >
      <Form.Item
        label="Email"
        rules={[{ required: true }]}
        name="email"
        validateStatus={error && error.email ? "error" : null}
        help={error ? error.email[0] : null}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Mật khẩu" rules={[{ required: true }]} name="password">
        <Input />
      </Form.Item>
      <Form.Item label="Họ và tên" rules={[{ required: true }]} name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Ảnh đại diện">
        <UploadAvatar />
      </Form.Item>
      <Form.Item label="Tuổi" name="age">
        <Input datatype="number" />
      </Form.Item>
      <Form.Item label="Công ty" name="company">
        <Input />
      </Form.Item>
      <Form.Item label="Quyền" name="role" initialValue={0}>
        <Radio.Group>
          <Radio value={0}>Người dùng</Radio>
          <Radio value={1}>Admin</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Mô tả bản thân" name="intro">
        <TextArea autoSize={{ minRows: 3 }} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" loading={loading}>
          Thêm
        </Button>
      </Form.Item>
    </Form>
  );
};
