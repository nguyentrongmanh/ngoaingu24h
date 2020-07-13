import React, { useState, useEffect } from "react";
import { EditUserView } from "./EditUserView";
import { apiClient } from "../../../api";
import { useParams, useHistory } from "react-router-dom";
import { notification } from "antd";


export const EditUserController = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	const [userDetail, setUserDetail] = useState([]);
	const history = useHistory();
	const { id } = useParams();
	useEffect(() => {
		setLoading(true);
		apiClient
			.get(`/v1/user/detail/${id}`)
			.then(({ data }) => {
				setUserDetail(data.data);
			})
			.catch((error) => console.log("error", error))
			.finally(() => {
				setLoading(false);
			});
	}, [id]);
	const handleSubmit = (data) => {
		setLoading(true);

		const formData = new FormData();
		// eslint-disable-next-line no-unused-vars
		for (const key in data) {
			formData.append(key, data[key]);
		}
		apiClient({
			method: "post",
			url: `/v1/user/edit/${id}`,
			data: formData,
		})
			.then((data) => {
				notification.success({ message: "Thay đôi thông tin thành công", duration: 1.5 });
				setTimeout((params) => {
					history.push("/dashboard/users");
				}, 1500);
			})
			.catch((error) => {
				console.log("error", error.response);
				setError(error.response.data.error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<EditUserView userDetail={userDetail} onSubmit={handleSubmit} loading={loading} error={error} />
	);
};
