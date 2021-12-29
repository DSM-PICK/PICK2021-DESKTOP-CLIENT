import React, { FC, useEffect, useRef, useState } from "react";
import { searchStudents } from "../../../../utils/api/AttendanceChange";

import * as S from "../../styles";
//출결 변경
const Add: FC = (): JSX.Element => {
  const searchContainer = useRef<HTMLDivElement>(null);

  const addStudents = () => {
    const input = document.createElement("input");
    searchContainer.current?.appendChild(input);
    input.placeholder = "검색...";
    input.onchange = (e: any) => {
      searchStudents(e.target.value)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("로그인 후에 서비스를 사용하실 수 있습니다.");
            window.location.href = "/login";
          }
        });
    };
  };

  return (
    <>
      <S.Title>출결 변경</S.Title>
      <S.ACColumn>
        <S.ACTitle>결석자</S.ACTitle>
        <S.AbsentsContainer ref={searchContainer}>
          <S.AddAbsents onClick={addStudents}>추가</S.AddAbsents>
        </S.AbsentsContainer>
      </S.ACColumn>
    </>
  );
};

export default Add;
