import React from "react";
import { Row, Col, Button } from "antd";
import { UserListController } from "./UserListController";
import { Link } from "react-router-dom";

export const UserListPage = () => {
  return (
    <Row gutter={[8, 16]}>
      <Col span={24}>
        <Button>
          <Link to="/dashboard/user/add">Thêm người dùng mới</Link>
        </Button>
      </Col>
      <Col span={24}>
        <UserListController />
      </Col>
    </Row>
  );
};
