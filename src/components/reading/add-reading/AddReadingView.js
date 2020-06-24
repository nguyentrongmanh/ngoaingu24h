import React from "react";
import { Form, Radio, Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

export const AddReadingView = ({ onSubmit, loading, error }) => {
  return (
    <Form
      layout="vertical"
      onFinish={(data) => {
        console.log("data", data);
        onSubmit({ ...data, type: 1 });
      }}
    >
      <Form.Item label="Câu hỏi" rules={[{ required: true }]} name="content">
        <TextArea />
      </Form.Item>
      <Form.Item
        label="Phương án A"
        rules={[{ required: true }]}
        name="option_a"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phương án B"
        rules={[{ required: true }]}
        name="option_b"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phương án C"
        rules={[{ required: true }]}
        name="option_c"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phương án D"
        rules={[{ required: true }]}
        name="option_d"
      >
        <Input />
      </Form.Item>

      <Form.Item label="Câu trả lời" name="answer" initialValue={1}>
        <Radio.Group>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" loading={loading}>
          Thêm
        </Button>
      </Form.Item>
    </Form>
  );
};
