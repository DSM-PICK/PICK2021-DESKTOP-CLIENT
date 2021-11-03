import React, { FC, useEffect, useRef, useState } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";
import { COLOR } from "../../style/index";

//출결 변경
const AttendanceChange: FC = (): JSX.Element => {
  const ACListArray: string[] = ["결석일", "결석자", "종류", "신고자", "비고"];
  const TypesArray: string[] = ["외출", "현체", "귀가", "이동", "취업"];
  const [typeIndex, setTypeIndex] = useState<number>(0);
  const TypesRefs = useRef(new Array(TypesArray.length));

  useEffect(() => {
    for (let i = 0; i < ACListArray.length; i++) {
      TypesRefs.current[i].style.backgroundColor = `${COLOR.white}`;
      TypesRefs.current[i].style.color = `${COLOR.black}`;
    }
    TypesRefs.current[typeIndex].style.backgroundColor = `${COLOR.orange}`;
    TypesRefs.current[typeIndex].style.color = `${COLOR.white}`;
  }, [typeIndex]);

  const changeTypeIndex = (index: number) => {
    setTypeIndex(index);
  };

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
            <S.DateBox>
              <S.DateText>2020년 9월 31일</S.DateText>
              <S.ClassInput />
              <span>교시 ~ </span>
              <S.DateText>2020년 10월 3일</S.DateText>
              <S.ClassInput />
              교시
            </S.DateBox>
          </S.ACColumn>
          <S.ACColumn>
            <S.ACTitle>종류</S.ACTitle>
            <S.TypeBox>
              <S.Types>
                {TypesArray.map((value, index) => {
                  return (
                    <S.Type
                      ref={(el) => (TypesRefs.current[index] = el)}
                      key={index}
                      onClick={() => changeTypeIndex(index)}
                    >
                      {value}
                    </S.Type>
                  );
                })}
              </S.Types>
            </S.TypeBox>
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
                return <S.ACListHead key={index}>{value}</S.ACListHead>;
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
