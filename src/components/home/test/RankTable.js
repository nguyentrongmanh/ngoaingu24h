import React from "react";
import { Table } from "antd";

const data = [
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
  {
    rank: 1,
    name: "Huỳnh Nguyệt",
    testDate: "23-06-2020",
    testResult: "10/10",
    time: "5m5s",
  },
];

const columns = [
  {
    title: "STT",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "Họ Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ngày thi",
    dataIndex: "testDate",
    key: "testDate",
  },
  {
    title: "Kết quả",
    dataIndex: "testResult",
    key: "testResult",
  },
  {
    title: "Thời gian làm bài",
    dataIndex: "time",
    key: "time",
  },
];

const RankTable = () => {
  return (
    <div class="content-block-panel">
      <div class="main-block-header-panel">
        <div></div>
        <div class="text-title-block-panel">Bảng Xếp Hạng</div>
      </div>
      <div class="main-block-content-panel">
        <div class="display-flex">
          <select class="form-control w-280">
            <option value="2">Sắp xếp theo điểm cao nhất</option>
            <option value="3">Sắp xếp theo điểm thấp nhất</option>
            <option value="0">Sắp xếp theo thời gian mới nhất</option>
            <option value="1">Sắp xếp theo thời gian cũ nhất</option>
          </select>
          <select class="form-control w-280">
            <option value="15">Hiển thị 15 dòng</option>
            <option value="30">Hiển thị 30 dòng</option>
            <option value="50">Hiển thị 50 dòng</option>
            <option value="100">Hiển thị 100 dòng</option>
          </select>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default RankTable;
