import React from "react";
import { Row, Col, Button } from "antd";
import { ListeningListController } from "./ListeningListController";
import { Link } from "react-router-dom";

export const ListeningPage = () => {
  return (
    <Row gutter={[8, 16]}>
      <Col span={24}>
        <Button>
          <Link to="/dashboard/listening/add">Thêm câu hỏi mới</Link>
        </Button>
      </Col>
      <Col span={24}>
        <ListeningListController />
      </Col>
    </Row>
  );
};
