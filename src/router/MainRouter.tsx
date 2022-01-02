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
  StudentListPage,
  AtcheckPage,
  PasswordPage,
} from "../Pages";
const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/schedule" component={ManageSchedulePage} />
        <Route exact path="/outing-list" component={OutingListPage} />
        <Route exact path="/manageschedule" component={ManageSchedulePage} />
        <Route exact path="/" component={UserInfoPage} />
        <Route exact path="/studentlist" component={StudentListPage} />
        <Route
          exact
          path="/atchangelist"
          component={AttendanceChangeListPage}
        />

        <Route exact path="/atview" component={AttendanceCheckPage} />
        <Route exact path="/atchange" component={AttendanceChangePage} />
        <Route exact path="/atcheck" component={AtcheckPage} />
        <Route exact path="/password" component={PasswordPage} />
      </Switch>
    </>
  );
};

export default MainRouter;
