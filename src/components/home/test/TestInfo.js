import React from "react";
import { Link } from "react-router-dom";

const RankTable = () => {
	return (
		<div class="content-block-panel">
			<div class="main-block-header-panel">
				<div></div>
				<div class="text-title-block-panel">Thông tin chung</div>
			</div>
			<div class="main-block-content-panel">
				<div class="row-info-panel">
					<div class="gwt-Label">Số câu hỏi</div>
					<div class="gwt-HTML">10 Câu</div>
				</div>
				<div class="row-info-panel">
					<div class="gwt-Label">Điều kiện qua (% đúng)</div>
					<div class="gwt-HTML">10%</div>
				</div>
				<div class="row-info-panel">
					<div class="gwt-Label">Thời gian làm bài</div>
					<div class="gwt-HTML">5 Phút</div>
				</div>
				<div class="row-info-panel">
					<div class="gwt-Label">Số lần tạm dừng</div>
					<div class="gwt-HTML">0/3</div>
				</div>
				<div class="row-info-panel">
					<div class="gwt-Label">Số lần làm lại</div>
					<div class="gwt-HTML">0/10</div>
				</div>
				<div class="row-info-panel">
					<div class="gwt-Label">Số người đã tham gia</div>
					<div class="gwt-HTML">1122</div>
				</div>
				<div class="end-row-buttons-panel">
					<div>
						<Link to="/test/detail" className="main-btn" >Làm bài</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RankTable;