import React from "react";
import { Row, Col } from "antd";
import { CourseDetailController } from "../course/course-detail/CourseDetailController";
import { LessonListPage } from "../lesson/lesson-list/LessonListDashboardPage";

export const CourseDetailDashboardPage = () => {
  return (
    <Row>
      <Col span={8}>
        <CourseDetailController />
      </Col>
      <Col span={16}>
        <LessonListPage />
      </Col>
    </Row>
  );
};
