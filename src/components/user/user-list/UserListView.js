import React from "react";
import { Table, Popconfirm, Button, Row, notification } from "antd";
import { apiClient } from "../../../api";

export const UserListView = ({ data, loading }) => {
  return (
    <Table
      rowKey="id"
      loading={loading}
      columns={[
        { title: "ID", dataIndex: "id" },
        {
          title: "Họ và tên",
          dataIndex: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Tuổi",
          dataIndex: "age",
        },
        {
          title: "SĐT",
          dataIndex: "phone",
        },
        {
          title: "Công ty",
          dataIndex: "company",
        },
        {
          title: "Quyền",
          dataIndex: "role",
          render(value) {
            return <p> {value === 1 ? "Admin" : "Người dùng"}</p>;
          },
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
