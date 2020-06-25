import React from "react";
import { Table, Popconfirm, Button, Row, notification, Typography } from "antd";
import { apiClient } from "../../../api";
import ReactPlayer from "react-player";
import { AddExerciseController } from "../../exercise/add-exercise/AddExerciseController";

export const LessonListTableView = ({ data, loading }) => {
  return (
    <Table
      title={() => <Typography.Title>Danh sách bài học</Typography.Title>}
      tableLayout="fixed"
      rowKey="id"
      loading={loading}
      expandable={{
        expandedRowRender: (record) => (
          <Table
            bordered
            rowKey="id"
            dataSource={record.exams}
            columns={[
              {
                title: "ID",
                dataIndex: "id",
              },
              {
                title: "Loại",
                dataIndex: "exam_type",
                render(value) {
                  return <>{value === 1 ? "Bài kiểm tra" : "Bài tập"}</>;
                },
              },
              {
                title: "Tên",
                dataIndex: "name",
              },
            ]}
          />
        ),
      }}
      columns={[
        { title: "ID", dataIndex: "id" },
        { title: "Tên", dataIndex: "name" },
        {
          title: "Video",
          dataIndex: "video_url",
          render: (value) => {
            return <ReactPlayer className="video_lesson_prev" url={value} />;
          },
        },
        { title: "Mô tả", dataIndex: "description" },
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
                    apiClient.get(`/v1/question/delete/${value}`).then(() => {
                      notification.success({ message: "Xóa thành công" });
                      setTimeout(() => {
                        document.location.reload();
                      }, 1500);
                    });
                  }}
                  title="Bạn có chắc chắn muốn xóa câu hỏi này？"
                  okText="Có"
                  cancelText="Không"
                >
                  <Button danger>Xóa</Button>
                </Popconfirm>
                <Button>Sửa</Button>
                <AddExerciseController lessonId={value} />
              </Row>
            );
          },
        },
      ]}
      dataSource={data}
    />
  );
};
