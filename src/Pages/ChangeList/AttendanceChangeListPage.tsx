import { FC } from "react";
import AttendanceChangeList from "../../components/ChangeList/AttendanceChangeList";
import Header from "../../components/Header/Header";

const AttendanceChangeListPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <AttendanceChangeList />
    </>
  );
};

export default AttendanceChangeListPage;
