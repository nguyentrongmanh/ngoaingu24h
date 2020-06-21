import React from "react";
import { Row, Col } from 'antd';
import Utinities from "../commoms/Utinities"
import UserBox from "../commoms/UserBox"
import LessonSider from "../commoms/LessonSider"
import ChatPanel from "../commoms/ChatPanel";

const Content = (props) => {
	return (
		<div class="container content">
			<Row>
				<Col span={18}>{props.children}</Col>
				<Col span={6}>
					<LessonSider></LessonSider>
					<UserBox></UserBox>
					<Utinities></Utinities>
				</Col>
				<ChatPanel></ChatPanel>
			</Row>
		</div>
	);
};

export default Content;