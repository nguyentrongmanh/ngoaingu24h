import axios from 'axios'
import config from "./config"

const apiClient = axios.create({
	baseURL: config.baseApiUrl,
	headers: {}
})

const signin =
{
	status: 200,
	data: {
		user: {
			id: 1,
			account: "nhu.nq158294",
			email: "nhu.nq158294@sis.hust.edu.vn"
		}
	}
}

const getNotification = {
	status: 200,
	data: {
		notifications: [
			{
				id: 1,
				content: "Bài tập về nhà sắp đến hạn nộp",
				from: "Admin",
				avatarSrc: "",
				created: "2020-06-15",
				seenFlg: true
			},
			{
				id: 2,
				content: "Chào hè với siêu ưu đãi khóa học mới",
				created: "2020-06-15",
				from: "Admin",
				avatarSrc: "",
				seenFlg: true
			},
			{
				id: 3,
				content: "Đã bình luận trong video Tổng ôn 90 ngày",
				created: "2020-06-15",
				from: "Nguyễn Văn Trọng",
				avatarSrc: "",
				seenFlg: false
			},
			{
				id: 4,
				content: "Cùng cô Mai Phương chinh phục toeic 900+",
				created: "2020-06-15",
				from: "Admin",
				avatarSrc: "",
				seenFlg: true
			},
		]
	}
}

export default {
	signin: () => (signin),
	getNotification: () => (getNotification)
}
