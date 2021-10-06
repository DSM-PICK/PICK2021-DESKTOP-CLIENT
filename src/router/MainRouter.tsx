import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../Pages"

const MainRouter:FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
      </Switch>
    </>
  );
};

export default MainRouter;
