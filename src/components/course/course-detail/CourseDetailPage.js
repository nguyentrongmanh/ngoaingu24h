import React from "react";
import { useSelector } from "react-redux";
import { Tabs, Row, Col } from "antd";
import { CourseDetailController } from "./CourseDetailController";
import { isEmpty } from "lodash";
import UserBox from "../../commoms/UserBox";
import Utinities from "../../commoms/Utinities";
import { LessonListController } from "../../lesson/lesson-list/LessonListController";
import { useRouteMatch, useParams, useHistory } from "react-router-dom";
const { TabPane } = Tabs;
export const CourseDetailPage = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const { courseId } = useParams();
  const { path } = useRouteMatch();
  return (
    <>
      {isEmpty(user) ? (
        <CourseDetailController />
      ) : (
        <Tabs
          defaultActiveKey={path}
          onChange={(activeKey) => {
            history.replace(activeKey.replace(":courseId", courseId));
          }}
        >
          <TabPane tab="Thông tin khóa học" key="/course-detail/info/:courseId">
            <CourseDetailController />
          </TabPane>
          <TabPane
            style={{ width: "100%" }}
            tab="Danh sách bài học"
            key="/course-detail/lessons/:courseId"
          >
            <>
              <Row>
                <Col span={18}>
                  <LessonListController viewType="for-user" />
                </Col>
                <Col span={6}>
                  <UserBox />
                  <Utinities />
                </Col>
              </Row>
            </>
          </TabPane>
        </Tabs>
      )}
    </>
  );
};
