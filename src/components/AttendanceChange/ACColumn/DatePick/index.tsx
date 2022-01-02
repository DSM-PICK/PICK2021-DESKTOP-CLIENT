import React, { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { ACColumn } from "../../styles";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  FModal,
  SModal,
  FDateValue,
  SDateValue,
  StudentObject,
  SelectedIndex
} from "../../../../state/atom/ATChange";
import Calendar from "../../../Calendar/Calendar";
import { StudentObjectType } from "../../../../../interface/ATChange";

const DatePick: FC = (): JSX.Element => {
  const date = new Date();
  const [isFOpen, setIsFOpen] = useRecoilState<boolean>(FModal);
  const [isSOpen, setIsSOpen] = useRecoilState<boolean>(SModal);
  const [fdateValue, setFdateValue] = useRecoilState<string>(FDateValue);
  const [sdateValue, setSdateValue] = useRecoilState<string>(SDateValue);
  const [studentObject, setStudentObject] = useRecoilState<StudentObjectType | any>(StudentObject);

  useEffect(() => {
    setFdateValue(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setSdateValue(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
  }, []);

  return (
    <ACColumn>
      <S.ACTitle>날짜</S.ACTitle>
      <S.DateBox>
        <S.Date>
          <S.DateText onClick={() => setIsFOpen(!isFOpen)}>
            {
              studentObject[0].date === ""
              ? `${fdateValue.split("-")[0]}년 ${fdateValue.split("-")[1]}월 ${fdateValue.split("-")[2]}일`
              : `${studentObject[0].date.split("T")[0]}년 ${studentObject[1].date.split("T")[1]}`
            }
          </S.DateText>
          <Calendar isOpen={isFOpen} index={0} />
          <div className="classContainer">
            <S.ClassInput maxLength={1} />
            <div>교시</div>
          </div>
        </S.Date>
        <span>~</span>
        <S.Date>
          <S.DateText onClick={() => setIsSOpen(!isSOpen)}>
          {studentObject[0].date === ""
              ? `${sdateValue.split("-")[0]}년 ${sdateValue.split("-")[1]}월 ${sdateValue.split("-")[2]}일`
              : `${studentObject[0].date.split("T")[0]}년 ${studentObject[1].date.split("T")[1]}`
          }
          </S.DateText>
          <Calendar isOpen={isSOpen} index={1} />
          <div className="classContainer">
            <S.ClassInput maxLength={1} />
            <div>교시</div>
          </div>
        </S.Date>
      </S.DateBox>
    </ACColumn>
  );
};

export default DatePick;
