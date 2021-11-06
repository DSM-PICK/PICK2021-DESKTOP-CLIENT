import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage, ManageSchedulePage, OutingListPage } from "../Pages";
import Header from "../components/Header/Header";
const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/manage-schedule" component={ManageSchedulePage} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/outing-list" component={OutingListPage} />
      </Switch>
    </>
  );
};

export default MainRouter;
