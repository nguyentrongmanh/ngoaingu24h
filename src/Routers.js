import React from 'react';
import Lesson from "./components/home/Lesson";
import CourseTopic from "./components/home/CourseTopic";
import Test from "./components/home/Test";
import TestDetail from "./components/home/TestDetail";
import Document from "./components/home/Document";
import CourseMember from "./components/home/CourseMember";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Route, BrowserRouter } from "react-router-dom";
const Routers = ({ orders }) => {
	return (
		<BrowserRouter>
			<Route exact path="/lesson" component={Lesson} />
			<Route exact path="/" component={CourseTopic} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/test" component={Test} />
			<Route exact path="/test/detail" component={TestDetail} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/document" component={Document} />
			<Route exact path="/course-member" component={CourseMember} />
		</BrowserRouter>
	);
}
export default Routers;
