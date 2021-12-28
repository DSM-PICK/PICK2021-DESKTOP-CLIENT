import { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { loginRequest } from "../../utils/api/Login";
import { pickLogo } from "../../assets";

const Login: FC = (): JSX.Element => {
  const [display, setDisplay] = useState<string>("none");
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const requestLoginApi = () => {
    loginRequest(idRef.current?.value, pwRef.current?.value).then(() => {
      window.location.href = "/";
    }).catch((err) => {
      if(err.response.status === 401 || err.response.status === 403) {
        setDisplay("default")
      } 
      if(err.response.status === 400) {
        alert("아이디 또는 비밀번호를 입력해주세요.");
      }
    })
  };

  return (
    <S.Container>
      <img src={pickLogo} />
      <S.LoginContainer>
        <S.Title>로그인</S.Title>
        <S.LoginForm>
          <S.LoginInput placeholder={"아이디"} type="text" ref={idRef} />
          <S.PasswordInput
            placeholder={"비밀번호"}
            type="password"
            ref={pwRef}
          />
          <S.UserHelpContainer>
            <S.SavdIdCheckBox>
              <S.Label htmlFor="checkbox">
                <S.Input type="checkbox" id="checkbox" />
                <S.Box />
              </S.Label>
              <label htmlFor="checkbox">아이디 저장</label>
            </S.SavdIdCheckBox>
            <S.ForgotPassword>비밀번호를 잃으셨나요?</S.ForgotPassword>
          </S.UserHelpContainer>
          <S.LoginSubmit
            type="submit"
            value="로그인"
            onClick={(e) => {
              e.preventDefault();
              requestLoginApi();
            }}
          />
        </S.LoginForm>
        <S.LoginFail display={display}>
          아이디 또는 비밀번호가 일치하지 않습니다.
        </S.LoginFail>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
