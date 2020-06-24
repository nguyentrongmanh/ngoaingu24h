import React from "react";
import CourseApi from "../../api/CourseApi";
import defaltAvatar from "../../assets/images/default_avatar.png";

const Documentation = () => {
  const res = CourseApi.getTopicComment();
  const commentList = res.data.comments;

  return (
    <div class="content-block-panel">
      <div class="main-block-header-panel">
        <div class="text-title-block-panel">Bình luận</div>
      </div>
      <div class="main-block-content-panel">
        <div className="display-flex comment-item">
          <div class="comment-avatar">
            <img src={defaltAvatar} alt="avatar" />
          </div>
          <div class="comment-detail">
            <div class="display-flex">
              <input class="form-control" />
            </div>
          </div>
        </div>
        {commentList.map((comment) => (
          <div>
            <div className="display-flex comment-item">
              <div class="comment-avatar">
                <img src={defaltAvatar} alt="avatar" />
              </div>
              <div class="comment-detail">
                <div class="display-flex">
                  <div class="username">{comment.username}</div>
                  <div>{comment.comment}</div>
                </div>
                <div class="display-flex">
                  <div class="like-btn">
                    <a href="/">Thích</a>
                  </div>
                  <div class="like-btn">
                    <a href="/">Trả lời</a>
                  </div>
                  <div class="public-date">{comment.publishTime}</div>
                </div>
              </div>
            </div>
            <div className="replies">
              {comment.replies.map((reply) => (
                <div className="display-flex comment-item">
                  <div class="comment-avatar">
                    <img src={defaltAvatar} alt="avatar" />
                  </div>
                  <div class="comment-detail">
                    <div class="display-flex">
                      <div class="username">{reply.username}</div>
                      <div>{reply.comment}</div>
                    </div>
                    <div class="display-flex">
                      <div class="like-btn">
                        <a href="/">Thích</a>
                      </div>
                      <div class="like-btn">
                        <a href="/">Trả lời</a>
                      </div>
                      <div class="public-date">{reply.publishTime}</div>
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
