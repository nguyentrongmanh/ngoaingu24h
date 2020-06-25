import React from "react";
import CourseApi from "../../api/CourseApi";
import defaltAvatar from "../../assets/images/default_avatar.png";

const Documentation = () => {
  const res = CourseApi.getTopicComment();
  const commentList = res.data.comments;

  return (
    <div className="content-block-panel">
      <div className="main-block-header-panel">
        <div className="text-title-block-panel">Bình luận</div>
      </div>
      <div className="main-block-content-panel">
        <div className="display-flex comment-item">
          <div className="comment-avatar">
            <img src={defaltAvatar} alt="avatar" />
          </div>
          <div className="comment-detail">
            <div className="display-flex">
              <input className="form-control" />
            </div>
          </div>
        </div>
        {commentList.map((comment,i) => (
          <div key={i}>
            <div className="display-flex comment-item">
              <div className="comment-avatar">
                <img src={defaltAvatar} alt="avatar" />
              </div>
              <div className="comment-detail">
                <div className="display-flex">
                  <div className="username">{comment.username}</div>
                  <div>{comment.comment}</div>
                </div>
                <div className="display-flex">
                  <div className="like-btn">
                    <a href="/">Thích</a>
                  </div>
                  <div className="like-btn">
                    <a href="/">Trả lời</a>
                  </div>
                  <div className="public-date">{comment.publishTime}</div>
                </div>
              </div>
            </div>
            <div className="replies">
              {comment.replies.map((reply, i) => (
                <div className="display-flex comment-item" key={i}>
                  <div className="comment-avatar">
                    <img src={defaltAvatar} alt="avatar" />
                  </div>
                  <div className="comment-detail">
                    <div className="display-flex">
                      <div className="username">{reply.username}</div>
                      <div>{reply.comment}</div>
                    </div>
                    <div className="display-flex">
                      <div className="like-btn">
                        <a href="/">Thích</a>
                      </div>
                      <div className="like-btn">
                        <a href="/">Trả lời</a>
                      </div>
                      <div className="public-date">{reply.publishTime}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
