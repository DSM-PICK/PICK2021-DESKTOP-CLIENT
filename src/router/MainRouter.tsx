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
} from "../Pages";
const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/schedule" component={ManageSchedulePage} />
        <Route exact path="/outing-list" component={OutingListPage} />
        <Route exact path="/manageschedule" component={ManageSchedulePage} />
        <Route exact path="/userinfo" component={UserInfoPage} />
        
 
        <Route exact path="/studentlist" component={StudentListPage} />
        <Route exact path="/attendancechangelist" component={AttendanceChangeListPage}/>
        <Route exact path="/atcheck" component={AttendanceCheckPage} />
        <Route exact path="/atchange" component={AttendanceChangePage } />
      </Switch>
    </>
  );
};

export default MainRouter;
