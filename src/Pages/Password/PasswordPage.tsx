import { FC } from "react";
import Password from "../../components/Password/Password";
import Header from "../../components/Header/Header";

const PasswordPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Password />
    </>
  );
};

export default PasswordPage;
