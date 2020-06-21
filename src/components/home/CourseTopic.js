import React from "react";
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import Content from "../layout/Content"
import CourseApi from "../../api/CourseApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faLightbulb, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CourseTopic = () => {
	const res = CourseApi.getTopics();
	const topicList = res.data;

	return (
		<div>
			<Header></Header>
			<Content>
				<div class="content-block-panel">
					<div class="main-block-header-panel">
						<div></div>
						<div class="text-title-block-panel">Nội dung bài học</div>
					</div>
					<div class="main-block-content-panel">
						{
							topicList.map((topic, index) => (
								<div class="topic-item-panel">
									<div class="topic-item-left-panel">{index + 1}</div>
									<div class="topic-item-right-panel">
										<div class="topic-icon">
											{
												topic.type == "Lesson" ? <FontAwesomeIcon icon={faPlay} /> : null
											}
											{
												topic.type == "Exercise" ? <FontAwesomeIcon icon={faLightbulb} /> : null
											}
											{
												topic.type == "Test" ? <FontAwesomeIcon icon={faClock} /> : null
											}
										</div>
										<div class="topic-info">
											{
												topic.type == "Lesson" ? <Link to="/lesson">{topic.name}</Link> : null
											}
											{
												topic.type == "Exercise" ? <Link to="/execise">{topic.name}</Link> : null
											}
											{
												topic.type == "Test" ? <Link to="/test">{topic.name}</Link> : null
											}
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</Content>
			<Footer></Footer>
		</div>
	);
};

export default CourseTopic;