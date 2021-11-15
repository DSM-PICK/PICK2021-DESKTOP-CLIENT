import { FC, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";
// import { Arrow } from "../../assets/index";
import Arrow from "../../assets/icons/arrow";
import { CDateValue, CModal } from "../../modules/atom/ATCheck";
import { useRecoilState } from "recoil";
import { COLOR } from "../../style/index";

//출석 조회
const AttendanceCheck: FC = (): JSX.Element => {
  const date = new Date();
  const [isCOpen, setIsCOpen] = useRecoilState<boolean>(CModal);
  const [cdateValue, setCDateValue] = useRecoilState<string>(CDateValue);

  useEffect(() => {
    setCDateValue(
      `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    );
  }, []);

  return (
    <>
      <S.Container>
        <S.ACContainer>
          <S.Title>출석 조회</S.Title>
          <S.ACBox>
            <S.ChooseBox>
              <S.dateText>날짜</S.dateText>
              <S.ChooseDate>
                <S.Date
                  onClick={() => {
                    setIsCOpen(!isCOpen);
                  }}
                  color={isCOpen ? `${COLOR.gray}` : `${COLOR.black}`}
                >
                  {cdateValue}
                </S.Date>
                <Calendar isOpen={isCOpen} index={2} />
                <S.DateIcon
                  onClick={() => {
                    setIsCOpen(!isCOpen);
                  }}
                  rotate={isCOpen ? "0" : "-180deg"}
                >
                  <Arrow />
                </S.DateIcon>
              </S.ChooseDate>
            </S.ChooseBox>
            <S.AttendancyList></S.AttendancyList>
          </S.ACBox>
        </S.ACContainer>
      </S.Container>
    </>
  );
};

export default AttendanceCheck;
