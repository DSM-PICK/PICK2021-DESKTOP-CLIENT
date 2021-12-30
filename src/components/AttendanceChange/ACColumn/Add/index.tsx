import { AxiosError } from "axios";
import React, { FC, useEffect, useRef, useState } from "react";
import { searchStudents } from "../../../../utils/api/AttendanceChange";
import { searchStatus } from "../../../../state/atom/ATChange";
import { useRecoilState } from "recoil";
import * as S from "./styles";
import { ACColumn } from "../../styles";
//출결 변경
const Add: FC = (): JSX.Element => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useRecoilState(searchStatus);
  const selectedStudentsArr = ["2119 조준서"];

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
              searchStudents(e.target.value)
                .then((res) => {
                  console.log(res);
                })
                .catch((err: AxiosError) => {
                  console.log(err);
                });
            }}
          />
          {
            selectedStudentsArr.map((value) => {
              return <S.SelectedStudents>{value}</S.SelectedStudents>
            })
          }
        </S.AbsentsContainer>
      </ACColumn>
    </>
  );
};

export default Add;
