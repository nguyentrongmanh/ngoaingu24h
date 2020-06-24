import React from "react";
import { Table, Popconfirm, Button, Row, notification } from "antd";
import { apiClient } from "../../../api";

export const ReadingListView = ({ data, loading }) => {
  return (
    <Table
      rowKey="id"
      loading={loading}
      columns={[
        { title: "ID", dataIndex: "id" },
        {
          title: "Câu hỏi",
          dataIndex: "content",
        },
        {
          title: "A",
          dataIndex: "option_a",
        },
        {
          title: "B",
          dataIndex: "option_b",
        },
        {
          title: "C",
          dataIndex: "option_c",
        },
        {
          title: "D",
          dataIndex: "option_d",
        },
        {
          title: "Câu trả lời",
          dataIndex: "answer",
          render: (value) => {
            switch (value) {
              case 1:
                return "A";
              case 2:
                return "B";
              case 3:
                return "C";
              default:
                return "D";
            }
          },
        },
        {
          title: "Giải thích",
          dataIndex: "explain",
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
                    apiClient.get(`/v1/user/delete/${value}`).then(() => {
                      notification.success({ message: "Xóa thành công" });
                      setTimeout(() => {
                        document.location.reload();
                      }, 1500);
                    });
                  }}
                  title="Bạn có chắc chắn muốn xóa người dùng này？"
                  okText="Có"
                  cancelText="Không"
                >
                  <Button danger>Xóa</Button>
                </Popconfirm>
                <Button>Sửa</Button>
              </Row>
            );
          },
        },
      ]}
      dataSource={data}
    />
  );
};
