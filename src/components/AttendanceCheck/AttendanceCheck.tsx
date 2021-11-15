import { FC } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";
import { Arrow } from "../../assets/index";
//출석 조회
const AttendanceCheck: FC = (): JSX.Element => {
  

  return (
    <>
      <S.Container>
        <S.ACContainer>
          <S.Title>출석 조회</S.Title>
          <S.ACBox>
            <S.ChooseBox>
              <S.dateText>날짜</S.dateText>
              <S.ChooseDate>
                <S.Date>
                  2021년 10월 11일
                </S.Date>
                <S.DateIcon src={Arrow}/>
              </S.ChooseDate>
            </S.ChooseBox>
            <S.AttendancyList>

            </S.AttendancyList>
          </S.ACBox>
        </S.ACContainer>
      </S.Container>
    </>
  );
};

export default AttendanceCheck;
