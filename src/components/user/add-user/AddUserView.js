import React, { useState, useEffect } from "react";
import { Form, Input, Radio, Button, Upload, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";

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

export const AddUserView = ({ onSubmit, loading, error }) => {
	const [errors, setErrors] = useState(error);
	const [imageUrl, setImageUrl] = useState();
	useEffect(() => {
		setErrors(error);
	}, [error]);

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
			layout="vertical"
			onFinish={(data) => {
				console.log("data", data);
				onSubmit({ ...data, image: data.image });
			}}
		>
			<Form.Item
				label="Email"
				rules={[{ required: true }]}
				name="email"
				validateStatus={errors && errors["email"] ? "error" : undefined}
				help={errors && errors["email"] ? errors["email"][0] : undefined}
			>
				<Input
					onChange={() => {
						try {
							const { email, ...restErrors } = errors;
							setErrors(restErrors);
						} catch (error) { }
					}}
				/>
			</Form.Item>
			<Form.Item
				label="Mật khẩu"
				rules={[{ required: true }]}
				name="password"
				validateStatus={errors && errors["password"] ? "error" : undefined}
				help={errors && errors["password"] ? errors["password"][0] : undefined}
			>
				<Input
					onChange={() => {
						try {
							const { password, ...restErrors } = errors;
							setErrors(restErrors);
						} catch (error) { }
					}}
				/>
			</Form.Item>
			<Form.Item label="Họ và tên" rules={[{ required: true }]} name="name">
				<Input />
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
					name="image"
					className="avatar-uploader"
					showUploadList={false}
					beforeUpload={beforeUpload}
					onChange={handleChange}
				>
					{imageUrl ? (
						<img src={imageUrl} alt="avatar" style={{ width: "300px", height: "240px" }} />
					) : (
							uploadButton
						)}
				</Upload>
			</Form.Item>
			<Form.Item label="Tuổi" name="age">
				<Input datatype="number" />
			</Form.Item>
			<Form.Item label="Số điện thoại" name="phone">
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
