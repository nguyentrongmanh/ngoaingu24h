import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { CourseListController } from "./course-list/CourseListController";

export const CoursePage = () => {
  return (
    <Row gutter={[8, 16]}>
      <Col span={24}>
        <Button>
          <Link to="/dashboard/course/add">Thêm khóa học mới</Link>
        </Button>
      </Col>
      <Col span={24}>
      <CourseListController viewType="table" />
      </Col>
    </Row>
  );
};
