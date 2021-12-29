import React from "react";
import * as S from "./styles";
import { Logo, Line } from "../../assets";
import { getUserInfo } from "../../utils/api/UserInfo";
import { useLayoutEffect } from "react";
import { StudentListPage } from "../../Pages";
const UserInfo = () => {
  useLayoutEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return;
    }
    const value = getUserInfo(token, "pick");
  }, []);
  const hrTeacherCheck = (teacher_id: number): JSX.Element => {
    if (teacher_id === 1) {
      return <StudentListPage />;
    }
    return <img src={Logo} alt="" />;
  };
  const logout = () => {
    localStorage.removeItem("access_token");
  };
  return (
    <S.Container>
      <S.TeacherInfoWrapper>
        <S.TeacherInfo>본부교무실 소속</S.TeacherInfo>
        <S.TeacherName>권경혜 선생님</S.TeacherName>
        <S.TeacherStatus>
          <S.TeacherInfo>비밀번호 변경</S.TeacherInfo>
          <img src={Line} alt="" />
          <S.LogoutBtn onClick={logout}>로그아웃</S.LogoutBtn>
        </S.TeacherStatus>
      </S.TeacherInfoWrapper>
      <S.TeacherInfoWrapper>{/*hrTeacherCheck(1)*/}</S.TeacherInfoWrapper>
    </S.Container>
  );
};

export default UserInfo;
