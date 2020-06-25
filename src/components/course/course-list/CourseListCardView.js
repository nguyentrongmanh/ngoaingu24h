import React from "react";
import { Card, Empty, Row, Col, Typography, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const CourseListCardView = ({ data, loading }) => {
  const user = useSelector((state) => state.user);
  return (
    <div style={{ width: "100%" }}>
      <Row justify="center">
        {loading && (
          <Col className="custom-spin">
            <Spin />
          </Col>
        )}
      </Row>
      {!data && !loading && <Empty />}
      <Row gutter={[16, 16]}>
        {data &&
          data.map((course) => {
            const { id, name, description, class_img_url } = course;
            return (
              <Col key={id} span={6}>
                <Card
                  style={{ height: "400px" }}
                  cover={
                    <img
                      alt="course"
                      src={class_img_url}
                      style={{ height: "200px" }}
                    />
                  }
                  actions={[
                    <Button>
                      <Link
                        to={
                          !user
                            ? `/course-detail/${id}`
                            : `/course-detail/info/${id}`
                        }
                      >
                        Xem chi tiết
                      </Link>
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={name}
                    description={
                      <Typography.Paragraph ellipsis={{ rows: 2 }}>
                        {description}
                      </Typography.Paragraph>
                    }
                  />
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
