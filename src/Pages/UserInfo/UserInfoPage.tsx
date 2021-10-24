import { FC } from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import Header from "../../components/Header/Header";

const UserInfoPage: FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <UserInfo />
    </div>
  );
};

export default UserInfoPage;
