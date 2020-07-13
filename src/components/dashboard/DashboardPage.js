import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "../../styles/dashboard.css";
import { Link, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { UserListPage } from "../user/user-list/UserListPage";
import { AddUserController } from "../user/add-user/AddUserController";
import { EditUserController } from "../user/edit-user/EditUserController";
import { ListeningPage } from "../listening/listening-list/ListeningPage";
import { AddListeningController } from "../listening/add-listening/AddListeningController";
import { ReadingPage } from "../reading/reading-list/ReadingPage";
import { AddReadingController } from "../reading/add-reading/AddReadingController";
import logo from "../../assets/images/logo.jpg";
import { useSelector } from "react-redux";
import { CourseDetailDashboardPage } from "./CourseDetailDashboardPage";
import { CoursePage } from "../course/CoursePage";
import { AddCourseController } from "../course/add-course/AddCourseController";

const { Header, Content } = Layout;

export const DashboardPage = () => {
	const { pathname } = useLocation();

	const user = useSelector((state) => state.user);
	useEffect(() => {
		let isMounted = true;
		if ((isMounted && !user) || user.role !== 1) {
			// history.push("/");
		}
		return () => {
			isMounted = false;
		};
	});
	return (
		<>
			<Layout>
				<Header className="dashboard-header">
					<Link to="/">
						<img className="logo" src={logo} alt="logo" />
					</Link>
					<Menu
						className="dashboard-top-menu"
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={[pathname]}
					>
						<Menu.Item key="/dashboard/users">
							<Link to="/dashboard/users">Danh sách người dùng</Link>
						</Menu.Item>
						<Menu.Item key="/dashboard/listenings">
							<Link to="/dashboard/listenings">Listening</Link>
						</Menu.Item>
						<Menu.Item key="/dashboard/readings">
							<Link to="/dashboard/readings">Reading</Link>
						</Menu.Item>
						<Menu.Item key="/dashboard/courses">
							<Link to="/dashboard/courses">Khóa học</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Layout>
					<Layout style={{ padding: "0 24px 24px" }}>
						<Breadcrumb style={{ margin: "16px 0" }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}
						>
							<Switch>
								<Route path="/dashboard/users" component={UserListPage} />
								<Route path="/dashboard/listenings" component={ListeningPage} />
								<Route path="/dashboard/readings" component={ReadingPage} />
								<Route path="/dashboard/courses">
									<CoursePage />
								</Route>
								<Route
									path="/dashboard/user/add"
									component={AddUserController}
								/>
								<Route
									path="/dashboard/user/edit/:id"
									component={EditUserController}
								/>
								<Route
									path="/dashboard/listening/add"
									component={AddListeningController}
								/>
								<Route
									path="/dashboard/course/add"
									component={AddCourseController}
								/>
								<Route
									path="/dashboard/reading/add"
									component={AddReadingController}
								/>
								<Route
									path="/dashboard/course-detail/:courseId"
									component={CourseDetailDashboardPage}
								/>
								<Redirect to="/dashboard/users" />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</>
	);
};
