import React, { FC, useEffect, useRef, useState } from "react";
import { searchStudents } from "../../../../utils/api/AttendanceChange";
import {
  searchStatus,
  searchedStudents,
  StudentObject,
  SDateValue,
  FDateValue,
  ReasonAtom,
  SClassValue,
  FClassValue
} from "../../../../state/atom/ATChange";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./styles";
import { ACColumn } from "../../styles";
import SelectedStudent from '../../SelectedStudents/index';
import { SelectedStudentsType, StudentObjectType } from "../../../../interface/ATChange";

const Add: FC = (): JSX.Element => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useRecoilState(searchStatus);
  const [searchedStudentsArr, setSearchedStudentsArr] = useRecoilState(searchedStudents);
  const [inputValue, setInputValue] = useState<string>("");
  const [studentObject, setStudentObject] = useRecoilState<StudentObjectType | any>(StudentObject);
  const sdate = useRecoilValue(SDateValue);
  const fdate = useRecoilValue(FDateValue);
  const Reason = useRecoilValue(ReasonAtom);
  const sclass = useRecoilValue(SClassValue);
  const fclass = useRecoilValue(FClassValue);

  const selectStudent = (object: SelectedStudentsType) => {
    if (studentObject.find((value : any) => value.id === object.id)) {
      alert("이미 추가하신 학생입니다.");
      return;
    }
    const data = {
      id: object.id,
      gcn: object.gcn,
      name: object.name,
      sdate: sdate,
      fdate: fdate,
      sclass: sclass,
      fclass: fclass,
      type: 0,
      reason: Reason,
    }
    setSearch(!search);
    setInputValue("");
    setSearchedStudentsArr([]);
    setStudentObject(studentObject.concat(data));
  };

  useEffect(() => {
    console.log(studentObject);
  }, [studentObject])

  return (
    <>
      <ACColumn>
        <S.ACTitle>결석자</S.ACTitle>
        <S.AbsentsContainer ref={searchContainer}>
          <S.AddAbsents onClick={() => setSearch(!search)}>추가</S.AddAbsents>
          <S.SearchStudentsInput
            placeholder="검색..."
            display={search ? "block" : "none"}
            onChange={(e) => {
              setInputValue(e.target.value);
              searchStudents(e.target.value)
                .then((res) => {
                  setSearchedStudentsArr(res.data);
                })
            }}
            value={inputValue}
          />
          <S.SearchedContainer display={search ? "flex" : "none"}>
            {searchedStudentsArr.map((value: any) => {
              return (
                <S.SearchedStudent
                  onClick={() => selectStudent(value)}
                  key={value.id}
                >{`${value.gcn} ${value.name}`}</S.SearchedStudent>
              );
            })}
          </S.SearchedContainer>
          {studentObject.map((value: any) => {
            return (
              <SelectedStudent id={value.id} gcn={value.gcn} name={value.name} key={value.gcn}/>
            );
          })}
        </S.AbsentsContainer>
      </ACColumn>
    </>
  );
};

export default Add;
