import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import {
  LoginPage,
  ManageSchedulePage,
  UserInfoPage,
  AttendanceCheckPage,
  AttendanceChangePage,
  OutingListPage,
  AttendanceChangeListPage,
} from "../Pages";
const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/outing-list" component={OutingListPage} />
        <Route exact path="/manageschedule" component={ManageSchedulePage} />
        <Route exact path="/userinfo" component={UserInfoPage} />
        <Route exact path="/attendancecheck" component={AttendanceCheckPage} />
        <Route
          exact
          path="/attendancechange"
          component={AttendanceChangePage}
        />
        <Route
          exact
          path="/attendancechangelist"
          component={AttendanceChangeListPage}
        />
      </Switch>
    </>
  );
};

export default MainRouter;
