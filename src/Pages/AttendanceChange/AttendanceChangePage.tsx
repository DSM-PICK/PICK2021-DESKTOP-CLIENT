import { FC } from "react";
import AttendanceChange from "../../components/AttendanceChange/AttendanceChange";
import Header from "../../components/Header/Header";

const AttendanceChagePage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <AttendanceChange />
    </>
  );
};

export default AttendanceChagePage;
