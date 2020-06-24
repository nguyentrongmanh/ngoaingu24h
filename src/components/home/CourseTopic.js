import React from "react";
import CourseApi from "../../api/CourseApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faLightbulb,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CourseTopic = () => {
  const res = CourseApi.getTopics();
  const topicList = res.data;

  return (
    <div className="content-block-panel">
      <div className="main-block-header-panel">
        <div></div>
        <div className="text-title-block-panel">Nội dung bài học</div>
      </div>
      <div className="main-block-content-panel">
        {topicList.map((topic, index) => (
          <div className="topic-item-panel" key={index}>
            <div className="topic-item-left-panel">{index + 1}</div>
            <div className="topic-item-right-panel">
              <div className="topic-icon">
                {topic.type == "Lesson" ? (
                  <FontAwesomeIcon icon={faPlay} />
                ) : null}
                {topic.type == "Exercise" ? (
                  <FontAwesomeIcon icon={faLightbulb} />
                ) : null}
                {topic.type == "Test" ? (
                  <FontAwesomeIcon icon={faClock} />
                ) : null}
              </div>
              <div className="topic-info">
                {topic.type == "Lesson" ? (
                  <Link to="/lesson">{topic.name}</Link>
                ) : null}
                {topic.type == "Exercise" ? (
                  <Link to="/execise">{topic.name}</Link>
                ) : null}
                {topic.type == "Test" ? (
                  <Link to="/test">{topic.name}</Link>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTopic;
