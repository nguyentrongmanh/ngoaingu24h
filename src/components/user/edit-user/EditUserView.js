import React, { useState, useEffect } from "react";
import { Form, Input, Radio, Button, Upload, message, Spin } from "antd";
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

export const EditUserView = ({ userDetail, onSubmit, loading, error }) => {
	const [errors, setErrors] = useState(error);
	const [imageUrl, setImageUrl] = useState();
	console.log(userDetail)
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
		<>
			{loading && <Spin />}
			{!loading && <Form
				layout="vertical"
				onFinish={(data) => {
					console.log("data", data);
					onSubmit({ ...data, image: data.image });
				}}
				initialValues={{
					name: userDetail.name,
					age: userDetail.age,
					intro: userDetail.intro,
					company: userDetail.company,
					role: userDetail.role,
					phone: userDetail.phone,
				}}
			>
				<Form.Item
					label="Email"
				>
					<Input
						value={userDetail.email}
						readOnly
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
						<uploadButton></uploadButton>
					</Upload>

				</Form.Item>
				{imageUrl ? (
					<img src={imageUrl} alt="avatar" style={{ width: "300px", height: "240px" }} />
				) : userDetail.avatarUrl ? (<img src={`${userDetail.avatarUrl}`} alt="avatar" style={{ width: "300px", height: "240px" }} />) : (
					null
				)}
				<Form.Item label="Tuổi" name="age">
					<Input datatype="number" value={userDetail.age} />
				</Form.Item>
				<Form.Item label="Số điện thoại" name="phone">
					<Input datatype="number" value={userDetail.phone} />
				</Form.Item>
				<Form.Item label="Công ty" name="company">
					<Input value={userDetail.company} />
				</Form.Item>
				<Form.Item label="Quyền" name="role">
					<Radio.Group value={userDetail.role}>
						<Radio value={0}>Người dùng</Radio>
						<Radio value={1}>Admin</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="Mô tả bản thân" name="intro">
					<TextArea autoSize={{ minRows: 3 }} />
				</Form.Item>
				<Form.Item>
					<Button htmlType="submit" type="primary" loading={loading}>
						Submit
        		</Button>
				</Form.Item>
			</Form >}
	,
		</>
	);
};
