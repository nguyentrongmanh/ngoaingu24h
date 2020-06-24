import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faDownload } from "@fortawesome/free-solid-svg-icons";

const Documentation = () => {
  return (
    <div className="content-block-panel">
      <div className="main-block-header-panel">
        <div className="text-title-block-panel">Tài liệu tham khảo </div>
      </div>
      <div className="main-block-content-panel">
        <div className="document-item">
          <div className="display-flex">
            <FontAwesomeIcon
              classNameName="document-icon"
              icon={faFileDownload}
            ></FontAwesomeIcon>
            <div>Tài Liệu: Các Thành Phần Cơ Bản Của Câu</div>
          </div>
          <div>
            <FontAwesomeIcon
              classNameName="document-icon"
              icon={faDownload}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="document-item">
          <div className="display-flex">
            <FontAwesomeIcon
              classNameName="document-icon"
              icon={faFileDownload}
            ></FontAwesomeIcon>
            <div>Tài Liệu: Các Thành Phần Cơ Bản Của Câu</div>
          </div>
          <div>
            <FontAwesomeIcon
              classNameName="document-icon"
              icon={faDownload}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
