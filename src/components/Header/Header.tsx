import React, { FC } from "react";
import * as S from "./styles";

const RegisterArr = [
  "홈",
  "출석체크",
  "출결변경",
  "일정관리",
  "출석조회",
  "템플릿",
];
const Header: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.RegisterContainer>
        {RegisterArr.map((str, i) => (
          <S.RegisterBox>
            <S.Register key={i}>{str}</S.Register>
            <S.RegisterBotLine />
          </S.RegisterBox>
        ))}
      </S.RegisterContainer>
      <S.LogoutBtn>로그아웃</S.LogoutBtn>
    </S.Container>
  );
};

export default Header;
