import { FC } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";

//출결 변경
const AttendanceChange: FC = () => {
  return (
    <S.Container>
      <S.ACContainer>
        <S.ACBox>
        <S.Title>출결 변경</S.Title>
          <S.ACColumn>
            <S.ACTitle>결석자</S.ACTitle>
            <S.AbsentsBox></S.AbsentsBox>
          </S.ACColumn>
          <S.ACColumn>
            <S.ACTitle>날짜</S.ACTitle>
            <S.DateBox></S.DateBox>
          </S.ACColumn>
          <S.ACColumn>
            <S.ACTitle>종류</S.ACTitle>
            <S.TypeBox></S.TypeBox>
          </S.ACColumn>
          <S.ACColumn>
            <S.ACTitle>비고</S.ACTitle>
            <S.NoteBox>
                <S.NoteInput type="text" placeholder="최대 10글자로 입력해주세요 (선택)"/>
            </S.NoteBox>
          </S.ACColumn>
          <S.AddButton type="button" value="추가하기"/>
          <S.ErrorMessage>비고의 내용이 10글자를 넘었습니다</S.ErrorMessage>
        </S.ACBox>
        {/* <S.ACList> */}
          <Calendar />
        {/* </S.ACList> */}
      </S.ACContainer>
      
    </S.Container>
  );
};

export default AttendanceChange;
