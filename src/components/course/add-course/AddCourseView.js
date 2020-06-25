import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { TeacherListController } from "../../teacher-list/TeacherListController";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  return false;
}

export const AddCourseView = ({ onSubmit, loading, error }) => {
  const [imageUrl, setImageUrl] = useState();
  const [form] = Form.useForm();
  const handleChange = (info) => {
    console.log("info", info);
    getBase64(info.file, (imageUrl) => setImageUrl(imageUrl));
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={(data) => {
        console.log("data", data);
        onSubmit({ ...data, image: data.image });
      }}
    >
      <Form.Item
        label="Tên khóa học"
        rules={[{ required: true }]}
        name="name"
        validateStatus={error && error.email ? "error" : null}
        help={error ? error.email[0] : null}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Ngôn ngữ" rules={[{ required: true }]} name="language">
        <Input />
      </Form.Item>
      <Form.Item
        label="Giáo viên"
        rules={[{ required: true }]}
        name="teacher_id"
      >
        <TeacherListController
          onSelect={(value) => {
            form.setFieldsValue({ teacher_id: value });
          }}
        />
      </Form.Item>

      <Form.Item
        label="Ảnh đại diện"
        name="image"
        valuePropName="file"
        getValueFromEvent={(file) => {
          return file.file;
        }}
      >
        <Upload
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
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
