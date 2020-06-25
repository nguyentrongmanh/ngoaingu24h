import React from "react";
import { Row, Col } from "antd";
import { LessonListController } from "./LessonListController";
import { AddLessonController } from "../add-lesson/AddLessonController";
import { useParams } from "react-router-dom";

export const LessonListPage = () => {
  const { courseId } = useParams();

  return (
    <Row gutter={[8, 16]}>
      <Col span={24}>
        <AddLessonController courseId={courseId} />
      </Col>
      <Col span={24}>
        <LessonListController />
      </Col>
    </Row>
  );
};
