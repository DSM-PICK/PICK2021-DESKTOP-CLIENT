import React, { FC, useEffect, useState, useLayoutEffect } from "react";
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
  const selectedIndex = useRecoilValue(SelectedIndex);
  const [sdate, setSdate] = useState("결석자 추가");
  const [fdate, setFdate] = useState("결석자 추가");

  useEffect(() => {
    setFdateValue(
      `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
    );
    setSdateValue(
      `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
    );
  }, []);

  useLayoutEffect(() => {
      return studentObject.length === 0
      ? (
        setSdate(sdate),
        setFdate(fdate)
      )
      : (setSdate(
        `${studentObject.find((value : any) => value.id === selectedIndex).sdate.split("-")[0]}년
         ${studentObject.find((value : any) => value.id === selectedIndex).sdate.split("-")[1]}월
         ${studentObject.find((value : any) => value.id === selectedIndex).sdate.split("-")[2]}일`
        ),
        setFdate(
          `${studentObject.find((value : any) => value.id === selectedIndex).fdate.split("-")[0]}년
           ${studentObject.find((value : any) => value.id === selectedIndex).fdate.split("-")[1]}월
           ${studentObject.find((value : any) => value.id === selectedIndex).fdate.split("-")[2]}일`
         ))
  }, [selectedIndex, fdateValue, sdateValue])

  return (
    <ACColumn>
      <S.ACTitle>날짜</S.ACTitle>
      <S.DateBox>
        <S.Date>
          <S.DateText onClick={() => setIsFOpen(!isFOpen)}> 
            {sdate}
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
          {fdate}
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
