import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage, ManageSchedulePage, UserInfoPage, AttendanceCheckPage, AttendanceChangePage } from "../Pages";
const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/schedule" component={ManageSchedulePage} />
        <Route exact path="/userinfo" component={UserInfoPage} />
        <Route exact path="/atcheck" component={AttendanceCheckPage} />
        <Route exact path="/atchange" component={AttendanceChangePage } />
      </Switch>
    </>
  );
};

export default MainRouter;
