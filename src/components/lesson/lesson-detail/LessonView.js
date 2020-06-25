import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import ReactPlayer from "react-player";
import Documentation from "../../home/lesson/Documentation";
import Comment from "../../commoms/Comment";
import { Row, Col } from "antd";
import UserBox from "../../commoms/UserBox";
import Utinities from "../../commoms/Utinities";

export const LessonView = ({ lesson = {} }) => {
  return (
    <div>
      <Header />
      <Row justify="center" style={{ marginTop: "16px" }}>
        <Col span={22}>
          <Row>
            <Col span={18}>
              <div class="content-block-panel">
                <div class="main-block-header-panel">
                  <div></div>
                  <div class="text-title-block-panel">{lesson.name}</div>
                </div>
                <div class="main-block-content-panel">
                  <ReactPlayer
                    className="lesson-player"
                    url={lesson.video_url}
                  />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <UserBox />
              <Utinities />
            </Col>
            <Col span={24}>
              <Documentation />
            </Col>
            <Col span={24}>
              <Comment />
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer></Footer>
    </div>
  );
};
