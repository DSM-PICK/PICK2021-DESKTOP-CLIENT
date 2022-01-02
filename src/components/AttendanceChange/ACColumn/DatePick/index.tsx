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
  SelectedIndex,
  SClassValue,
  FClassValue
} from "../../../../state/atom/ATChange";
import Calendar from "../../../Calendar/Calendar";
import { StudentObjectType } from "../../../../interface/ATChange";

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
  const [sclass, setSclass] = useRecoilState<number | any>(SClassValue);
  const [fclass, setFclass] = useRecoilState<number | any>(FClassValue);

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

  useEffect(() => {
    setSclass("");
    setFclass("");
    if(studentObject.length === 0) return;
    setSclass(studentObject.find((value : any) => value.id === selectedIndex).sclass === "" 
    ? ""
    : studentObject.find((value : any) => value.id === selectedIndex).sclass)
    setFclass(studentObject.find((value : any) => value.id === selectedIndex).fclass === "" 
    ? ""
    : studentObject.find((value : any) => value.id === selectedIndex).fclass)
  }, [selectedIndex])

  const handleClassInputS = (e : any) => {
    if(studentObject.length === 0) return;
    setStudentObject((prevArr : any) => prevArr.map((value : any) => {
      return value.id === selectedIndex ? { ...value, sclass: e.target.value } : value;
    }))
    setSclass(e.target.value);
  }

  const handleClassInputF = (e : any) => {
    if(studentObject.length === 0) return;
    setStudentObject((prevArr : any) => prevArr.map((value : any) => {
      return value.id === selectedIndex ? { ...value, fclass: e.target.value } : value;
    }))
    setFclass(e.target.value);
  }

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
            <S.ClassInput maxLength={1} value={sclass} onChange={handleClassInputS}/>
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
            <S.ClassInput maxLength={1} value={fclass} onChange={handleClassInputF}/>
            <div>교시</div>
          </div>
        </S.Date>
      </S.DateBox>
    </ACColumn>
  );
};

export default DatePick;
