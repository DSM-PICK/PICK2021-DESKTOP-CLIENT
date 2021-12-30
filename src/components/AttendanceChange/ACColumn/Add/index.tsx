import React, { FC, useRef, useState } from "react";
import { searchStudents } from "../../../../utils/api/AttendanceChange";
import {
  searchStatus,
  searchedStudents,
  selectedStudents,
} from "../../../../state/atom/ATChange";
import { useRecoilState } from "recoil";
import * as S from "./styles";
import { ACColumn } from "../../styles";

interface objectType { id: number; gcn: string; name: string };

const Add: FC = (): JSX.Element => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useRecoilState(searchStatus);
  const [selectedStudentsArr, setSelectedStudentsArr] = useRecoilState<any>(selectedStudents);
  const [searchedStudentsArr, setSearchedStudentsArr] = useRecoilState(searchedStudents);
  const [inputValue, setInputValue] = useState<string>("");

  const selectStudent = (object: objectType) => {
    if (selectedStudentsArr.find((value : any) => value.id === object.id)) {
      alert("이미 추가하신 학생입니다.");
      return;
    }
    setSearch(!search);
    setInputValue("");
    setSearchedStudentsArr([]);
    setSelectedStudentsArr([object ,...selectedStudentsArr]);
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
              <S.SelectedStudents
                key={value.id}
              >{`${value.gcn} ${value.name}`}</S.SelectedStudents>
            );
          })}
        </S.AbsentsContainer>
      </ACColumn>
    </>
  );
};

export default Add;
