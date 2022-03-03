import React, { FC } from "react";
import * as S from "./styles";
import ClassList from "../ClassList/ClassList";
import StudentList from "../StudentList/StudentList";
const Atcheck: FC = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>출석 체크</S.Title>
      </S.TitleWrapper>
      <S.StudentStatusChangeWrapper>
        <ClassList />
        <StudentList />
      </S.StudentStatusChangeWrapper>
    </S.Wrapper>
  );
};

export default Atcheck;
