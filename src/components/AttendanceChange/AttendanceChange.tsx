import React, { FC, useEffect } from "react";
import * as S from "./styles";
import { Add, Date, Type, Reason } from "./ACColumn";
import { useRecoilState } from "recoil";
import { WordLength } from "../../state/atom/ATChange";
import { getAttendanceChangeList } from "../../utils/api/AttendanceChange";
import { COLOR } from "../../style";

//출결 변경
const AttendanceChange: FC = (): JSX.Element => {
  const ACListArray: string[] = ["결석일", "결석자", "종류", "신고자", "비고"];
  const [wordLength, setWordLength] = useRecoilState<number>(WordLength);
  const TestArray = [];

  for (let i = 0; i < 20; i++) {
    TestArray.push(i);
  }

  useEffect(() => {
    getAttendanceChangeList().then((res) => {
      console.log(res);
    })
  }, [])

  return (
    <S.Wrapper>
      <S.ACContainer>
        <div className="acbox">
          <div>
            <Add />
            <Date />
            <Type />
            <Reason />
            <S.AddButton type="button" value="추가하기" />
            <S.ErrorMessage display={wordLength > 10 ? "block" : "none"}>
              비고의 내용이 10글자를 넘었습니다
            </S.ErrorMessage>
          </div>
        </div>

        <S.ACListBox>
          <S.Title>출결 변동사항</S.Title>
          <S.ACList>
            <S.ACListHeader>
              {ACListArray.map((value: string, index: number) => {
                return <S.ACListHead key={index}>{value}</S.ACListHead>;
              })}
            </S.ACListHeader>
            <S.ACListBody>
              {TestArray.map((value: number) => {
                return (
                  <S.ACListColumns key={value}>
                    <S.ACListCells>
                      2020년 9월 31일 2교시 ~ 2020년 9월 31일 3교시
                    </S.ACListCells>
                    <S.ACListCells>조준서</S.ACListCells>
                    <S.ACListCells>외출</S.ACListCells>
                    <S.ACListCells>신요셉</S.ACListCells>
                    <S.ACListCells>학교 밖으로 나갔어요</S.ACListCells>
                    <S.ACListSettings onClick={() => ""}>
                      <div />
                      <div />
                      <div />
                    </S.ACListSettings>
                    <S.SettingModal>
                      <S.SettingSelection color={COLOR.gray}>수정</S.SettingSelection>
                      <S.SettingSelection color={COLOR.red}>삭제</S.SettingSelection>
                    </S.SettingModal>
                  </S.ACListColumns>
                );
              })}
            </S.ACListBody>
          </S.ACList>
        </S.ACListBox>
      </S.ACContainer>
    </S.Wrapper>
  );
};

export default AttendanceChange;
