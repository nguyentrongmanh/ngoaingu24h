import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";


const LessonSider = () => {
	return (
		<div class="right-panel-box">
			<div class="right-panel-box-inner">
				<div class="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon class="lesson-sider-icon" icon={faBookOpen} />
						Part 1
					</a>
				</div>
				<div class="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon class="lesson-sider-icon" icon={faBookOpen} />
						Part 2
					</a>
				</div>
				<div class="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon class="lesson-sider-icon" icon={faBookOpen} />
						Part 3
					</a>
				</div>
				<div class="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon class="lesson-sider-icon" icon={faBookOpen} />
						Part 4
					</a>
				</div>
				<div class="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon class="lesson-sider-icon" icon={faBookOpen} />
						Part 5 - 6
					</a>
				</div>
				<div class="box-item topic-item">
					<a href="/tai-lieu-5129873437753344">
						<FontAwesomeIcon class="lesson-sider-icon" icon={faBookOpen} />
						Part 7
					</a>
				</div>
			</div>
		</div>
	);
};

export default LessonSider;