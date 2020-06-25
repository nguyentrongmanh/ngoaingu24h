import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import { Row, Col } from "antd";
import UserBox from "../commoms/UserBox";
import Utinities from "../commoms/Utinities";
import Documentation from "../home/lesson/Documentation";
import Footer from "../layout/Footer";
import Comment from "../commoms/Comment";

export const ExamView = ({ exam }) => {
  const { time, questions = [], id } = exam;
  return (
    <>
      <Header />
      <Row justify="center" style={{ marginTop: "16px" }}>
        <Col span={22}>
          <Row>
            <Col span={18}>
              <div className="content-block-panel">
                <div className="main-block-header-panel">
                  <div></div>
                  <div className="text-title-block-panel">Thông tin chung</div>
                </div>
                <div className="main-block-content-panel">
                  <div className="row-info-panel">
                    <div className="gwt-Label">Số câu hỏi</div>
                    <div className="gwt-HTML">{`${questions.length} câu`}</div>
                  </div>
                  <div className="row-info-panel">
                    <div className="gwt-Label">Điều kiện qua (% đúng)</div>
                    <div className="gwt-HTML">10%</div>
                  </div>
                  {time && (
                    <div className="row-info-panel">
                      <div className="gwt-Label">Thời gian làm bài</div>
                      <div className="gwt-HTML">{`${time} phút`}</div>
                    </div>
                  )}
                  <div className="row-info-panel">
                    <div className="gwt-Label">Số lần tạm dừng</div>
                    <div className="gwt-HTML">0/3</div>
                  </div>
                  <div className="row-info-panel">
                    <div className="gwt-Label">Số lần làm lại</div>
                    <div className="gwt-HTML">0/10</div>
                  </div>
                  <div className="row-info-panel">
                    <div className="gwt-Label">Số người đã tham gia</div>
                    <div className="gwt-HTML">1122</div>
                  </div>
                  <div className="end-row-buttons-panel">
                    <div>
                      <Link to={`/lesson/test/do/${id}`} className="main-btn">
                        Làm bài
                      </Link>
                    </div>
                  </div>
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

      <Footer />
    </>
  );
};
