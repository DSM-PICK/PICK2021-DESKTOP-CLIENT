import React, { useState } from "react";
import * as S from "./styles";
import { Logo, Line } from "../../assets";
import { getUserInfo } from "../../utils/api/UserInfo";
import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
//import { StudentListPage } from "../../Pages";

const UserInfo = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState<any>();
  useLayoutEffect(() => {
    const token = localStorage.getItem("teacher_id");
    if (!token) {
      return;
    }
    getUserInfo(token).then((res) => setUserInfo(res.data));
  }, []);
  /*const hrTeacherCheck = (teacher_id: number): JSX.Element => {
    if (teacher_id === 1) {
      return <StudentListPage />;
    }
    return <img src={Logo} alt="" />;
  };*/
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("teacher_id");
    alert("로그아웃 되었습니다.");
    history.push("/login");
  };
  return (
    <S.Container>
      <S.TeacherInfoWrapper>
        <S.TeacherInfo>{userInfo?.location_name}</S.TeacherInfo>
        <S.TeacherName>{userInfo?.name}</S.TeacherName>
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
