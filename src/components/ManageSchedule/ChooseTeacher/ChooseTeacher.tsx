import { FC } from "react";
import * as S from "./styles";

const ChooseTeacher: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.ChooseTeacherContainer>
        <S.FloorNameBox>
          <S.FloorName>2층</S.FloorName>
          <S.FloorName>3층</S.FloorName>
          <S.FloorName>4층</S.FloorName>
        </S.FloorNameBox>
        <S.TeacherNameBox>
          <S.TeacherName>이동구</S.TeacherName>
          <S.TeacherName>이동구</S.TeacherName>
          <S.TeacherName>이동구</S.TeacherName>
        </S.TeacherNameBox>
        <S.CTBody>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
          <S.TeacherNames>이동구</S.TeacherNames>
        </S.CTBody>
      </S.ChooseTeacherContainer>
    </S.Container>
  );
};

export default ChooseTeacher;
