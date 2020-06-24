import React from "react";
import { Row, Col } from 'antd';
import Utinities from "../commoms/Utinities"
import UserBox from "../commoms/UserBox"
import ChatPanel from "../commoms/ChatPanel";

const HomeLayout = (props) => {
	return (
		<div className="container content">
			<Row>
				<Col span={18}>{props.children}</Col>
				<Col span={6}>
					<UserBox></UserBox>
					<Utinities></Utinities>
				</Col>
				<ChatPanel></ChatPanel>
			</Row>
		</div>
	);
};

export default HomeLayout;