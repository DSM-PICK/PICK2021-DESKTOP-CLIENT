import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage, ManageSchedulePage, UserInfoPage, AttendancyPage } from "../Pages";
const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/manageschedule" component={ManageSchedulePage} />
        <Route exact path="/userinfo" component={UserInfoPage} />
        <Route exact path="/attendancy" component={AttendancyPage} />
      </Switch>
    </>
  );
};

export default MainRouter;
