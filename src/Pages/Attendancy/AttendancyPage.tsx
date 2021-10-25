import { FC } from "react";
import Attendancy from "../../components/Attendancy/Attendancy";
import Header from "../../components/Header/Header";

const AttendancyPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Attendancy />
    </>
  );
};

export default AttendancyPage;
