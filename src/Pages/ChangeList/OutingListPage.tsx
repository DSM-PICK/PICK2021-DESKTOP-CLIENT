import { FC } from "react";
import OutingList from "../../components/ChangeList/OutingList";
import Header from "../../components/Header/Header";

const OutingListPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <OutingList />
    </>
  );
};

export default OutingListPage;
