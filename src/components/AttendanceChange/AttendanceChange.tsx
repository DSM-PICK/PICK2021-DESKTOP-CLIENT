import React, { FC, useEffect, useRef, useState } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "./styles";
import { COLOR } from "../../style/index";
import { useRecoilState } from "recoil";
import {
  FModal,
  FDateValue,
  SModal,
  SDateValue,
  WordLength,
} from "../../state/atom/ATChange";

//출결 변경
const AttendanceChange: FC = (): JSX.Element => {
  const date = new Date();
  const ACListArray: string[] = ["결석일", "결석자", "종류", "신고자", "비고"];
  const TypesArray: string[] = ["외출", "현체", "귀가", "이동", "취업"];
  const TypesRefs = useRef(new Array(TypesArray.length));
  const [typeIndex, setTypeIndex] = useState<number>(0);
  const [isFOpen, setIsFOpen] = useRecoilState<boolean>(FModal);
  const [isSOpen, setIsSOpen] = useRecoilState<boolean>(SModal);
  const [fdateValue, setFdateValue] = useRecoilState<string>(FDateValue);
  const [sdateValue, setSdateValue] = useRecoilState<string>(SDateValue);
  const [wordLength, setWordLength] = useRecoilState<number>(WordLength);

  const TestArray = [];

  for (let i = 0; i < 20; i++) {
    TestArray.push(i);
  }

  useEffect(() => {
    setFdateValue(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setSdateValue(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
  }, []);

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

  const checkWordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordLength(e.target.value.length);
  };

  return (
    <S.Wrapper>
      <S.ACContainer>
        <div className="acbox">
          <div>
            <S.Title>출결 변경</S.Title>
            <S.ACColumn>
              <S.ACTitle>결석자</S.ACTitle>
              <div>
                <S.AddAbsents>추가</S.AddAbsents>
              </div>
            </S.ACColumn>
            <S.ACColumn>
              <S.ACTitle>날짜</S.ACTitle>
              <S.DateBox>
                {/* 첫번째 날짜  */}
                <S.Date>
                  <S.DateText
                    onClick={() => setIsFOpen(!isFOpen)}
                    ref={(el) => (TypesRefs.current[0] = el)}
                  >
                    {`${fdateValue.split("-")[0]}년 ${
                      fdateValue.split("-")[1]
                    }월 ${fdateValue.split("-")[2]}일`}
                  </S.DateText>
                  <Calendar isOpen={isFOpen} index={0} />
                  <div className="classContainer">
                    <S.ClassInput maxLength={1} />
                    <div>교시</div>
                  </div>
                </S.Date>
                <span>~</span>
                {/* 두번째 날짜 */}
                <S.Date>
                  <S.DateText
                    onClick={() => setIsSOpen(!isSOpen)}
                    ref={(el) => (TypesRefs.current[1] = el)}
                  >
                    {`${sdateValue.split("-")[0]}년 ${
                      sdateValue.split("-")[1]
                    }월 ${sdateValue.split("-")[2]}일`}
                  </S.DateText>
                  <Calendar isOpen={isSOpen} index={1} />
                  <div className="classContainer">
                    <S.ClassInput maxLength={1} />
                    <div>교시</div>
                  </div>
                </S.Date>
              </S.DateBox>
            </S.ACColumn>
            <S.ACColumn>
              <S.ACTitle>종류</S.ACTitle>
              <S.TypeBox>
                <S.Types>
                  {TypesArray.map((value: string, index: number) => {
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
                  onChange={checkWordLength}
                />
              </S.NoteBox>
            </S.ACColumn>

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
                    <S.ACListSettings>
                      <div />
                      <div />
                      <div />
                    </S.ACListSettings>
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
