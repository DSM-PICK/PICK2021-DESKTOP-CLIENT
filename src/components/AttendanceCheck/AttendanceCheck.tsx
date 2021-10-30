import { FC } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";
//출석 조회
const Attendancy: FC = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.ACContainer>
          <S.ChooseCalendar>
            <S.Title>출석 조회</S.Title>
            <Calendar />
          </S.ChooseCalendar>
          <S.AttendancyList></S.AttendancyList>
        </S.ACContainer>
      </S.Container>
    </>
  );
};

export default Attendancy;
