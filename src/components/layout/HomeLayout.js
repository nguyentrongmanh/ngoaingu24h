import React from "react";
import { Row, Col } from 'antd';
import Utinities from "../commoms/Utinities"
import UserBox from "../commoms/UserBox"

const HomeLayout = (props) => {
	return (
		<div class="container content">
			<Row>
				<Col span={18}>{props.children}</Col>
				<Col span={6}>
					<UserBox></UserBox>
					<Utinities></Utinities>
				</Col>
			</Row>
		</div>
	);
};

export default HomeLayout;