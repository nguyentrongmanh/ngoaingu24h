import React from "react";
import Test from "./components/home/Test";
import Document from "./components/home/Document";
import CourseMember from "./components/home/CourseMember";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { DashboardPage } from "./components/dashboard/DashboardPage";
import { HomePage } from "./components/home/HomePage";
import { LoginController } from "./components/auth/login/LoginController";
import { RegisterController } from "./components/auth/register/RegisterController";
import { LessonDetailController } from "./components/lesson/lesson-detail/LessonDetailController";
import { ExamController } from "./components/exam/ExamController";
const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/lesson/:lessonId"
          component={LessonDetailController}
        />
        <Route exact path="/lesson/test/:examId">
          <ExamController />
        </Route>
        <Route exact path="/lesson/test/do/:examId">
          <ExamController type="test" />
        </Route>
        <Route exact path="/lesson/home-work/:lessonId">
          <LessonDetailController type="home-work" />
        </Route>
        <Route exact path="/login" component={LoginController} />
        <Route exact path="/test" component={Test} />

        <Route exact path="/register" component={RegisterController} />
        <Route exact path="/document" component={Document} />
        <Route exact path="/course-member" component={CourseMember} />
        <Route path="/dashboard" component={DashboardPage} />

        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routers;
