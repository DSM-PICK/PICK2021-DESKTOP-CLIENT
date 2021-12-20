import React, { FC } from "react";
import Header from "../../components/Header/Header";
import StudentList from "../../components/StudentList/StudentList";
const StudentListPage: FC = () => {
  return (
    <>
      <Header />
      <StudentList />
    </>
  );
};

export default StudentListPage;
