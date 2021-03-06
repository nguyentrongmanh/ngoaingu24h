import React from "react";
import { Table, Popconfirm, Button, Row, notification } from "antd";
import { apiClient } from "../../../api";

export const ListeningListView = ({ data, loading, onSelect }) => {
  const handleSelectedRowChange = (selectedRowKeys) => {
    onSelect(selectedRowKeys);
  };
  return (
    <Table
      rowSelection={
        onSelect
          ? {
              onChange: handleSelectedRowChange,
            }
          : undefined
      }
      rowKey="id"
      loading={loading}
      columns={[
        { title: "ID", dataIndex: "id" },
        {
          title: "Audio",
          dataIndex: "audio_url",
          render: (value) => {
            return (
              <audio controls>
                <source src={value} type="audio/mpeg" />
              </audio>
            );
          },
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
              </Row>
            );
          },
        },
      ]}
      dataSource={data}
    />
  );
};
