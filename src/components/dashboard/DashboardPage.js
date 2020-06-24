import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "../../styles/dashboard.css";
import {
  Link,
  Route,
  Switch,
  Redirect,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";
import { UserListPage } from "../user/user-list/UserListPage";
import { AddUserController } from "../user/add-user/AddUserController";
import { ListeningPage } from "../listening/listening-list/ListeningPage";
import { AddListeningController } from "../listening/add-listening/AddListeningController";
import { ReadingPage } from "../reading/reading-list/ReadingPage";
import { AddReadingController } from "../reading/add-reading/AddReadingController";
import logo from "../../assets/images/logo.jpg";
import { useSelector } from "react-redux";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const DashboardPage = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const user = useSelector((state) => (state) => state.user);
  useEffect(() => {
    let isMounted = true;
    if (!user || user.role !== 1) {
      history.push("/");
    }
    return () => {
      isMounted = false;
    };
  });
  return (
    <Layout>
      <Header className="dashboard-header">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]}>
          <Menu.Item key="/dashboard/users">
            <Link to="/dashboard/users">Danh sách người dùng</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/listenings">
            <Link to="/dashboard/listenings">Listening</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/readings">
            <Link to="/dashboard/readings">Reading</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
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
              <Route path="/dashboard/user/add" component={AddUserController} />
              <Route
                path="/dashboard/listening/add"
                component={AddListeningController}
              />
              <Route
                path="/dashboard/reading/add"
                component={AddReadingController}
              />
              <Redirect to="/dashboard/users" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
