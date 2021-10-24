import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage, ManageSchedulePage, UserInfoPage } from "../Pages";
const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/manage-schedule" component={ManageSchedulePage} />
        <Route exact path="/user-info" component={UserInfoPage} />
      </Switch>
    </>
  );
};

export default MainRouter;
