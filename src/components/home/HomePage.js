import React from "react";
import Header from "../layout/Header";
import { HomeCarousel } from "./HomeCarousel";
import Footer from "../layout/Footer";
import { CourseListController } from "./course-list/CourseListController";
import { Switch, Route } from "react-router-dom";
import { CourseDetailController } from "./course-detail/CourseDetailController";
import { Row, Col } from "antd";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Row justify="center" style={{ marginTop: "16px", marginBottom: "16px" }}>
        <Col span={20}>
          <Row justify="center" gutter={16}>
            <Switch>
              <Route path="/course-detail/:id">
                <CourseDetailController />
              </Route>

              <Route path="/my-all-courses">
                <CourseListController />
              </Route>

              <Route path="/">
                <Col span={24}>
                  <HomeCarousel />
                </Col>
                <Col>
                  <CourseListController />
                </Col>
              </Route>
            </Switch>
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
};
