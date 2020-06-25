import React from "react";
import { useSelector } from "react-redux";
import { Tabs, Row, Col } from "antd";
import { CourseDetailController } from "./CourseDetailController";
import { isEmpty } from "lodash";
import LessonListCardView from "../../lesson/lesson-list/LessonListCardView";
import UserBox from "../../commoms/UserBox";
import Utinities from "../../commoms/Utinities";
import { LessonListController } from "../../lesson/lesson-list/LessonListController";
const { TabPane } = Tabs;
export const CourseDetailPage = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {isEmpty(user) ? (
        <CourseDetailController />
      ) : (
        <Tabs>
          <TabPane tab="Thông tin khóa học" key="1">
            <CourseDetailController />
          </TabPane>
          <TabPane tab="Danh sách bài học" key="2">
            <Row>
              <Col span={18}>
                <LessonListController viewType="for-user" />
              </Col>
              <Col span={6}>
                <UserBox />
                <Utinities />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      )}
    </div>
  );
};
