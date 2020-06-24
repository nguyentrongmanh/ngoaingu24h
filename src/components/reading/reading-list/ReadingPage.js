import React from "react";
import { Row, Col, Button } from "antd";
import { ReadingListController } from "./ReadingListController";
import { Link } from "react-router-dom";

export const ReadingPage = () => {
  return (
    <Row gutter={[8, 16]}>
      <Col span={24}>
        <Button>
          <Link to="/dashboard/reading/add">Thêm câu hỏi mới</Link>
        </Button>
      </Col>
      <Col span={24}>
        <ReadingListController />
      </Col>
    </Row>
  );
};
