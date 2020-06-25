import React from "react";
import { Table, Popconfirm, Button, Row, notification, Typography } from "antd";
import { apiClient } from "../../../api";
import { Link } from "react-router-dom";

export const CourseTableView = ({ data, loading }) => {
  return (
    <Table
      title={() => <Typography.Title>Danh sách khóa học</Typography.Title>}
      tableLayout="fixed"
      rowKey="id"
      loading={loading}
      columns={[
        { title: "ID", dataIndex: "id" },
        {
          title: "Tên",
          dataIndex: "name",
        },
        {
          title: "Ảnh",
          dataIndex: "class_img_url",
          width: "250px",
          render(value) {
            return (
              <img style={{ width: "100%" }} src={value} alt="class-thumnail" />
            );
          },
        },
        {
          title: "Ngôn ngữ",
          dataIndex: "language",
        },
        {
          title: "Số lượng bài học",
          dataIndex: "lesson_quantity",
        },
        {
          title: "Giáo viên",
          dataIndex: "teacher",
          render(value) {
            return <Typography.Text>{value.name}</Typography.Text>;
          },
        },
        {
          title: "Mô tả",
          dataIndex: "description",
          ellipsis: true,
        },
        {
          title: "Ngày tạo",
          dataIndex: "created_at",
        },
        {
          title: "Hành động",
          dataIndex: "id",
          render: (value) => {
            return (
              <Row>
                <Popconfirm
                  onConfirm={() => {
                    apiClient.get(`/v1/class/delete/${value}`).then(() => {
                      notification.success({ message: "Xóa thành công" });
                      setTimeout(() => {
                        document.location.reload();
                      }, 1500);
                    });
                  }}
                  title="Bạn có chắc chắn muốn xóa khóa học này？"
                  okText="Có"
                  cancelText="Không"
                >
                  <Button danger>Xóa</Button>
                </Popconfirm>
                <Button>Sửa</Button>
                <Button type="ghost">
                  <Link to={`/dashboard/course-detail/${value}`}>Chi tiết</Link>
                </Button>
              </Row>
            );
          },
        },
      ]}
      dataSource={data}
    />
  );
};
