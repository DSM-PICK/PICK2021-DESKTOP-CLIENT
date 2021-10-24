import React from "react";
import * as S from "./styles";
import { Logo, Line } from "../../assets";
const UserInfo = () => {
  return (
    <S.Container>
      <S.TeacherInfoWrapper>
        <S.TeacherInfo>본부교무실 소속</S.TeacherInfo>
        <S.TeacherName>권경혜 선생님</S.TeacherName>
        <S.TeacherStatus>
          <S.TeacherInfo>비밀번호 변경</S.TeacherInfo>
          <img src={Line} alt="" />
          <S.LogoutBtn>로그아웃</S.LogoutBtn>
        </S.TeacherStatus>
      </S.TeacherInfoWrapper>
      <S.TeacherInfoWrapper>
        <img src={Logo} alt="" />
      </S.TeacherInfoWrapper>
    </S.Container>
  );
};

export default UserInfo;
