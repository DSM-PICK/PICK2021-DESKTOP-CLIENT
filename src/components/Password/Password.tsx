import React, { FC } from "react";
import * as S from "./styles";
const Password: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.LoginContainer>
        <S.Title>비밀번호 변경</S.Title>
        <S.LoginForm>
          <S.LoginInput placeholder={"아이디"} type="text" />
          <S.LoginInput placeholder={"비밀번호"} type="password" />
          <S.LoginInput placeholder={"새 비밀번호 재입력"} type="password" />
          <S.LoginInput placeholder={"인증코드"} type="text" />
          <S.LoginSubmit
            type="submit"
            value="비밀번호 변경"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </S.LoginForm>
        <S.LoginFail>인증코드가 일치하지 않습니다.</S.LoginFail>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Password;
