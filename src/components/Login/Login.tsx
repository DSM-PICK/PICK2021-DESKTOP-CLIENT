import { FC } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Login: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.LoginContainer>
        <S.Title>로그인</S.Title>
        <S.LoginForm>
          <S.LoginInput placeholder={"아이디"} type="text" />
          <S.PasswordInput placeholder={"비밀번호"} type="password" />
          <S.UserHelpContainer>
            <S.SavdIdCheckBox>
              <S.Label htmlFor="checkbox">
                <S.Input type="checkbox" id="checkbox" />
                <S.Box />
              </S.Label>
              <label>아이디 저장</label>
            </S.SavdIdCheckBox>
            <S.ForgotPassword>비밀번호를 잃으셨나요?</S.ForgotPassword>
          </S.UserHelpContainer>
          <S.LoginSubmit type="submit" value="로그인" />
        </S.LoginForm>
        <S.Register to="/register">회원가입</S.Register>
        <S.LoginFail>아이디 또는 비밀번호가 일치하지 않습니다.</S.LoginFail>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
