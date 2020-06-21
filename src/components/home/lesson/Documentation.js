import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFileDownload, faDownload } from "@fortawesome/free-solid-svg-icons";

const Documentation = () => {
	return (
		<div class="content-block-panel">
			<div class="main-block-header-panel">
				<div class="text-title-block-panel">Tài liệu tham khảo </div>
			</div>
			<div class="main-block-content-panel">
				<div class="document-item">
					<div class="display-flex">
						<FontAwesomeIcon className="document-icon" icon={faFileDownload}></FontAwesomeIcon>
						<div>
							Tài Liệu: Các Thành Phần Cơ Bản Của Câu
						</div>
					</div>
					<div>
						<FontAwesomeIcon className="document-icon" icon={faDownload}></FontAwesomeIcon>
					</div>
				</div>
				<div class="document-item">
					<div class="display-flex">
						<FontAwesomeIcon className="document-icon" icon={faFileDownload}></FontAwesomeIcon>
						<div>
							Tài Liệu: Các Thành Phần Cơ Bản Của Câu
						</div>
					</div>
					<div>
						<FontAwesomeIcon className="document-icon" icon={faDownload}></FontAwesomeIcon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Documentation;