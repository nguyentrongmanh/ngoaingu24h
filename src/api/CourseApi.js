import axios from 'axios'
import config from "./config"

const apiClient = axios.create({
	baseURL: config.baseApiUrl,
	headers: {}
})

const getQuestions =
{
	status: 200,
	data: {
		readings: [
			{
				main_questions: "___for the money management seminar will be forwarded to all the managers tomorrow.",
				option_a: "Invite",
				option_b: "Inviting",
				option_c: "Invitation",
				option_d: "Invitations",
				answer: "A",
			},
			{
				main_questions: "___for the money management seminar will be forwarded to all the managers tomorrow.",
				option_a: "Invite",
				option_b: "Inviting",
				option_c: "Invitation",
				option_d: "Invitations",
				answer: "A",
			},
			{
				main_questions: "___for the money management seminar will be forwarded to all the managers tomorrow.",
				option_a: "Invite",
				option_b: "Inviting",
				option_c: "Invitation",
				option_d: "Invitations",
				answer: "A",
			}
		]
	}
}

const getTopics = {
	status: 200,
	data: [
		{
			index: 1,
			type: "Lesson",
			name: "(Part 5-6) Sentence Structure- Các thành phần cơ bản của câu"
		},
		{
			index: 1,
			type: "Test",
			name: "Các Thành phần cơ bản của câu"
		},
		{
			index: 1,
			type: "Exercise",
			name: "Bài tập bổ trợ các Thành phần cơ bản của câu"
		},
	]
}

const getTopicComment = {
	status: 200,
	data: {
		comments: [
			{
				id: 1,
				comment: "Sao tải phần tài liệu ko đc cô nhỉ ?",
				username: "Trưng Thị Ngọc Diễm",
				userId: "abcd",
				publishTime: "2020-06-15 05:50",
				replies: [
					{
						comment: "Ấn mũi tên tải xuống sẽ đc nhé",
						username: "Admin",
						userId: "admin",
						publishTime: "2020-06-15 05:50",
					},
					{
						comment: "Dễ mà",
						username: "Admin",
						userId: "abcd",
						publishTime: "2020-06-15 05:50",
					}
				]
			},
			{
				id: 2,
				comment: "Ad ơi gia hạn giúp em với ạ",
				username: "Nguyễn Quang Thắng",
				userId: "abcd",
				publishTime: "2020-06-15 05:50",
				replies: [
					{
						comment: "Ok nhé",
						username: "Admin",
						userId: "admin",
						publishTime: "2020-06-15 05:50",
					},
					{
						comment: "tks",
						username: "Nguyễn Quang Thắng",
						userId: "abcd",
						publishTime: "2020-06-15 05:50",
					}
				]
			},
		]
	}
}


const getCourseMember =
{
	status: 200,
	data: {
		members: [
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
			{
				name: "Huỳnh Nguyệt",
				joinDate: "23-06-2020",
				leftTime: "177 ngày",
				lastActive: "26-03-2020",
				status: "Đã tham gia"
			},
		]
	}
}


export default {
	getQuestions: () => (getQuestions),
	getTopics: () => (getTopics),
	getTopicComment: () => (getTopicComment),
	getCourseMember: () => (getCourseMember)
}
