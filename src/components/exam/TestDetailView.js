import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Radio, Col, Row, Result, Button } from "antd";
import UserBox from "../commoms/UserBox";
import Utinities from "../commoms/Utinities";
import Documentation from "../home/lesson/Documentation";
import Comment from "../commoms/Comment";
import { SubmitExamController } from "./submit-exam/SubmitExamController";
import { Link } from "react-router-dom";
import ReactCountdownClock from "react-countdown-clock";
const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

export const TestDetailView = ({ exam = {} }) => {
  const [score, setScore] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const { questions = [], time } = exam;

  return (
    <div>
      <Header />
      <Row justify="center" style={{ marginTop: "16px" }}>
        <Col span={22}>
          <div>
            <Row>
              <Col span={18}>
                {!showResult &&
                  questions &&
                  questions.map((question, index) => (
                    <div className="content-block-panel" key={question.id}>
                      <div className="main-block-content-panel">
                        <div className="top-question">
                          <div className="question-index">Câu {index + 1}</div>
                          <div className="question-content">
                            {question.type === 1 ? (
                              question.content
                            ) : (
                              <audio controls>
                                <source
                                  src={question.audio_url}
                                  type="audio/mpeg"
                                />
                              </audio>
                            )}
                          </div>
                        </div>
                        <Radio.Group
                          onChange={(e) => {
                            if (question.answer === e.target.value) {
                              setScore([...score, question.id]);
                            } else {
                              setScore(
                                score.filter((score) => score !== question.id)
                              );
                            }
                          }}
                        >
                          <Radio style={radioStyle} value={1}>
                            {question.type === 1
                              ? `A.${question.option_a}`
                              : "A"}
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            {question.type === 1
                              ? `A.${question.option_a}`
                              : "B"}
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            {question.type === 1
                              ? `A.${question.option_a}`
                              : "C"}
                          </Radio>
                          <Radio style={radioStyle} value={4}>
                            {question.type === 1
                              ? `A.${question.option_a}`
                              : "D"}
                          </Radio>
                        </Radio.Group>
                      </div>
                    </div>
                  ))}

                {!showResult && (
                  <SubmitExamController
                    onResult={(data) => {
                      console.log("data", data);
                      setShowResult(true);
                    }}
                    score={`${score.length}/${questions.length}`}
                  />
                )}
                {showResult && (
                  <Result
                    status="success"
                    title={`Điểm bài thi của bạn là: ${score.length}/${questions.length}`}
                    extra={[
                      <Button type="primary" key="console">
                        <Link to="/">Trang chủ</Link>
                      </Button>,
                    ]}
                  />
                )}
              </Col>
              <Col span={6}>
                {time && (
                  <ReactCountdownClock
                    seconds={time * 60}
                    color="#c21b17"
                    alpha={0.9}
                    size={150}
                  />
                )}

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
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};
