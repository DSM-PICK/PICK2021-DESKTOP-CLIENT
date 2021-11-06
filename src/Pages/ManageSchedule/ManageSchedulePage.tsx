import { FC } from "react";
import ManageSchedule from "../../components/ManageSchedule/ManageSchedule";
import Header from "../../components/Header/Header";

const ManageSchedulePage: FC = ():JSX.Element => {
    return (
        <>
        <Header />
        <ManageSchedule />
        </>
    );
}

export default ManageSchedulePage;