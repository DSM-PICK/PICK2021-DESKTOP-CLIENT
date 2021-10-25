import { FC } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";

const Attendancy: FC = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.ChooseCalendar>
          <Calendar />
        </S.ChooseCalendar>
        
      </S.Container>
    </>
  );
};

export default Attendancy;
