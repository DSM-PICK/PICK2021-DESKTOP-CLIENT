import { FC } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";

//출결 변경
const AttendanceChange: FC = ():JSX.Element => {   
    const ACListArray:string[] = ["결석일", "결석자", "종류", "신고자", "비고"];

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
              <S.NoteInput
                type="text"
                placeholder="최대 10글자로 입력해주세요 (선택)"
              />
            </S.NoteBox>
          </S.ACColumn>
          <S.AddButton type="button" value="추가하기" />
          <S.ErrorMessage>비고의 내용이 10글자를 넘었습니다</S.ErrorMessage>
        </S.ACBox>
        <div />
        {/* <Calendar /> */}
        <S.ACListBox>
          <S.Title>출결 변동사항</S.Title>
          <S.ACList>
              <S.ACListHeader>
                {ACListArray.map((value, index) => {
                    return <S.ACListHead key={index}>{value}</S.ACListHead>
                })}
              </S.ACListHeader>
              <S.ACListBody>
              <S.ACListColumns>
                  <S.ACListCells>1</S.ACListCells>
                  <S.ACListCells>2</S.ACListCells>
                  <S.ACListCells>3</S.ACListCells>
                  <S.ACListCells>4</S.ACListCells>
                  <S.ACListCells>5</S.ACListCells>
              </S.ACListColumns>
              </S.ACListBody>
          </S.ACList>
        </S.ACListBox>
      </S.ACContainer>
    </S.Container>
  );
};

export default AttendanceChange;
