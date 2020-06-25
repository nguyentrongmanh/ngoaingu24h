import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faLightbulb,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";

export const LessonListCardView = ({ data }) => {
  const history = useHistory();
  return (
    <>
      {data &&
        data.map((lesson) => {
          const { name, id } = lesson;
          return (
            <div className="content-block-panel">
              <div className="main-block-header-panel">
                <div></div>
                <div className="text-title-block-panel">{name}</div>
              </div>
              <div className="main-block-content-panel">
                <Link to={`/lesson/${id}`}>
                  <div className="topic-item-panel">
                    <div className="topic-item-left-panel" />
                    <div className="topic-item-right-panel">
                      <div className="topic-icon">
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                      <div className="topic-info">Bài giảng</div>
                    </div>
                  </div>
                </Link>
                {lesson.exams.map((exam) => {
                  const { exam_type, name } = exam;
                  return (
                    <div
                      className="topic-item-panel"
                      onClick={() => {
                        if (exam_type === 1) {
                          return history.push(`/lesson/test/:${id}`);
                        }
                        return history.push(`/lesson/home-work/:${id}`);
                      }}
                    >
                      <div className="topic-item-left-panel" />
                      <div className="topic-item-right-panel">
                        <div className="topic-icon">
                          {exam_type !== 1 ? (
                            <FontAwesomeIcon icon={faLightbulb} />
                          ) : (
                            <FontAwesomeIcon icon={faClock} />
                          )}
                        </div>
                        <div className="topic-info">
                          <Link to="/lesson">{name}</Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};
