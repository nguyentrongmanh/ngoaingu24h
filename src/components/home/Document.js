import React from "react";
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import HomeLayout from "../layout/HomeLayout"
import { Table } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const data = [
	{
		rank: 1,
		name: "700 từ vựng part I",
		publicDate: "23-06-2020",
		size: "15 Mb",
		downloadQuantity: 15
	},
	{
		rank: 2,
		name: "700 từ vựng part I",
		publicDate: "23-06-2020",
		size: "15 Mb",
		downloadQuantity: 15
	},
	{
		rank: 3,
		name: "700 từ vựng part I",
		publicDate: "23-06-2020",
		size: "15 Mb",
		downloadQuantity: 15
	},
	{
		rank: 4,
		name: "700 từ vựng part I",
		publicDate: "23-06-2020",
		size: "15 Mb",
		downloadQuantity: 15
	},
]



const columns = [
	{
		title: 'STT',
		dataIndex: 'rank',
		key: 'rank',
	},
	{
		title: 'Tên tài liệu',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Dung lượng',
		dataIndex: 'size',
		key: 'size',
	},
	{
		title: 'Lượt tải',
		dataIndex: 'downloadQuantity',
		key: 'downloadQuantity',
	},
	{
		title: 'Phát hành',
		dataIndex: 'publicDate',
		key: 'publicDate',
	},
	{
		title: 'Action',
		key: 'operation',
		fixed: 'right',
		width: 100,
		render: (text, record) => (<div>
			<a><FontAwesomeIcon icon={faDownload} /></a>
		</div>)
	},
]

const Document = () => {
	return (
		<div>
			<Header></Header>
			<HomeLayout>
				<div class="content-block-panel">
					<div class="main-block-header-panel">
						<div></div>
						<div class="text-title-block-panel">Tài liệu tham khảo</div>
					</div>
					<div class="main-block-content-panel">
						<Table columns={columns} dataSource={data} />
					</div>
				</div>
			</HomeLayout>
			<Footer></Footer>
		</div>
	);
};

export default Document;