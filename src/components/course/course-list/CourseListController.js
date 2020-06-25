import React, { useState, useEffect } from "react";
import { CourseListCardView } from "./CourseListCardView";
import { Typography, Button, Row, Col, Divider } from "antd";
import { apiClient } from "../../../api";
import { CourseTableView } from "./CourseTableView";

export const CourseListController = ({ viewType }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/v1/class/list")
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {viewType && viewType === "table" ? (
        <CourseTableView loading={loading} data={data} />
      ) : (
        <Row justify="center">
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography.Title>Các khóa học tiếng anh</Typography.Title>
          </Col>
          <Divider className="custom-divider" />
          <CourseListCardView
            loading={loading}
            data={showAll ? data : data.slice(0, 4)}
          />
          {!showAll && data && (
            <Button
              onClick={() => {
                setShowAll(true);
              }}
            >
              Xem tất cả
            </Button>
          )}
          {showAll && data && (
            <Button
              onClick={() => {
                setShowAll(false);
              }}
            >
              Thu gọn
            </Button>
          )}
        </Row>
      )}
    </>
  );
};
