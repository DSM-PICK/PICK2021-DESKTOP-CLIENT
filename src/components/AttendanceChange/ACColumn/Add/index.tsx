import React, { FC, useEffect, useRef, useState } from "react";
import { searchStudents } from "../../../../utils/api/AttendanceChange";
import {
  searchStatus,
  searchedStudents,
  selectedStudents,
  StudentObject,
  SDateValue,
  FDateValue,
  ReasonAtom
} from "../../../../state/atom/ATChange";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./styles";
import { ACColumn } from "../../styles";
import SelectedStudent from '../../SelectedStudents/index';
import { SelectedStudentsType, StudentObjectType } from "../../../../../interface/ATChange";

const Add: FC = (): JSX.Element => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useRecoilState(searchStatus);
  const [selectedStudentsArr, setSelectedStudentsArr] = useRecoilState<any>(selectedStudents);
  const [searchedStudentsArr, setSearchedStudentsArr] = useRecoilState(searchedStudents);
  const [inputValue, setInputValue] = useState<string>("");
  const [studentObject, setStudentObject] = useRecoilState<StudentObjectType | any>(StudentObject);
  const sdate = useRecoilValue(SDateValue);
  const fdate = useRecoilValue(FDateValue);
  const Reason = useRecoilValue(ReasonAtom);

  const selectStudent = (object: SelectedStudentsType) => {
    if (selectedStudentsArr.find((value : any) => value.id === object.id)) {
      alert("이미 추가하신 학생입니다.");
      return;
    }
    const data = {
      id: object.id,
      gcn: object.gcn,
      name: object.name,
      sdate: sdate,
      fdate: fdate,
      type: 0,
      reason: Reason,
      selected: true
    }
    setSearch(!search);
    setInputValue("");
    setSearchedStudentsArr([]);
    setSelectedStudentsArr([object ,...selectedStudentsArr]);
    setStudentObject(studentObject.concat(data));
  };

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

          {selectedStudentsArr.map((value: any) => {
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
