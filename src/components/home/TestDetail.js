import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import Content from "../layout/Content"
import CourseApi from "../../api/CourseApi";
import { Radio } from "antd";
const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const TestDetail = () => {
  const res = CourseApi.getQuestions();
  const questionList = res.data.readings;
  return (
    <div>
      <Header></Header>
      {/* <Content> */}
      {questionList.map((question, index) => (
        <div class="content-block-panel">
          <div class="main-block-content-panel">
            <div class="top-question">
              <div class="question-index">Câu {index + 1}</div>
              <div class="question-content">{question.main_questions}</div>
            </div>
            <Radio.Group>
              <Radio style={radioStyle} value={1}>
                A.{question.option_a}
              </Radio>
              <Radio style={radioStyle} value={2}>
                B.{question.option_b}
              </Radio>
              <Radio style={radioStyle} value={3}>
                C.{question.option_c}
              </Radio>
              <Radio style={radioStyle} value={4}>
                D.{question.option_d}
              </Radio>
            </Radio.Group>
          </div>
        </div>
      ))}
      {/* </Content> */}
      <Footer></Footer>
    </div>
  );
};

export default TestDetail;
