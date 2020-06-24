import React from "react";
import {
  Descriptions,
  Carousel,
  Typography,
  Button,
  Row,
  Spin,
  Col,
} from "antd";

export const CourseDetailView = ({ course = {}, loading }) => {
  const {
    name,
    teacher,
    language,
    class_img_url,
    lesson_quantity,
    description,
  } = course;
  return (
    <>
      {loading && <Spin />}
      {!loading && (
        <Row>
          <Col span={18}>
            <Carousel autoplay>
              <div>
                <img
                  className="course-detail-banner"
                  src={class_img_url}
                  alt="banner1"
                />
              </div>
            </Carousel>
          </Col>
          <Col span={6} />
          <Col>
            <Typography.Title>{name}</Typography.Title>
            <Descriptions title="Mô tả">
              <Descriptions.Item>{description}</Descriptions.Item>
            </Descriptions>
            <Descriptions title="Thông tin khóa học">
              <Descriptions.Item label="Tên giáo viên">
                {teacher && teacher.name}
              </Descriptions.Item>
              <Descriptions.Item label="Ngôn ngữ giảng dạy">
                {language}
              </Descriptions.Item>
              <Descriptions.Item label="Số lượng bài học">
                {lesson_quantity}
              </Descriptions.Item>
            </Descriptions>
            <Button type="primary">Đăng kí</Button>
          </Col>
        </Row>
      )}
      ,
    </>
  );
};
