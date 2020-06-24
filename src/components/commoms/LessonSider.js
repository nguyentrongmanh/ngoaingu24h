import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";


const LessonSider = () => {
	return (
		<div className="right-panel-box">
			<div className="right-panel-box-inner">
				<div className="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon className="lesson-sider-icon" icon={faBookOpen} />
						Part 1
					</a>
				</div>
				<div className="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon className="lesson-sider-icon" icon={faBookOpen} />
						Part 2
					</a>
				</div>
				<div className="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon className="lesson-sider-icon" icon={faBookOpen} />
						Part 3
					</a>
				</div>
				<div className="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon className="lesson-sider-icon" icon={faBookOpen} />
						Part 4
					</a>
				</div>
				<div className="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon className="lesson-sider-icon" icon={faBookOpen} />
						Part 5 - 6
					</a>
				</div>
				<div className="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon className="lesson-sider-icon" icon={faBookOpen} />
						Part 7
					</a>
				</div>
			</div>
		</div>
	);
};

export default LessonSider;