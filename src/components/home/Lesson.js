import React from "react";
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import Content from "../layout/Content"
import ReactPlayer from 'react-player'
import Documentation from "./lesson/Documentation";
import Comment from "../commoms/Comment"

const Lesson = ({ match }) => {
	return (
		<div>
			<Header></Header>
			<Content>
				<div class="content-block-panel">
					<div class="main-block-header-panel">
						<div></div>
						<div class="text-title-block-panel">Video</div>
					</div>
					<div class="main-block-content-panel">
						<ReactPlayer className="lesson-player" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
					</div>
				</div>
				<Documentation></Documentation>
				<Comment></Comment>
			</Content>
			<Footer></Footer>
		</div>
	);
};

export default Lesson;