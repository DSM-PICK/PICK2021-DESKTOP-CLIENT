import { FC } from "react";
import AttendanceCheck from "../../components/AttendanceCheck/AttendanceCheck";
import Header from "../../components/Header/Header";

const AttendanceCheckPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <AttendanceCheck />
    </>
  );
};

export default AttendanceCheckPage;
