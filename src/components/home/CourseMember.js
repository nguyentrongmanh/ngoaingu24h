import React from "react";
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import HomeLayout from "../layout/HomeLayout"
import { Table } from 'antd';
import CourseApi from "../../api/CourseApi";

const columns = [
	{
		title: 'Họ Tên',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Ngày Tham Gia',
		dataIndex: 'joinDate',
		key: 'joinDate',
	},
	{
		title: 'Thời gian còn lại',
		dataIndex: 'leftTime',
		key: 'leftTime',
	},
	{
		title: 'Truy cập',
		dataIndex: 'lastActive',
		key: 'lastActive',
	},
	{
		title: 'Trạng thái',
		dataIndex: 'status',
		key: 'status',
	}
]


const CourseMember = () => {
	const res = CourseApi.getCourseMember()
	const members = res.data.members
	return (
		<div>
			<Header></Header>
			<HomeLayout>
				<div class="content-block-panel">
					<div class="main-block-header-panel">
						<div></div>
						<div class="text-title-block-panel">Danh sách học viên của khóa học</div>
					</div>
					<div class="main-block-content-panel">
						<Table columns={columns} dataSource={members} />
					</div>
				</div>
			</HomeLayout>
			<Footer></Footer>
		</div>
	);
};

export default CourseMember;