import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import {
  LoginPage,
  ManageSchedulePage,
  AttendanceCheckPage,
  AttendanceChangePage,
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
        <Route exact path="/manageschedule" component={ManageSchedulePage} />
        <Route exact path="/studentlist" component={StudentListPage} />
        <Route exact path="/atview" component={AttendanceCheckPage} />
        <Route exact path="/" component={AttendanceChangePage} />
        <Route exact path="/atcheck" component={AtcheckPage} />
        <Route exact path="/password" component={PasswordPage} />
      </Switch>
    </>
  );
};

export default MainRouter;
