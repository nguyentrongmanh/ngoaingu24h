import React, { useState, useEffect } from "react";
import { CourseListCardView } from "./CourseListCardView";
import { Typography, Button, Row, Col, Divider } from "antd";
import { apiClient } from "../../../api";
import { CourseTableView } from "./CourseTableView";
import { useParams } from "react-router-dom";

export const MyCoursesController = ({ viewType }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const { userId } = useParams();
  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/v1/user/get_user_class/${userId}`)
      .then(({ data }) => {
        console.log("data", data);
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);
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
          {!showAll && data && data[0] && (
            <Button
              onClick={() => {
                setShowAll(true);
              }}
            >
              Xem tất cả
            </Button>
          )}
          {showAll && data && data[0] && (
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
