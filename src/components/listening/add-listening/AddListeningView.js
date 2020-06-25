import React from "react";
import { Form, Radio, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const AddListeningView = ({ onSubmit, loading, error }) => {
  return (
    <Form
      layout="vertical"
      onFinish={(data) => {
        onSubmit({ ...data });
      }}
    >
      <Form.Item
        valuePropName="file"
        label="Audio"
        getValueFromEvent={(file) => {
          console.log("file", file);
          return file.file;
        }}
        rules={[{ required: true }]}
        name="audio"
        validateStatus={error && error.email ? "error" : null}
        help={error ? error.email[0] : null}
      >
        <Upload
          accept=".mp3"
          beforeUpload={() => {
            // Prevent upload
            return false;
          }}
        >
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        {/* <input type="file" id="img" accept="mp3/*"></input> */}
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
